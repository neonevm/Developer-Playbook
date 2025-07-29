import Link from 'next/link'
import { ArrowRight, CheckCircle, BookOpen, Code, Users, Zap } from 'lucide-react'

const setupSteps = [
  {
    title: 'Environment Setup',
    description: 'Install and configure your development environment',
    items: [
      'Install Node.js and npm/yarn',
      'Set up your code editor (VS Code recommended)',
      'Install Git and configure your identity',
      'Set up SSH keys for GitHub',
      'Install Docker (if needed for your project)',
    ],
  },
  {
    title: 'Project Setup',
    description: 'Get your local development environment running',
    items: [
      'Clone the repository',
      'Install dependencies with npm install',
      'Set up environment variables',
      'Run the development server',
      'Verify everything is working',
    ],
  },
  {
    title: 'Code Quality Tools',
    description: 'Configure linting, formatting, and testing',
    items: [
      'Install ESLint and Prettier',
      'Configure TypeScript (if applicable)',
      'Set up testing framework (Jest/Vitest)',
      'Configure pre-commit hooks',
      'Set up code coverage reporting',
    ],
  },
]

const essentialTools = [
  {
    name: 'VS Code',
    description: 'Our recommended code editor with excellent extensions',
    icon: Code,
    link: 'https://code.visualstudio.com/',
  },
  {
    name: 'GitHub',
    description: 'Version control and collaboration platform',
    icon: Users,
    link: 'https://github.com/',
  },
  {
    name: 'Postman/Insomnia',
    description: 'API testing and development',
    icon: Zap,
    link: 'https://www.postman.com/',
  },
]

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <Link href="/" className="flex items-center text-gray-500 hover:text-gray-900">
              <ArrowRight className="h-5 w-5 rotate-180 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Getting Started
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to the team! This guide will help you set up your development 
            environment and get you up to speed with our development workflow.
          </p>
        </div>

        {/* Setup Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Setup Checklist
          </h2>
          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div key={step.title} className="card">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Tools */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Essential Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {essentialTools.map((tool) => (
              <div key={tool.name} className="card">
                <div className="flex items-center mb-4">
                  <tool.icon className="h-8 w-8 text-primary-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {tool.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/development"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
            >
              <Code className="h-8 w-8 text-primary-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Development Workflow</h3>
                <p className="text-gray-600">Learn our coding standards and practices</p>
              </div>
            </Link>
            
            <Link
              href="/collaboration"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
            >
              <Users className="h-8 w-8 text-primary-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Team Collaboration</h3>
                <p className="text-gray-600">Communication and code review guidelines</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 