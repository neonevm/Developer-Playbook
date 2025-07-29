import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle, Code, Database, Shield, Zap } from 'lucide-react'

const bestPractices = [
  {
    category: 'Frontend Development',
    icon: Code,
    practices: [
      {
        title: 'Component Design',
        description: 'Create reusable, composable components',
        do: [
          'Use functional components with hooks',
          'Keep components small and focused',
          'Use TypeScript for type safety',
          'Implement proper prop validation',
        ],
        dont: [
          'Create overly complex components',
          'Use inline styles for complex styling',
          'Ignore accessibility requirements',
          'Mix business logic with UI components',
        ],
      },
      {
        title: 'State Management',
        description: 'Manage application state effectively',
        do: [
          'Use React Context for global state',
          'Keep state as local as possible',
          'Use immutable state updates',
          'Implement proper error boundaries',
        ],
        dont: [
          'Store everything in global state',
          'Mutate state directly',
          'Ignore performance implications',
          'Forget to clean up subscriptions',
        ],
      },
    ],
  },
  {
    category: 'Backend Development',
    icon: Database,
    practices: [
      {
        title: 'API Design',
        description: 'Design RESTful and GraphQL APIs',
        do: [
          'Use consistent naming conventions',
          'Implement proper error handling',
          'Add comprehensive logging',
          'Use authentication and authorization',
        ],
        dont: [
          'Expose sensitive data in responses',
          'Ignore input validation',
          'Use inconsistent response formats',
          'Forget to add rate limiting',
        ],
      },
      {
        title: 'Database Design',
        description: 'Design efficient and scalable databases',
        do: [
          'Normalize data appropriately',
          'Use indexes for performance',
          'Implement proper constraints',
          'Plan for data migration',
        ],
        dont: [
          'Over-normalize or under-normalize',
          'Ignore query performance',
          'Store sensitive data unencrypted',
          'Forget to backup data',
        ],
      },
    ],
  },
  {
    category: 'Security',
    icon: Shield,
    practices: [
      {
        title: 'Authentication & Authorization',
        description: 'Secure user authentication and access control',
        do: [
          'Use secure authentication methods',
          'Implement proper session management',
          'Use HTTPS for all communications',
          'Validate and sanitize all inputs',
        ],
        dont: [
          'Store passwords in plain text',
          'Use weak authentication methods',
          'Ignore CSRF protection',
          'Trust client-side validation',
        ],
      },
      {
        title: 'Data Protection',
        description: 'Protect sensitive data and user privacy',
        do: [
          'Encrypt sensitive data at rest',
          'Use secure communication protocols',
          'Implement proper access controls',
          'Follow GDPR and privacy regulations',
        ],
        dont: [
          'Log sensitive information',
          'Use weak encryption algorithms',
          'Ignore data retention policies',
          'Forget to audit security measures',
        ],
      },
    ],
  },
]

const codeReviewChecklist = [
  {
    category: 'Code Quality',
    items: [
      'Code follows style guidelines',
      'Functions are small and focused',
      'Variable names are descriptive',
      'No hardcoded values',
      'Error handling is implemented',
    ],
  },
  {
    category: 'Security',
    items: [
      'No sensitive data exposed',
      'Input validation is present',
      'Authentication is properly implemented',
      'No SQL injection vulnerabilities',
      'XSS protection is in place',
    ],
  },
  {
    category: 'Performance',
    items: [
      'No unnecessary re-renders',
      'Database queries are optimized',
      'Images are properly sized',
      'Lazy loading is implemented',
      'Bundle size is reasonable',
    ],
  },
  {
    category: 'Testing',
    items: [
      'Unit tests are present',
      'Integration tests cover main flows',
      'Test coverage meets requirements',
      'Tests are meaningful and not flaky',
      'Edge cases are tested',
    ],
  },
]

export default function BestPracticesPage() {
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
            Best Practices
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guidelines and best practices for writing high-quality, 
            maintainable, and secure code across all aspects of development.
          </p>
        </div>

        {/* Best Practices by Category */}
        <div className="space-y-12 mb-16">
          {bestPractices.map((category) => (
            <div key={category.category} className="card">
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>
              
              <div className="space-y-8">
                {category.practices.map((practice) => (
                  <div key={practice.title} className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{practice.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <h4 className="font-semibold text-gray-900">Do</h4>
                        </div>
                        <ul className="space-y-2">
                          {practice.do.map((item) => (
                            <li key={item} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-3">
                          <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                          <h4 className="font-semibold text-gray-900">Don't</h4>
                        </div>
                        <ul className="space-y-2">
                          {practice.dont.map((item) => (
                            <li key={item} className="flex items-start">
                              <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
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
          ))}
        </div>

        {/* Code Review Checklist */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Code Review Checklist
          </h2>
          <p className="text-gray-600 mb-8">
            Use this checklist when reviewing code to ensure quality and consistency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codeReviewChecklist.map((category) => (
              <div key={category.category}>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="w-4 h-4 border border-gray-300 rounded mr-2 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/development"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <Code className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Development Workflow</h3>
              <p className="text-gray-600">Coding standards and Git workflow</p>
            </div>
          </Link>
          
          <Link
            href="/security"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <Shield className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Security Guidelines</h3>
              <p className="text-gray-600">Security best practices and guidelines</p>
            </div>
          </Link>
          
          <Link
            href="/performance"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <Zap className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Performance</h3>
              <p className="text-gray-600">Optimization and performance tips</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
} 