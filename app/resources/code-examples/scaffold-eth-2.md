---
title: "Scaffold ETH 2"
description: "Forkable Ethereum development stack focused on fast product iterations"
authors: ["@dev-playbook"]
tags: ["Ethereum Dev", "Full Stack", "Ethereum", "React", "Hardhat"]
languages: ["TypeScript", "React"]
url: "https://github.com/scaffold-eth/scaffold-eth-2"
dateAdded: 2024-01-15
level: "Advanced"
category: "Full-Stack Development Templates"
---

# Scaffold ETH 2

Scaffold ETH 2 is a forkable Ethereum development stack focused on fast product iterations. It provides a complete development environment for building decentralized applications.

## What is Scaffold ETH 2?

Scaffold ETH 2 is a comprehensive development stack that includes everything you need to build, test, and deploy smart contracts and frontend applications. It's designed for rapid prototyping and production deployment.

## Key Features

### 1. Full Stack Development
- Smart contract development with Hardhat
- Frontend with React and TypeScript
- Subgraph integration with The Graph
- Deploy to multiple networks

### 2. Built-in Components
- Wallet connection
- Contract interaction
- Transaction handling
- Network switching

### 3. Development Tools
- Hot reloading
- Contract verification
- Gas estimation
- Testing framework

## Quick Start

```bash
# Clone the repository
git clone https://github.com/scaffold-eth/scaffold-eth-2.git

# Install dependencies
cd scaffold-eth-2
yarn install

# Start development
yarn start
```

## Project Structure

```
scaffold-eth-2/
├── packages/
│   ├── contracts/          # Smart contracts
│   ├── frontend/          # React frontend
│   └── subgraph/          # The Graph subgraph
├── hardhat.config.ts      # Hardhat configuration
└── package.json
```

## Smart Contract Development

### Basic Contract

```solidity
// contracts/YourContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract YourContract {
    string public greeting = "Hello World!";
    
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
```

### Frontend Integration

```typescript
// frontend/src/components/YourContract.tsx
import { useContractReader, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const YourContract = () => {
  const { data: greeting } = useContractReader({
    contractName: "YourContract",
    functionName: "greeting",
  });

  const { writeAsync: setGreeting } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "setGreeting",
  });

  return (
    <div>
      <p>Greeting: {greeting}</p>
      <button onClick={() => setGreeting({ args: ["New Greeting!"] })}>
        Set Greeting
      </button>
    </div>
  );
};
```

## Configuration

### Hardhat Config

```typescript
// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
};

export default config;
```

### Frontend Config

```typescript
// frontend/src/config/networks.ts
export const networks = {
  hardhat: {
    name: "Hardhat",
    color: "#ff6b6b",
    chainId: 1337,
    blockExplorer: "",
    rpcUrl: "http://127.0.0.1:8545",
  },
  mainnet: {
    name: "Ethereum",
    color: "#ff8b9e",
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
    blockExplorer: "https://etherscan.io/",
  },
};
```

## Advanced Features

### 1. Subgraph Integration

```typescript
// frontend/src/hooks/scaffold-eth/useScaffoldContractRead.ts
export const useScaffoldContractRead = <T>({
  contractName,
  functionName,
  args,
}: {
  contractName: string;
  functionName: string;
  args?: any[];
}): { data: T | undefined; isLoading: boolean } => {
  // Implementation
};
```

### 2. Contract Verification

```bash
# Verify contract on Etherscan
yarn verify --network mainnet CONTRACT_ADDRESS
```

### 3. Gas Estimation

```typescript
// frontend/src/hooks/scaffold-eth/useScaffoldContractWrite.ts
export const useScaffoldContractWrite = ({
  contractName,
  functionName,
  args,
}: {
  contractName: string;
  functionName: string;
  args?: any[];
}) => {
  // Implementation with gas estimation
};
```

## Best Practices

1. **Use TypeScript**: Leverage type safety
2. **Test Thoroughly**: Write comprehensive tests
3. **Gas Optimization**: Monitor and optimize gas usage
4. **Security First**: Follow security best practices
5. **Documentation**: Document your contracts and functions

## Deployment

```bash
# Deploy to local network
yarn deploy

# Deploy to testnet
yarn deploy --network sepolia

# Deploy to mainnet
yarn deploy --network mainnet
```

## Quick Reference

**Learning Journey Stage**: Ethereum Dev
**Difficulty**: Advanced
**Duration**: Varies
**Category**: Full-Stack Development Templates 