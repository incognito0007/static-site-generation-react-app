# Static Site Generation & React Examples Repository

A comprehensive collection of React applications demonstrating various rendering patterns and architectural approaches, including Next.js, Server-Side Rendering (SSR), React Server Components, and modern Vite-based applications.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Overview](#project-overview)
- [Global Installation](#global-installation)
- [Running Projects](#running-projects)
  - [Next.js Application](#nextjs-application)
  - [No-Framework React Server Components](#no-framework-react-server-components)
  - [Server-Side Rendering App](#server-side-rendering-app)
  - [Starter Projects](#starter-projects)
- [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning/version control)

To verify installation, run:

```bash
node --version
npm --version
```

## 📁 Project Overview

This repository contains the following projects:

| Project                   | Framework                 | Purpose                                   | Location                                     |
| ------------------------- | ------------------------- | ----------------------------------------- | -------------------------------------------- |
| **Next.js Practice App**  | Next.js 15                | Full-stack app with Pages & API Routes    | `next-framework-app/my-nextjs-practice-app/` |
| **No-Framework RSC**      | React 19 + Webpack        | React Server Components without framework | `no-framework/`                              |
| **Server-Side Rendering** | React 19 + Vite + Fastify | SSR implementation with Fastify           | `serverSideRenderingApp/`                    |
| **Transitions Starter**   | React 19 + Vite           | React transitions demo                    | `starter/transitions/`                       |
| **Optimistic Starter**    | React 19 + Vite           | Optimistic UI patterns                    | `starter/optimistic/`                        |
| **Performance Starter**   | React 19 + Vite           | Performance optimization patterns         | `starter/perf/`                              |
| **Deferred Starter**      | React 19 + Vite           | Deferred/lazy loading patterns            | `starter/deferred/`                          |

## 🚀 Global Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/staticSitegeneration.git
cd staticSitegeneration
```

### Step 2: Install Root Dependencies (if needed)

```bash
npm install
```

## 🏃 Running Projects

Each project is independent and requires separate installation and execution. Navigate to each project directory and follow the specific instructions below.

---

### Next.js Application

**Location:** `next-framework-app/my-nextjs-practice-app/`

**Description:** A full-stack Next.js 15 application featuring pages, API routes, database integration with SQLite, and modern React patterns.

#### Installation

```bash
cd next-framework-app/my-nextjs-practice-app
npm install
```

#### Running the Development Server

```bash
npm run dev
```

Server starts at: **http://localhost:3000**

#### Build for Production

```bash
npm run build
npm run start
```

#### Linting

```bash
npm run lint
```

**Available Routes:**

- `/` - Home page
- `/my` - My page
- `/who-am-i` - Who Am I page with username updates
- `/teacher` - Teacher notes page
- `/write` - Write/Post notes page

---

### No-Framework React Server Components

**Location:** `no-framework/`

**Description:** A React Server Components (RSC) implementation without a framework, using Webpack for bundling and Fastify for the server.

#### Installation

```bash
cd no-framework
npm install
```

#### Running Development Server & Client

Open **two terminals** in this directory:

**Terminal 1 - Build Client:**

```bash
npm run dev:client
```

**Terminal 2 - Run Server:**

```bash
npm run dev:server
```

Server starts at: **http://localhost:4000**

This watches both client and server files for changes and rebuilds automatically.

**Key Features:**

- React 19 with Server Components
- Fastify backend server
- SQLite database integration
- Babel configuration for JSX transformation

---

### Server-Side Rendering App

**Location:** `serverSideRenderingApp/`

**Description:** A traditional server-side rendered React application using Vite for development, Fastify for the server, and client-side hydration.

#### Installation

```bash
cd serverSideRenderingApp
npm install
```

#### Step 1: Build the Application

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

#### Step 2: Start the Server

```bash
npm start
```

Server starts at: **http://localhost:4000**

**Note:** The application must be built before running the server.

---

### Starter Projects

All starter projects are located in the `starter/` directory. Each one demonstrates different React patterns and can be run independently.

#### Available Starter Projects

1. **Transitions** - `starter/transitions/`
   - Demonstrates React transitions and animation patterns
2. **Optimistic** - `starter/optimistic/`
   - Shows optimistic UI update patterns
3. **Performance** - `starter/perf/`
   - Demonstrates performance optimization with markdown rendering
4. **Deferred** - `starter/deferred/`
   - Shows deferred/lazy loading patterns

#### Installation & Running Any Starter Project

Example: Running the **Transitions** starter

```bash
cd starter/transitions
npm install
npm run dev
```

Example: Running the **Optimistic** starter with server

```bash
cd starter/optimistic
npm install
```

**Terminal 1:**

```bash
npm run dev:client
```

**Terminal 2:**

```bash
npm run dev:server
```

Example: Running the **Performance** starter

```bash
cd starter/perf
npm install
npm run dev
```

#### Available Commands (Starter Projects)

- `npm run dev` or `npm run dev:client` - Start Vite development server
- `npm run dev:server` - Start Node.js server (if applicable)

Development server typically runs at: **http://localhost:5173**

---

## 🔧 Troubleshooting

### Port Already in Use

If you get a "port already in use" error:

**Windows:**

```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**macOS/Linux:**

```bash
lsof -i :3000
kill -9 <PID>
```

### Module Not Found Errors

Ensure you've run `npm install` in the specific project directory:

```bash
cd [project-directory]
npm install
```

### Build Fails

Try clearing node_modules and cache:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Permission Denied on Windows

If you encounter permission issues, try running your terminal as Administrator.

### Dependencies Issues

If you encounter dependency conflicts, try using:

```bash
npm install --legacy-peer-deps
```

### Node Version Issues

If you get Node version errors, ensure you're using Node 18+:

```bash
node --version
```

If needed, install a compatible version or use a Node version manager like **nvm** or **fnm**.

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Fastify Documentation](https://www.fastify.io/)
- [React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023)

---

## 📝 Notes

- Each project is independently managed with its own `package.json` and dependencies
- Install dependencies separately for each project before running
- Some projects require multiple terminals (client + server)
- All projects use modern React patterns (React 19)
- SQLite is used for data persistence in applicable projects

---

## 📄 License

Multiple licenses are used across projects. See individual project directories for specific license information.

---

## 🤝 Contributing

When contributing to any project:

1. Ensure all dependencies are installed
2. Follow the existing code structure
3. Test changes locally before committing
4. Push changes to the GitHub repository

---

**Last Updated:** April 2026

For issues or questions, check the individual project's README or documentation files.
