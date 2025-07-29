import Link from 'next/link'
import { ArrowRight, Zap, Server, GitBranch, Shield, Database, Cloud } from 'lucide-react'

const cicdPipeline = [
  {
    stage: 'Build',
    description: 'Compile and package the application',
    tools: ['GitHub Actions', 'Jenkins', 'GitLab CI'],
    steps: [
      'Install dependencies',
      'Run linting and formatting checks',
      'Execute unit tests',
      'Build application artifacts',
      'Generate test coverage reports',
    ],
  },
  {
    stage: 'Test',
    description: 'Run comprehensive tests',
    tools: ['Jest', 'Cypress', 'Playwright'],
    steps: [
      'Run unit tests',
      'Execute integration tests',
      'Perform E2E testing',
      'Security vulnerability scanning',
      'Performance testing',
    ],
  },
  {
    stage: 'Deploy',
    description: 'Deploy to staging and production',
    tools: ['Vercel', 'AWS', 'Docker', 'Kubernetes'],
    steps: [
      'Deploy to staging environment',
      'Run smoke tests',
      'Execute automated tests',
      'Deploy to production',
      'Monitor deployment health',
    ],
  },
]

const infrastructure = [
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    platforms: [
      {
        name: 'AWS',
        description: 'Amazon Web Services',
        services: ['EC2', 'S3', 'RDS', 'Lambda', 'ECS'],
      },
      {
        name: 'Google Cloud',
        description: 'Google Cloud Platform',
        services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions'],
      },
      {
        name: 'Azure',
        description: 'Microsoft Azure',
        services: ['Virtual Machines', 'Blob Storage', 'SQL Database', 'Functions'],
      },
    ],
  },
  {
    category: 'Containerization',
    icon: Server,
    platforms: [
      {
        name: 'Docker',
        description: 'Container platform',
        services: ['Docker Compose', 'Docker Swarm', 'Multi-stage builds'],
      },
      {
        name: 'Kubernetes',
        description: 'Container orchestration',
        services: ['Pods', 'Services', 'Deployments', 'Ingress'],
      },
    ],
  },
]

const monitoringTools = [
  {
    category: 'Application Monitoring',
    tools: [
      { name: 'New Relic', description: 'APM and error tracking' },
      { name: 'Datadog', description: 'Infrastructure and application monitoring' },
      { name: 'Sentry', description: 'Error tracking and performance monitoring' },
    ],
  },
  {
    category: 'Infrastructure Monitoring',
    tools: [
      { name: 'Prometheus', description: 'Metrics collection and alerting' },
      { name: 'Grafana', description: 'Data visualization and dashboards' },
      { name: 'ELK Stack', description: 'Log aggregation and analysis' },
    ],
  },
  {
    category: 'Logging',
    tools: [
      { name: 'CloudWatch', description: 'AWS logging and monitoring' },
      { name: 'Loggly', description: 'Cloud-based log management' },
      { name: 'Papertrail', description: 'Simple log aggregation' },
    ],
  },
]

export default function DevOpsPage() {
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
            DevOps & CI/CD
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automation, deployment, and infrastructure management practices 
            to ensure reliable and scalable applications.
          </p>
        </div>

        {/* CI/CD Pipeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            CI/CD Pipeline
          </h2>
          <div className="space-y-6">
            {cicdPipeline.map((stage) => (
              <div key={stage.stage} className="card">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {stage.stage}
                      </h3>
                      <span className="ml-3 px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {stage.tools.join(', ')}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{stage.description}</p>
                    <ul className="space-y-2">
                      {stage.steps.map((step) => (
                        <li key={step} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Infrastructure & Platforms
          </h2>
          <div className="space-y-8">
            {infrastructure.map((category) => (
              <div key={category.category} className="card">
                <div className="flex items-center mb-6">
                  <category.icon className="h-8 w-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.platforms.map((platform) => (
                    <div key={platform.name} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {platform.name}
                      </h4>
                      <p className="text-gray-600 mb-3">{platform.description}</p>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Services:</span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {platform.services.map((service) => (
                            <span
                              key={service}
                              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoring & Observability */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Monitoring & Observability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {monitoringTools.map((category) => (
              <div key={category.category} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.tools.map((tool) => (
                    <div key={tool.name} className="border border-gray-200 rounded-lg p-3">
                      <h4 className="font-medium text-gray-900 mb-1">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            DevOps Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Infrastructure as Code
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use Terraform or CloudFormation for infrastructure</li>
                <li>• Version control all infrastructure changes</li>
                <li>• Implement automated testing for infrastructure</li>
                <li>• Use consistent naming conventions</li>
                <li>• Document all infrastructure decisions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Security & Compliance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Implement least privilege access</li>
                <li>• Use secrets management tools</li>
                <li>• Regular security audits and scanning</li>
                <li>• Encrypt data in transit and at rest</li>
                <li>• Monitor for security threats</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/deployment"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <GitBranch className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Deployment</h3>
              <p className="text-gray-600">Deployment strategies and checklists</p>
            </div>
          </Link>
          
          <Link
            href="/security"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <Shield className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Security</h3>
              <p className="text-gray-600">Security best practices and guidelines</p>
            </div>
          </Link>
          
          <Link
            href="/performance"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
          >
            <Database className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Performance</h3>
              <p className="text-gray-600">Performance optimization and monitoring</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
} 