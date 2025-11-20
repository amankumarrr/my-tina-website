# Aman Kumar's Personal Website

A modern personal portfolio website built with Next.js and powered by [TinaCMS](https://app.tina.io) for content management. This site showcases my professional experience, projects, skills, and blog posts.

## 🚀 Features

- **Portfolio Showcase**: Display of technical skills, professional experience, projects, certifications, and education
- **Blog System**: Content-driven blog with support for Markdown, Mermaid diagrams, and code syntax highlighting
- **Visual Content Editing**: Powered by [TinaCMS](https://app.tina.io) for live visual editing of structured content
- **Modern UI/UX**: Built with Tailwind CSS, featuring responsive design, dark mode support, and smooth animations
- **Git-based Content**: Content managed through Markdown and JSON files stored in GitHub, queried via Tina GraphQL API
- **Performance Optimized**: Built with Next.js 15 (App Router) for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.0 (App Router)
- **CMS**: TinaCMS 2.9.0
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 4.1.15
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React, React Icons
- **Code Highlighting**: Shiki
- **Diagram Support**: Mermaid
- **Language**: TypeScript
- **Package Manager**: pnpm

## 📋 Requirements

- Git
- [Node.js Active LTS](https://nodejs.org/en/about/releases/)
- pnpm (recommended package manager)
- A [TinaCMS](https://app.tina.io) account for live editing (optional for local development)

## 🏃 Local Development

### Installation

Install the project's dependencies:

> [!NOTE]  
> [Do you know the best package manager for Node.js?](https://www.ssw.com.au/rules/best-package-manager-for-node/) Using the right package manager can greatly enhance your development workflow. We recommend using pnpm for its speed and efficient handling of dependencies.

```bash
pnpm install
```

### Running the Development Server

Start the development server:

```bash
pnpm dev
```

This will start both the Next.js development server and the TinaCMS local GraphQL server.

### Local URLs

- **http://localhost:3000** - Browse the website
- **http://localhost:3000/admin** - Connect to Tina Cloud and enter visual edit mode
- **http://localhost:3000/exit-admin** - Log out of Tina Cloud
- **http://localhost:4001/altair/** - GraphQL playground to test queries and browse the API documentation

## 🚢 Deployment

### Environment Variables

Before deploying, create a `.env` file (or `.env.local`) with the following variables:

```env
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured>
```

### Build for Production

Build the project for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

### Deployment Options

#### Vercel (Recommended)

This site is optimized for deployment on [Vercel](https://vercel.com):

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

The `/admin` route enables visual editing directly on your deployed site.

#### GitHub Pages

A GitHub Actions workflow is included for GitHub Pages deployment:

1. In your repository settings, enable GitHub Pages and set it to deploy from the `gh-pages` branch
2. Add secrets in Settings → Secrets and variables → Actions:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`
3. Push changes to your main branch - the workflow will automatically build and deploy

> [!IMPORTANT]
> GitHub Pages runs as a static site (no server-side code). If you don't want to deploy to GitHub Pages, delete `.github/workflows/build-and-deploy.yml`

## 📚 Project Structure

```
my-tina-website/
├── content/              # Content files (Markdown, JSON)
│   ├── authors/         # Author profiles
│   ├── global/          # Global site settings
│   ├── pages/           # Page content
│   ├── posts/           # Blog posts
│   └── tags/            # Blog tags
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   │   ├── blocks/      # Content block components
│   │   ├── layout/      # Layout components
│   │   └── portfolio/   # Portfolio-specific components
│   └── lib/             # Utility functions
└── tina/                # TinaCMS configuration
    ├── collection/      # Content collections
    └── fields/          # Custom field components
```

## 🛠️ Development Tips

### Visual Studio Code GraphQL Extension

[Install the GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) to benefit from type auto-completion when working with TinaCMS queries.

### TypeScript

The project leverages auto-generated TypeScript types from TinaCMS. These types are rebuilt automatically when your `tina` config changes, ensuring type safety across your components.

### Local Development Workflow

- **Content Editing**: Edit content files directly in the `content/` directory, or use the visual editor at `/admin`
- **Component Development**: Components are in `src/components/` with clear separation between blocks, layout, and UI components
- **Styling**: Uses Tailwind CSS with custom configuration. Styles are in `src/styles.css`

## 📖 Getting Help

For TinaCMS-related questions:

- Visit the [TinaCMS documentation](https://tina.io/docs/)
- [Join the Discord community](https://discord.gg/zumN63Ybpf)
- Visit the [community forum](https://community.tinacms.org/)
- [Search or open an issue](https://github.com/tinacms/tinacms/issues)
- Reach out on Twitter at [@tina_cms](https://twitter.com/tina_cms)

## 📝 License

Licensed under the [Apache 2.0 license](./LICENSE).

## 👤 About

This is the personal website of **Aman Kumar**, a Software Engineer based in Melbourne, Australia. The site showcases professional experience, technical skills, projects, and blog posts.

---

**Built with ❤️ using Next.js and TinaCMS**

