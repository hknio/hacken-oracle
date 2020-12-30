pragma solidity >= 0.6;

import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.6/vendor/Ownable.sol";
import "./interfaces/ICrystalOracle.sol";
import "../libraries/TransferHelper.sol";

contract CrystalOracle is ICrystalOracle, ChainlinkClient, Ownable {

    struct RequestInfo {
        address account;
        bytes32 propertyHash;
    }

    uint private ORACLE_PAYMENT;

    mapping (bytes32 => RequestInfo) private _requestInfoByRequestId;
    mapping (address => mapping(bytes32 => bool)) private _propertyResults;
    mapping (bytes32 => bool) private _supportedHashes;

    event ResultFulfilled(
        bytes32 indexed requestId,
        uint indexed result
    );

    constructor(
        address _link,
        address _oracle,
        uint _oraclePayment
    )
        public
    {
        setChainlinkToken(_link);
        setChainlinkOracle(_oracle);
        
        ORACLE_PAYMENT = _oraclePayment;

        string[20] memory props = ["atm", "dark_market", "dark_service", "exchange_fraudulent", "exchange_mlrisk_high", "exchange_mlrisk_low", "exchange_mlrisk_moderate", "exchange_mlrisk_veryhigh", "gambling", "illegal_service", "marketplace", "miner", "mixer", "p2p_exchange_mlrisk_high", "p2p_exchange_mlrisk_low", "payment", "ransom", "scam", "stolen_coins", "wallet"];
        for (uint i; i < props.length; ++i) {
            bytes32 hash = keccak256(abi.encodePacked(props[i]));
            require(!_supportedHashes[hash], 'CrystalOracle: COLLISION');
            _supportedHashes[hash] = true;
        }
    }

    function updateOraclePayment(uint _oraclePayment) external onlyOwner override {
        ORACLE_PAYMENT = _oraclePayment;
    }

    function updateOracleAddress(address _oracle) external onlyOwner override {
        setChainlinkOracle(_oracle);
    }

    function updateChainlinkToken(address _link) external onlyOwner override {
        setChainlinkToken(_link);
    }

    function requestProperty(address account, bytes32 jobId, string calldata property)
        external
        override
    {
        bytes32 hash = _propertyHash(property);
        TransferHelper.safeTransferFrom(chainlinkTokenAddress(), msg.sender, address(this), ORACLE_PAYMENT);
        bytes memory urlBytes = abi.encodePacked("https://apiexpert.crystalblockchain.com/monitor/tx/add");
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfillResult.selector
        );
        req.add("post", string(urlBytes));

        bytes memory body = abi.encodePacked("{\"direction\":\"withdrawal\",\"name\":\"Crystal request\",\"currency\":\"eth\",\"address\":\"");
        body = abi.encodePacked(body, toAsciiString(account));
        body = abi.encodePacked(body, "\"}");
        req.add("body", string(body));

        string[] memory path = new string[](4);
        path[0] = "data";
        path[1] = "riskscore_profile";
        path[2] = "signals";
        path[3] = property;
        req.addStringArray("path", path);

        bytes32 id = sendChainlinkRequestTo(chainlinkOracleAddress(), req, ORACLE_PAYMENT);
        RequestInfo memory info = RequestInfo({account: account, propertyHash: hash});
        _requestInfoByRequestId[id] = info;
    }

    function fulfillResult(bytes32 requestId, uint result)
        external
        recordChainlinkFulfillment(requestId)
    {
        emit ResultFulfilled(requestId, result);
        RequestInfo memory info = _requestInfoByRequestId[requestId];
        _propertyResults[info.account][info.propertyHash] = result > 75;
        delete _requestInfoByRequestId[requestId];
    }

    function isRiskyProperty(address account, string calldata property) 
        external 
        view 
        override
        returns (bool) 
    {
        return _propertyResults[account][_propertyHash(property)];
    }

    function _propertyHash(string memory property) 
        private 
        view 
        returns (bytes32) 
    {
        bytes32 hash = keccak256(abi.encodePacked(property));
        require(_supportedHashes[hash], 'CrystalOracle: INVALID');
        return hash;
    }

    function toAsciiString(address x) private pure returns (string memory) {
        bytes memory s = new bytes(40);
        for (uint i = 0; i < 20; i++) {
            byte b = byte(uint8(uint(x) / (2**(8*(19 - i)))));
            byte hi = byte(uint8(b) / 16);
            byte lo = byte(uint8(b) - 16 * uint8(hi));
            s[2*i] = char(hi);
            s[2*i+1] = char(lo);            
        }
        return string(s);
    }

    function char(byte b) private pure returns (byte c) {
        if (uint8(b) < 10) return byte(uint8(b) + 0x30);
        else return byte(uint8(b) + 0x57);
    }
}
