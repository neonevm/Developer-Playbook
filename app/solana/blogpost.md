

Solana development means working in **two layers**:  
- **On-chain** → Programs (smart contracts) run on the validator network  
- **Off-chain** → Apps/scripts interact with programs via RPC  

---

## 1. Keep Your Existing Skills

- **Python** → Great for automation, bots, and querying data with [`solana-py`](https://github.com/michaelhly/solana-py).  
- **JavaScript / TypeScript** → Essential for frontends and tooling with [`@solana/web3.js`](https://solana-labs.github.io/solana-web3.js/).  

---

## 2. Learn the Solana Stack

- **Solana CLI** → Keys, airdrops, deployment, account inspection  
- **Anchor Framework** → Beginner-friendly, reduces Rust boilerplate  
- **Test Environments** → Localnet (offline), Devnet (public testnet)  
- **Wallets** → Phantom, Solflare for signing transactions  
- **Explorer** → View transactions, accounts, programs  

---

## 3. Learn Rust for On-Chain Work

Focus on:  
- Accounts and how they store state  
- Instruction handlers (transaction logic)  
- PDAs (Program Derived Addresses)  
- CPI (calling other programs)  

---

## 4. Key Solana Concepts

- Account-based state — data lives outside the program  
- Transactions can have multiple instructions  
- Low fees, but watch compute limits  
- Recent blockhashes for transaction validity  


---

💡 **Pro Tip**  
Master the **accounts model** early — it’s the core mental model for Solana. Deploy small programs often and learn by iterating.
