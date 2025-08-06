const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Learning journey folders
const journeyFolders = [
  'app/beginner',
  'app/early-stage', 
  'app/ethereum',
  'app/solana',
  'app/cross-chain',
  'app/beyond-advanced-topics'
];

// Icon mapping for different categories
const categoryIcons = {
  'Security': 'Shield',
  'Development': 'Code',
  'Documentation': 'BookOpen',
  'Course': 'GraduationCap',
  'Interactive Learning': 'Globe',
  'Reference': 'Target',
  'Code Examples': 'Code',
  'GitHub Repository': 'Github',
  'Official Documentation': 'BookOpen',
  'Book': 'BookOpen',
  'Security Library': 'Shield',
  'Security Research': 'Shield',
  'Security Platform': 'Shield',
  'Security Analysis': 'Shield',
  'Security Auditing': 'Shield',
  'Development Framework': 'Code',
  'Development Guide': 'Code',
  'Resource Collection': 'Globe',
  'Full Stack': 'Code',
  'Zero Knowledge': 'Shield',
  'Cryptography': 'Shield',
  'Optimization': 'Code',
  'Scalability': 'Code',
  'Cross-Chain': 'Globe',
  'Composability': 'Globe',
  'Neon EVM': 'Globe',
  'ElizaOS': 'Code',
  'DeFi': 'Globe',
  'Smart Contracts': 'Code',
  'Blockchain': 'Globe',
  'Web3': 'Globe',
  'Ethereum': 'Globe',
  'Solana': 'Code',
  'Solidity': 'Code',
  'Rust': 'Code',
  'JavaScript': 'Code',
  'Python': 'Code',
  'Career Guide': 'Target',
  'Fundamentals': 'BookOpen',
  'Academic': 'GraduationCap',
  'Projects': 'Code',
  'Hands-on': 'Code',
  'NFTs': 'Globe',
  'Introduction': 'BookOpen',
  'Technology': 'Globe',
  'Account Abstraction': 'Code',
  'ERC-4337': 'Code',
  'DAO': 'Globe',
  'Crypto': 'Globe',
  'Decentralized': 'Globe',
  'Industry-Ready': 'Target',
  'Gaming': 'Globe',
  'Programming': 'Code',
  'Frontend': 'Code',
  'dApps': 'Globe',
  'freeCodeCamp': 'GraduationCap',
  'Harvard': 'GraduationCap',
  'Bitcoin': 'Globe',
  'Web3.js': 'Code',
  'MIT': 'GraduationCap',
  'Finance': 'Globe',
  'Polygon': 'Globe',
  'Scaling': 'Code',
  'Advanced': 'Target',
  'Privacy': 'Shield',
  'Complete Guide': 'BookOpen',
  'Hyperlane': 'Globe'
};

function getIconForCategory(category) {
  return categoryIcons[category] || 'Globe';
}

function processMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);
    
    return {
      title: data.title || path.basename(filePath, '.md'),
      description: data.description || 'No description available',
      url: data.url || '#',
      level: data.level || 'Beginner',
      category: data.category || 'General',
      authors: data.authors || [],
      tags: data.tags || [],
      languages: data.languages || [],
      dateAdded: data.dateAdded || '2024-01-01',
      icon: getIconForCategory(data.category || 'General')
    };
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return null;
  }
}

function generatePageContent(folderPath, folderName) {
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠️  Folder does not exist: ${folderPath}`);
    return null;
  }
  
  const files = fs.readdirSync(folderPath);
  const markdownFiles = files.filter(file => file.endsWith('.md') && file !== 'page.tsx');
  
  if (markdownFiles.length === 0) {
    console.log(`   No markdown files found in ${folderPath}`);
    return null;
  }
  
  const resources = [];
  
  for (const file of markdownFiles) {
    const filePath = path.join(folderPath, file);
    const resource = processMarkdownFile(filePath);
    
    if (resource) {
      resources.push(resource);
    }
  }
  
  // Group resources by category
  const groupedResources = {};
  resources.forEach(resource => {
    const category = resource.category;
    if (!groupedResources[category]) {
      groupedResources[category] = [];
    }
    groupedResources[category].push(resource);
  });
  
  // Generate page content
  const pageContent = generatePageTSX(folderName, groupedResources);
  
  return pageContent;
}

function generatePageTSX(folderName, groupedResources) {
  const titleCase = folderName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const categories = Object.keys(groupedResources);
  
  let topicsJSX = '';
  
  categories.forEach(category => {
    const resources = groupedResources[category];
    const iconName = getIconForCategory(category);
    
    let resourcesJSX = '';
    resources.forEach(resource => {
      resourcesJSX += `      {
        title: '${resource.title.replace(/'/g, "\\'")}',
        type: '${resource.category}',
        description: '${resource.description.replace(/'/g, "\\'")}',
        link: '${resource.url}',
        difficulty: '${resource.level}',
      },`;
    });
    
    topicsJSX += `  {
    title: '${category}',
    description: 'Resources for ${category.toLowerCase()} development and learning',
    icon: ${iconName},
    resources: [${resourcesJSX}
    ],
  },`;
  });
  
  return `import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, GraduationCap } from 'lucide-react'

const topics = [
${topicsJSX}
]

export default function ${titleCase.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#73FDEA] hover:text-[#FF00AA] mb-4 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-display font-bold text-white mb-4">
            ${titleCase}
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Comprehensive resources for ${folderName.replace('-', ' ')} development. 
            From fundamentals to advanced topics, find everything you need to master ${folderName.replace('-', ' ')} development.
          </p>
        </div>

        {/* Topics */}
        <div className="space-y-12">
          {topics.map((topic) => (
            <div key={topic.title} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center mr-4">
                    <topic.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-display font-semibold text-white">
                    {topic.title}
                  </h2>
                </div>
                <p className="text-white/80">{topic.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topic.resources.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20 text-xs">
                            {resource.difficulty}
                          </span>
                          <span className="text-white/50 text-xs">{resource.type}</span>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-white/50 group-hover:text-[#73FDEA] transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Share Your Knowledge
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have a great ${folderName.replace('-', ' ')} resource? Help the community by contributing to our collection.
          </p>
          <a
            href="https://github.com/Avvrik/Dev-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
          >
            Contribute Resource
            <Github className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}`;
}

function main() {
  console.log('🚀 Generating dynamic journey pages...\n');
  
  for (const folder of journeyFolders) {
    const folderName = path.basename(folder);
    console.log(`📁 Processing ${folderName}...`);
    
    const pageContent = generatePageContent(folder, folderName);
    
    if (pageContent) {
      const pagePath = path.join(folder, 'page.tsx');
      fs.writeFileSync(pagePath, pageContent);
      console.log(`✅ Generated page.tsx for ${folderName}`);
    }
  }
  
  console.log('\n✨ Journey pages generation completed!');
  console.log('📄 All learning journey pages now display resources dynamically from markdown files.');
}

// Run the script
main(); 