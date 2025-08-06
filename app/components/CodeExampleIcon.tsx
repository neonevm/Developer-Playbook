import { Github, Code, Zap, Shield, Globe, Star, FileCode } from 'lucide-react'

interface CodeExampleIconProps {
  tags: string[]
  category: string
}

export default function CodeExampleIcon({ tags, category }: CodeExampleIconProps) {
  // Determine icon based on tags and category
  if (tags.some(tag => tag.includes('Security') || tag.includes('Standards'))) {
    return <Shield className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('DeFi') || tag.includes('AMM') || tag.includes('DEX'))) {
    return <Zap className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('React') || tag.includes('Frontend') || tag.includes('Web3'))) {
    return <Globe className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Hardhat') || tag.includes('Testing') || tag.includes('Framework'))) {
    return <FileCode className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Full Stack') || tag.includes('Boilerplate'))) {
    return <Code className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Starter') || tag.includes('Template'))) {
    return <Star className="h-5 w-5 text-white" />
  }
  
  if (category.includes('Smart Contract') || tags.some(tag => tag.includes('ERC'))) {
    return <Shield className="h-5 w-5 text-white" />
  }
  
  if (category.includes('Frontend') || tags.some(tag => tag.includes('JavaScript'))) {
    return <Globe className="h-5 w-5 text-white" />
  }
  
  if (category.includes('Testing') || tags.some(tag => tag.includes('Security'))) {
    return <Shield className="h-5 w-5 text-white" />
  }
  
  // Default to Github for code examples
  return <Github className="h-5 w-5 text-white" />
} 