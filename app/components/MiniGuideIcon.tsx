import { Target, BookOpen, Code, Zap, Shield, Database } from 'lucide-react'

interface MiniGuideIconProps {
  tags: string[]
  category: string
}

export default function MiniGuideIcon({ tags, category }: MiniGuideIconProps) {
  // Determine icon based on tags and category
  if (tags.some(tag => tag.includes('Security') || tag.includes('Vulnerabilities'))) {
    return <Shield className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Gas') || tag.includes('Optimization'))) {
    return <Zap className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Solidity') || tag.includes('Events'))) {
    return <Code className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Hardhat') || tag.includes('Remix') || tag.includes('Foundry'))) {
    return <Code className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Cryptography') || tag.includes('Consensus'))) {
    return <Shield className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('DeFi') || tag.includes('AMM'))) {
    return <Zap className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Neon EVM') || tag.includes('Cross-Chain'))) {
    return <Code className="h-5 w-5 text-white" />
  }
  
  if (category.includes('Fundamentals') || tags.some(tag => tag.includes('Basics'))) {
    return <BookOpen className="h-5 w-5 text-white" />
  }
  
  if (category.includes('Smart Contract') || tags.some(tag => tag.includes('ERC'))) {
    return <Database className="h-5 w-5 text-white" />
  }
  
  // Default to Target for mini-guides
  return <Target className="h-5 w-5 text-white" />
} 