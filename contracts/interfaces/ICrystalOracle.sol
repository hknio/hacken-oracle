pragma solidity >= 0.6;

interface ICrystalOracle {
    function updateOraclePayment(uint _oraclePayment) external;
    function updateOracleAddress(address _oracle) external;
    function updateChainlinkToken(address _link) external;
    function requestProperty(address account, bytes32 jobId, string calldata property) external;
    function isRiskyProperty(address account, string calldata property) external view returns (bool);
}