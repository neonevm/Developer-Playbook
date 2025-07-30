import React from 'react'
import { LucideIcon } from 'lucide-react'

// Template for new reusable components
// Replace the content below with your specific component

interface ComponentTemplateProps {
  title?: string
  description?: string
  icon?: LucideIcon
  children?: React.ReactNode
  className?: string
}

export default function ComponentTemplate({
  title = 'Component Title',
  description = 'Component description',
  icon: Icon,
  children,
  className = '',
}: ComponentTemplateProps) {
  return (
    <div className={`bg-[#1a1a1a] border border-white/10 rounded-lg p-6 ${className}`}>
      <div className="flex items-center mb-4">
        {Icon && (
          <div className="w-8 h-8 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center mr-3">
            <Icon className="h-4 w-4 text-white" />
          </div>
        )}
        <div>
          <h3 className="text-lg font-display font-semibold text-white">{title}</h3>
          {description && <p className="text-white/80 text-sm">{description}</p>}
        </div>
      </div>
      
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  )
}

// Example usage:
/*
import ComponentTemplate from './templates/component-template'
import { BookOpen } from 'lucide-react'

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ComponentTemplate
          title="Example Component"
          description="This is an example of how to use the component template"
          icon={BookOpen}
        >
          <p className="text-white/80">Your component content goes here.</p>
        </ComponentTemplate>
      </div>
    </div>
  )
}
*/ 