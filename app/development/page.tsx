import Link from 'next/link'
import { ArrowRight, Code, GitBranch, CheckCircle, AlertTriangle, Info } from 'lucide-react'

const codingStandards = [
  {
    title: 'Code Style',
    description: 'Consistent formatting and naming conventions',
    items: [
      'Use meaningful variable and function names',
      'Follow camelCase for variables and functions',
      'Use PascalCase for classes and components',
      'Keep functions small and focused (max 20 lines)',
      'Use descriptive comments for complex logic',
    ],
  },
  {
    title: 'File Organization',
    description: 'How to structure your code and files',
    items: [
      'Group related files in directories',
      'Use index files for clean imports',
      'Separate concerns (components, utils, types)',
      'Keep files under 300 lines when possible',
      'Use consistent file naming conventions',
    ],
  },
  {
    title: 'Error Handling',
    description: 'Best practices for handling errors gracefully',
    items: [
      'Always handle async operations with try/catch',
      'Provide meaningful error messages',
      'Log errors appropriately for debugging',
      'Use type guards for runtime type checking',
      'Implement fallback UI for error states',
    ],
  },
]

const gitWorkflow = [
  {
    step: '1',
    title: 'Create Feature Branch',
    description: 'Always work on a feature branch',
    command: 'git checkout -b feature/your-feature-name',
  },
  {
    step: '2',
    title: 'Make Changes',
    description: 'Write your code following our standards',
    command: 'git add . && git commit -m "feat: add new feature"',
  },
  {
    step: '3',
    title: 'Push and Create PR',
    description: 'Push your branch and create a pull request',
    command: 'git push origin feature/your-feature-name',
  },
  {
    step: '4',
    title: 'Code Review',
    description: 'Get feedback from team members',
    command: 'Address review comments and update PR',
  },
  {
    step: '5',
    title: 'Merge',
    description: 'Merge after approval and tests pass',
    command: 'Squash and merge to main branch',
  },
]

const testingGuidelines = [
  {
    title: 'Unit Tests',
    description: 'Test individual functions and components',
    coverage: '80% minimum',
    tools: ['Jest', 'React Testing Library', 'Vitest'],
  },
  {
    title: 'Integration Tests',
    description: 'Test component interactions and API calls',
    coverage: '60% minimum',
    tools: ['Cypress', 'Playwright', 'Testing Library'],
  },
  {
    title: 'E2E Tests',
    description: 'Test complete user workflows',
    coverage: 'Critical paths only',
    tools: ['Cypress', 'Playwright', 'Selenium'],
  },
]

export default function DevelopmentPage() {
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
            Development Workflow
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our coding standards, Git workflow, and development best practices 
            to ensure high-quality, maintainable code.
          </p>
        </div>

        {/* Coding Standards */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Coding Standards
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codingStandards.map((standard) => (
              <div key={standard.title} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {standard.title}
                </h3>
                <p className="text-gray-600 mb-4">{standard.description}</p>
                <ul className="space-y-2">
                  {standard.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Git Workflow */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Git Workflow
          </h2>
          <div className="space-y-6">
            {gitWorkflow.map((step) => (
              <div key={step.step} className="card">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <code className="text-sm text-gray-800">{step.command}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testing Guidelines */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Testing Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testingGuidelines.map((test) => (
              <div key={test.title} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {test.title}
                </h3>
                <p className="text-gray-600 mb-3">{test.description}</p>
                <div className="mb-3">
                  <span className="text-sm font-medium text-gray-500">Coverage:</span>
                  <span className="ml-2 text-sm font-semibold text-primary-600">
                    {test.coverage}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Tools:</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {test.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Write self-documenting code</li>
                  <li>• Keep functions pure when possible</li>
                  <li>• Use TypeScript for type safety</li>
                  <li>• Write tests for new features</li>
                  <li>• Review your own code before submitting</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Don't</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Commit directly to main branch</li>
                  <li>• Skip code reviews</li>
                  <li>• Write code without tests</li>
                  <li>• Use magic numbers or hardcoded values</li>
                  <li>• Ignore linting errors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/best-practices"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <Info className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Best Practices</h3>
              <p className="text-gray-600">Detailed guidelines and examples</p>
            </div>
          </Link>
          
          <Link
            href="/collaboration"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <GitBranch className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Code Reviews</h3>
              <p className="text-gray-600">How to give and receive feedback</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
} 