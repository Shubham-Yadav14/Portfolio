# Shubham Yadav - Portfolio Website

A modern, premium, highly animated personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready animations
- **Lucide React** - Beautiful icon library

## Features

- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎨 Dark theme with premium aesthetics
- ⚡ Optimized performance
- 🔍 SEO-friendly
- ♿ Accessible (WCAG compliant)
- 📄 Resume download functionality
- 🔗 Configurable social links and project URLs

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Configuration

### Adding Your Resume PDF

Place your resume PDF in the `public` folder:
```
public/resume.pdf
```

The download buttons in the navbar, hero section, and contact section will automatically link to this file.

### Adding Social Links

Edit `data/socialLinks.ts` to add your social media URLs:

```typescript
export const socialLinks = {
  github: "https://github.com/yourusername",  // Add your GitHub URL
  linkedin: "https://linkedin.com/in/yourusername",  // Add your LinkedIn URL
  leetcode: "https://leetcode.com/yourusername",  // Add your LeetCode URL
  email: "mailto:shubhamrao14102002@gmail.com",
};
```

### Adding Project URLs

Edit `data/projects.ts` to add your project live URLs and GitHub repositories:

```typescript
export const projects = [
  {
    name: "CVMindAi",
    description: "...",
    features: [...],
    technologies: [...],
    liveUrl: "https://your-project-url.com",  // Add your live URL
    githubUrl: "https://github.com/yourusername/repo",  // Add your GitHub URL
  },
  {
    name: "QuizMind AI",
    description: "...",
    features: [...],
    technologies: [...],
    liveUrl: "https://your-project-url.com",  // Add your live URL
    githubUrl: "https://github.com/yourusername/repo",  // Add your GitHub URL
  },
];
```

### Updating Portfolio Content

All portfolio content is centralized in `data/portfolio.ts`. You can update:
- Personal information (name, title, email, phone)
- About section content
- Education details
- Work experience
- Technical skills
- Leadership & activities

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page assembling all components
│   └── globals.css         # Global styles
├── components/
│   ├── animated-background.tsx  # Animated background effects
│   ├── navbar.tsx          # Sticky navigation with mobile menu
│   ├── hero.tsx            # Hero section with terminal animation
│   ├── about.tsx           # About section
│   ├── experience.tsx      # Experience timeline
│   ├── projects.tsx        # Projects section
│   ├── skills.tsx          # Skills section
│   ├── education.tsx       # Education section
│   ├── leadership.tsx      # Leadership & activities
│   ├── contact.tsx         # Contact section
│   └── footer.tsx          # Footer with back-to-top
├── data/
│   ├── portfolio.ts        # Central portfolio data
│   ├── socialLinks.ts      # Social media links
│   └── projects.ts         # Project information
├── public/
│   └── resume.pdf          # Your resume PDF
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live in seconds

### Other Platforms

You can also deploy to:
- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Use the Next.js preset
- **Docker**: Build and deploy as a container

## Customization

### Colors

The color scheme is defined in `app/globals.css` and Tailwind classes. The primary accent color is blue (`blue-500`, `blue-600`, etc.). You can customize by:
1. Updating Tailwind config in `tailwind.config.ts`
2. Replacing blue color classes with your preferred accent color

### Animations

Animations are powered by Framer Motion. You can adjust:
- Animation durations in component files
- Easing functions
- Scroll trigger thresholds
- Reduced motion preferences (already implemented)

## Performance

The site is optimized for performance with:
- Static generation where possible
- Optimized images
- Lazy loading
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind
- Efficient animations

## Accessibility

The site follows accessibility best practices:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Color contrast compliance
- Reduced motion support
- Screen reader friendly

## License

© 2026 Shubham Yadav. All rights reserved.

## Support

For questions or issues, please contact [shubhamrao14102002@gmail.com](mailto:shubhamrao14102002@gmail.com).
