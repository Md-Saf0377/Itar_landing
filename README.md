# Kaab Fragrances - Ecommerce Website

This is a modern, fully-responsive ecommerce website for Kaab Fragrances, a fictional perfume brand. The application is built with Next.js, TypeScript, and Tailwind CSS, providing a seamless and elegant shopping experience for users to explore and purchase fragrances.

## Live Demo

[https://kaab-fragrances.vercel.app/](https://kaab-fragrances.vercel.app/)

## Features

- **Responsive Design**: A beautiful and fully responsive layout that works on all devices.
- **Product Showcase**: Sections for bestsellers, categories, and the full collection.
- **Detailed Product Pages**: Each fragrance has its own page with images, description, and size selection.
- **Interactive Scent Finder**: A multi-step quiz to help users discover their perfect scent.
- **Shopping Cart**: A client-side cart to add and manage items.
- **WhatsApp Integration**: "Buy Now" and "Checkout" functionality that opens a pre-filled WhatsApp message to streamline orders.
- **Smooth Animations**: Subtle animations and transitions for an enhanced user experience.
- **Dark/Light Mode**: Theme toggling for user preference.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Embla Carousel](https://www.embla-carousel.com/)
- **Linting & Formatting**: ESLint & Prettier

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/kaab-fragrances.git
   ```
2. Navigate to the project directory:
   ```bash
   cd kaab-fragrances
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the website.

## Deployment

This project is configured for easy deployment on [Firebase App Hosting](https://firebase.google.com/docs/app-hosting).

To deploy the application:

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```
2. **Login to Firebase**:
   ```bash
   firebase login
   ```
3. **Initialize Firebase** (if not already done):
   ```bash
   firebase init hosting
   ```
   Follow the CLI prompts to connect to your Firebase project.

4. **Deploy**:
   ```bash
   firebase deploy --only hosting
   ```

The application will be built and deployed automatically.
