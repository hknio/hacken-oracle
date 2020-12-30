# About

In 2020, the amount of stolen cryptocurrencies is less than in 2019, but nevertheless, the number of hacks has only increased. The DeFi boom attracted the attention of many hackers and bad actors as money continued to flood into the market.

At the moment, there are no oracles on the market that would allow determining whether an address is involved in any kind of fraud (For example hacks, scams, etc). This allows criminals to use DeFi platforms to exchange illegally obtained cryptocurrencies. For example, Kucoin hackers used Uniswap to exchange stolen coins: https://blog.chainalysis.com/reports/kucoin-hack-2020-defi-uniswap. 

Hacken using Crystal data created oracle that allows protecting crypto platforms from “malicious” crypto deposits. Platforms and users will be able to check whether it is safe to accept a transaction from a particular address because cryptocurrencies can be blocked when they are further deposited on any centralized exchange.

# Properties

Pass one of the properties below to Crystal Oracle and check if address is risky for this criteria

1. `atm` – cryptocurrency ATM operator. 
2. `dark_market` – an online marketplace that operates via darknets and is used for trading illegal products for cryptocurrency. 
3. `dark_service` – an organization that operates via darknets and offers illegal services for cryptocurrency. 
4. `exchange_mlrisk_low` – exchanges that require KYC/AML identification for any deposit or withdrawal. 
5. `exchange_mlrisk_moderate` – exchanges that allow the withdrawal of up to $2000 in crypto daily without KYC/AML. (For fiat withdrawals, KYC/AML is still required.) 
6. `exchange_mlrisk_high` – exchanges that allow the withdrawal of more than $2000 in crypto daily without KYC/AML. (For fiat withdrawals, KYC/AML is still required.) 
7. `exchange_mlrisk_veryhigh` – exchanges that don’t use verification procedures, or have requirements for certain countries only. 
8. `exchange_fraudulent` – an exchange that was involved in illegal activity. 
9. `gambling` – an online resource offering gambling services using cryptocurrency. 
10. `illegal_service` – a resource offering illegal services or engaged in illegal activities. 
11. `miner` – an organization that utilizes its computing power for mining cryptocurrency blocks. 
12. `mixer` – a service for mixing funds from different sources to make tracing them back harder or almost impossible. It is mostly used for money laundering. 
13. `marketplace` – an entity offering legal services/trading goods for cryptocurrency.
14. `wallet` – a service for storage and making payments with cryptocurrency. 
15. `p2p_exchange_mlrisk_high` – P2P exchanges that allow the withdrawal of more than $1000 in crypto daily without KYC/ AML procedures. 
16. `p2p_exchange_mlrisk_low` – P2P exchanges that require KYC/ AML identification for all deposits and withdrawals. 
17. `payment` – a service that acts as an intermediary between customers and the company which provides services for making a payment. 
18. `ransom` – extortioners demanding payment in the form of cryptocurrency. 
19. `scam` – entities that have scammed their customers and taken possession of their cryptocurrency. 
20. `stolen_coins` – the entities which have taken possession of someone else’s cryptocurrency by hacking

# Request oracle to analyze property's risk factor

To request property call `requestProperty` method with `account` (address to check), `jobId` (job identifier from chainlink node) and `property` (one of supported properties).

##### Interface

```Solidity
function requestProperty(address account, bytes32 jobId, string calldata property) external;
```

### Example

```Solidity
ICrystalOracle(<oracle address>).requestProperty(0xeB31973E0FeBF3e3D7058234a5eBbAe1aB4B8c23, 0xaff4a98545c948e18547dd80d4e413eb00000000000000000000000000000000, "atm")
```

# Check if address is risky in context of specific property

To get risky call `isRiskyProperty` method with `account` (address to check) and `property` (one of supported properties).

##### Interface

```Solidity
function isRiskyProperty(address account, string calldata property) external view returns (bool);
```

### Example

```Solidity
ICrystalOracle(<oracle address>).isRiskyProperty(0xeB31973E0FeBF3e3D7058234a5eBbAe1aB4B8c23, "atm")
```
