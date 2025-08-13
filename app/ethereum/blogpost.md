## 1. Specific tools 🛠️

**Node.js & npm** → Ethereum tooling is heavily JavaScript/TypeScript-based. You’ll need Node.js to run build scripts, deploy contracts, and work with libraries like Hardhat or Foundry.

**Hardhat or Foundry** → These are your “local blockchain labs.”

- **Hardhat**: Easy to get started with, integrates tightly with ethers.js, lots of plugins for testing, debugging, and deploying.
- **Foundry**: Fast, Rust-based, loved by power users for its speed and solidity-native testing.

**Metamask** → Your go-to wallet for signing transactions in dev and test environments. Learn how to add testnets, manage multiple accounts, and export/import private keys.

---

## 2. Languages 

**Solidity** → The main smart contract language for Ethereum. Learn it well enough to read other people’s contracts — most dApp features are combinations of existing standards (ERC-20, ERC-721, ERC-1155) with your own logic.

**JavaScript / TypeScript** → Essential for connecting your contracts to a frontend. Libraries like ethers.js or viem will let you read/write blockchain data from your app. TypeScript is preferred in production — you’ll appreciate the type safety when your dApp scales.

---

## 3. Understand the Key Principles 

**Gas** → Every transaction has a cost. Poorly optimized code = higher fees. Learn gas patterns early (e.g., mapping vs. array lookups).

**Testnets** → You can (and should) deploy to free Ethereum testnets like Sepolia or Holesky before touching mainnet. They mimic mainnet behavior without risking real ETH.

**Events** → These are your contract’s “print statements” — log data you want your frontend to react to.

**Security First** → Ethereum contracts are immutable once deployed. Bugs can’t be patched easily. Always test, audit, and use battle-tested libraries like OpenZeppelin.

---

## 4. Workflow of an Ethereum Developer

1️⃣ **Write** your contract in Solidity  
2️⃣ **Compile & test** locally with Hardhat or Foundry  
3️⃣ **Deploy** to a testnet (via ethers.js scripts or CLI tools)  
4️⃣ **Connect** it to a frontend (React + ethers.js)  
5️⃣ **Test** with real user flows before mainnet deployment  

---

💡 **Pro Tip**  
Don’t try to build “the next big protocol” on day one. Start small — clone an ERC-20, add one new function, deploy, and interact with it. The fastest way to learn Ethereum dev is by modifying existing working code.
