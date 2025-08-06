import { GraduationCap, BookOpen, Code, Zap, Shield, Globe, Clock } from 'lucide-react'

interface CourseIconProps {
  tags: string[]
  category: string
}

export default function CourseIcon({ tags, category }: CourseIconProps) {
  // Determine icon based on tags and category
  if (tags.some(tag => tag.includes('Solidity') || tag.includes('Smart Contracts'))) {
    return <Code className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Cryptography') || tag.includes('Security'))) {
    return <Shield className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Web3') || tag.includes('Fundamentals'))) {
    return <Globe className="h-5 w-5 text-white" />
  }
  
  if (tags.some(tag => tag.includes('Rust') || tag.includes('Programming'))) {
    return <Code className="h-5 w-5 text-white" />
  }
  
  if (category.includes('Fundamentals') || tags.some(tag => tag.includes('Academic'))) {
    return <BookOpen className="h-5 w-5 text-white" />
  }
  
  // Default to GraduationCap for courses
  return <GraduationCap className="h-5 w-5 text-white" />
} 