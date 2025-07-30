# Contribution Guide

## Quick Start

1. **Fork the repository**
2. **Make your changes** using our templates
3. **Submit a pull request**

That's it! We'll review and approve.

## Using Templates

### For New Pages

When adding a new learning journey page:

1. Copy `templates/page-template.tsx`
2. Rename to your page name (e.g., `app/your-topic/page.tsx`)
3. Replace the placeholder content with your specific topics and resources
4. Update the navigation if needed

### For New Resource Pages

When adding a new resource collection:

1. Copy `templates/resource-template.tsx`
2. Rename to your resource name (e.g., `app/resources/your-resources/page.tsx`)
3. Replace the placeholder content with your specific resources
4. Update the navigation if needed

### For New Components

When adding reusable components:

1. Copy `templates/component-template.tsx`
2. Rename to your component name (e.g., `components/YourComponent.tsx`)
3. Customize the component for your specific use case

## Template Structure

### Page Template
- Header with back navigation
- Topics with resources
- Next steps section
- Consistent styling with the rest of the site

### Resource Template
- Header with back navigation
- Categorized resources
- Call to action section
- Consistent styling with the rest of the site

### Component Template
- Reusable component structure
- Props interface
- Example usage included
- Consistent styling

## Guidelines

- Keep it simple and focused
- Use consistent styling (dark theme, gradients, etc.)
- Include proper TypeScript types
- Add meaningful descriptions
- Test your changes locally before submitting

## Need Help?

- Check existing pages for examples
- Use the templates as starting points
- Ask questions in the GitHub issues
- Join our Discord for community support 