---
title: "OpenZeppelin Contracts"
description: "Library for secure smart contract development with battle-tested implementations"
authors: ["@dev-playbook"]
tags: ["Ethereum Dev", "Security", "Standards", "ERC20", "ERC721"]
languages: ["Solidity"]
url: "https://github.com/OpenZeppelin/openzeppelin-contracts"
dateAdded: 2024-01-15
level: "Advanced"
category: "Smart Contract Templates"
---

# OpenZeppelin Contracts

OpenZeppelin Contracts is the standard for secure blockchain applications. It provides a library of reusable smart contracts for Ethereum and other EVM and eWASM blockchains.

## What is OpenZeppelin?

OpenZeppelin is a library for secure smart contract development. It provides implementations of standards like ERC20 and ERC721 that you can extend and customize, as well as Solidity components to build custom contracts and complex decentralized systems.

## Key Features

### 1. Token Standards

```solidity
// ERC20 Token
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
```

### 2. Access Control

```solidity
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyContract is Ownable {
    function adminFunction() public onlyOwner {
        // Only owner can call this
    }
}
```

### 3. Security Features

```solidity
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract SecureContract is ReentrancyGuard, Pausable {
    function withdraw() public nonReentrant whenNotPaused {
        // Secure withdrawal function
    }
}
```

## Installation

```bash
npm install @openzeppelin/contracts
```

## Usage Examples

### ERC721 NFT Contract

```solidity
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    uint256 public tokenCounter;
    
    constructor() ERC721("MyNFT", "MNFT") {}
    
    function mint() public {
        _mint(msg.sender, tokenCounter);
        tokenCounter++;
    }
}
```

### ERC1155 Multi-Token

```solidity
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyMultiToken is ERC1155 {
    constructor() ERC1155("https://api.example.com/tokens/{id}.json") {}
    
    function mint(uint256 id, uint256 amount) public {
        _mint(msg.sender, id, amount, "");
    }
}
```

### Crowdsale Contract

```solidity
import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";
import "@openzeppelin/contracts/crowdsale/emission/AllowanceCrowdsale.sol";

contract MyCrowdsale is Crowdsale, AllowanceCrowdsale {
    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token,
        IERC20 currency
    ) Crowdsale(rate, wallet, currency) AllowanceCrowdsale(token) {}
}
```

## Best Practices

1. **Use Latest Version**: Always use the latest stable version
2. **Extend Don't Copy**: Extend OpenZeppelin contracts rather than copying
3. **Security First**: Use security features like ReentrancyGuard
4. **Test Thoroughly**: Comprehensive testing is essential
5. **Audit Your Code**: Consider professional audits for production

## Common Components

### Access Control
- `Ownable`: Simple access control
- `AccessControl`: Role-based access control
- `TimelockController`: Time-delayed execution

### Security
- `ReentrancyGuard`: Prevent reentrancy attacks
- `Pausable`: Emergency pause functionality
- `PullPayment`: Secure payment patterns

### Tokens
- `ERC20`: Fungible tokens
- `ERC721`: Non-fungible tokens
- `ERC1155`: Multi-token standard

### Utilities
- `Counters`: Safe counter implementation
- `Strings`: String utilities
- `Arrays`: Array utilities

## Quick Reference

**Learning Journey Stage**: Ethereum Dev
**Difficulty**: Advanced
**Duration**: Varies
**Category**: Smart Contract Templates 