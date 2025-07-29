import Link from 'next/link'
import { ArrowRight, Users, MessageSquare, GitBranch, CheckCircle, AlertTriangle, Clock } from 'lucide-react'

const communicationGuidelines = [
  {
    title: 'Team Communication',
    description: 'Effective communication practices for development teams',
    guidelines: [
      'Use clear, concise language in all communications',
      'Provide context when asking questions or reporting issues',
      'Use appropriate channels (Slack, email, meetings)',
      'Document important decisions and discussions',
      'Be respectful and constructive in feedback',
    ],
  },
  {
    title: 'Code Review Process',
    description: 'How to conduct and participate in code reviews',
    guidelines: [
      'Review code within 24 hours of submission',
      'Focus on code quality, not personal preferences',
      'Provide specific, actionable feedback',
      'Ask questions rather than making assumptions',
      'Approve only when you would be comfortable deploying',
    ],
  },
  {
    title: 'Documentation Standards',
    description: 'Maintaining clear and up-to-date documentation',
    guidelines: [
      'Document all API endpoints and their usage',
      'Keep README files current and comprehensive',
      'Write clear commit messages and PR descriptions',
      'Document architectural decisions (ADRs)',
      'Include setup instructions for new team members',
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

const meetingGuidelines = [
  {
    title: 'Daily Standups',
    duration: '15 minutes',
    agenda: [
      'What did you work on yesterday?',
      'What will you work on today?',
      'Are there any blockers?',
    ],
  },
  {
    title: 'Sprint Planning',
    duration: '1-2 hours',
    agenda: [
      'Review and prioritize backlog items',
      'Estimate story points for tasks',
      'Assign tasks to team members',
      'Set sprint goals and acceptance criteria',
    ],
  },
  {
    title: 'Retrospectives',
    duration: '1 hour',
    agenda: [
      'What went well this sprint?',
      'What could be improved?',
      'Action items for next sprint',
      'Team process improvements',
    ],
  },
]

export default function CollaborationPage() {
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
            Team Collaboration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guidelines for effective communication, code reviews, and team collaboration 
            to ensure high-quality development and strong team dynamics.
          </p>
        </div>

        {/* Communication Guidelines */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Communication Guidelines
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {communicationGuidelines.map((guideline) => (
              <div key={guideline.title} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {guideline.title}
                </h3>
                <p className="text-gray-600 mb-4">{guideline.description}</p>
                <ul className="space-y-2">
                  {guideline.guidelines.map((item) => (
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

        {/* Code Review Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Code Review Process
          </h2>
          <div className="card">
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
        </div>

        {/* Meeting Guidelines */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Meeting Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {meetingGuidelines.map((meeting) => (
              <div key={meeting.title} className="card">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{meeting.title}</h3>
                    <p className="text-sm text-gray-500">{meeting.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {meeting.agenda.map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Collaboration Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide constructive feedback</li>
                  <li>• Ask questions when unclear</li>
                  <li>• Document decisions and processes</li>
                  <li>• Respect different perspectives</li>
                  <li>• Celebrate team successes</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Don't</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Make personal attacks or criticisms</li>
                  <li>• Ignore team member concerns</li>
                  <li>• Skip documentation</li>
                  <li>• Assume everyone knows everything</li>
                  <li>• Blame individuals for team issues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/development"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <GitBranch className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Development Workflow</h3>
              <p className="text-gray-600">Coding standards and Git practices</p>
            </div>
          </Link>
          
          <Link
            href="/best-practices"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <MessageSquare className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Best Practices</h3>
              <p className="text-gray-600">Comprehensive development guidelines</p>
            </div>
          </Link>
          
          <Link
            href="/getting-started"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <Users className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Getting Started</h3>
              <p className="text-gray-600">Onboarding for new team members</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
} 