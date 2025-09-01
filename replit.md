# replit.md

## Overview

This is a full-stack web application built as a personal portfolio website for Kolade Olukoya, a blockchain developer. The application showcases a modern Next.js frontend with a Node.js/Express backend, designed to present professional information, skills, projects, and contact details in a captivating, futuristic Web3-themed format with advanced animations and visual effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure

The application follows a well-organized monorepo pattern with clear separation of concerns:

- `app/` - Next.js frontend application
- `server/` - Node.js/Express backend
- `shared/` - Shared schemas and types between frontend and backend

### Technology Stack

- **Frontend**: Next.js 14 with TypeScript, React 18
- **Backend**: Node.js with Express framework
- **Database**: PostgreSQL with Drizzle ORM
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state
- **Routing**: Next.js App Router
- **Build Tools**: Next.js build system

## Key Components

### Frontend Architecture

- **Component-based design** using React functional components
- **Modern UI system** built on shadcn/ui and Radix UI primitives
- **Responsive design** with mobile-first approach
- **Dark/light theme support** with theme provider
- **Single-page application** with smooth scrolling navigation

### Backend Architecture

- **Express.js server** with TypeScript support
- **Modular route structure** with separation in `/server/routes.ts`
- **Database abstraction** through storage interface pattern
- **In-memory storage** for development (easily swappable with database implementation)
- **Request logging** middleware for API monitoring

### Database Design

- **PostgreSQL** as the primary database (configured via Drizzle)
- **Type-safe schema** definitions using Drizzle ORM
- **Migration support** with automated schema management
- **Zod validation** for request/response schemas

## Data Flow

### Client-Server Communication

- **RESTful API** design with `/api` prefix for all backend routes
- **Type-safe requests** using shared schemas between client and server
- **React Query** for efficient data fetching, caching, and synchronization
- **Error handling** with centralized error middleware

### State Management

- **Server state** managed by TanStack Query
- **Local component state** using React hooks
- **Theme state** persisted in localStorage
- **Form state** handled by React Hook Form with Zod validation

## External Dependencies

### Core Dependencies

- **@neondatabase/serverless** - Database connectivity for Neon PostgreSQL
- **drizzle-orm** - Type-safe database ORM
- **@tanstack/react-query** - Server state management
- **wouter** - Lightweight React router
- **react-hook-form** - Form handling with validation

### UI Dependencies

- **@radix-ui/\* packages** - Accessible UI primitives
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** - Component variant management
- **lucide-react** - Icon library

### Development Dependencies

- **vite** - Fast build tool and development server
- **typescript** - Type safety
- **tsx** - TypeScript execution for Node.js
- **esbuild** - Fast JavaScript bundler for production

## Deployment Strategy

### Build Process

- **Frontend build**: Next.js compiles React app to optimized static assets
- **Backend build**: Node.js server with Express
- **Database migrations**: Drizzle Kit handles schema changes

### Environment Configuration

- **Development**: Uses Next.js dev server with hot reloading
- **Production**: Next.js optimized production build
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Deployment Commands

- `npm run dev` - Development mode with hot reloading
- `npm run build` - Production build for both frontend and backend
- `npm run start` - Production server startup
- `npm run db:push` - Database schema deployment

### Architecture Benefits

- **Type safety** throughout the entire stack
- **Modern development experience** with Next.js hot reloading and fast builds
- **Scalable structure** with clear separation between frontend, backend, and shared code
- **Professional UI/UX** with accessibility-first component library
- **Database flexibility** with ORM abstraction and migration support
