If you’ve built on Ethereum (Solidity, Hardhat) or Solana (Rust, Anchor), you already know how to write, test, and deploy on a single blockchain.

Cross-chain development takes that a step further — your dApp can run on one chain while directly using features, assets, or logic from another. With Neon EVM, you can run Ethereum-compatible smart contracts inside Solana’s high-performance runtime, and even call Solana programs directly from Solidity.

---

## 1️⃣ Skills You Already Have — Now Combine Them

- **From Ethereum Dev** 🟢  
  - Solidity for EVM contracts  
  - Hardhat/Foundry workflows  
  - Understanding ERC-20/ERC-721 token standards  

- **From Solana Dev** 🔵  
  - Accounts model & PDAs  
  - Writing & deploying programs with Anchor  
  - Using Solana CLI & explorers  

When you bring them together with Neon EVM, you can write **Solidity contracts that talk to Solana programs** without bridges or wrappers.  

## 2️⃣ The Cross-Chain Dev Stack

- **Neon EVM** → Deploy and run Solidity contracts inside Solana’s runtime.  
- **Composability Libraries** → Prebuilt Solidity interfaces to call Solana programs (SPL tokens, Serum, Raydium, etc.).  
- **Solana CLI & Explorer** → To deploy or inspect Solana-side programs and accounts.  
- **Hardhat** → To deploy Solidity contracts to Neon EVM and run tests.  


💡 **Pro Tip**  
Master *one* chain first, but don’t silo yourself. Cross-chain dApps are just apps with more than one backend — the hardest part is understanding how each chain’s data model and execution flow fit together. Neon EVM removes a lot of friction by letting you reuse Ethereum tooling while tapping into Solana’s speed.
