# PC Builder
* Live Link: https://pc-builder-frontend-seven.vercel.app/
* Server Link: https://pc-builder-server-smoky-six.vercel.app/

Server Repo: https://github.com/ThisIsKhalid/pc-builder-backend

## Introduction

Welcome to the PC Builder website! This web application is built using Next.js and allows users to build their own PC by selecting various PC components. This readme provides an overview of the website's features, how to run the project, and other important information.

## Features

### Navbar

- The navbar provides easy navigation to different sections of the website.
- It includes a "PC Builder" button that takes users to the PC Builder page.
- The "Categories" dropdown allows users to browse PC components by category.

### Home Page (SSG)

- The home page displays 6 random Featured Products, each with detailed information including an image, product name, category, price, availability status, rating, and a link to the product detail page.
- There are also 6 Featured Categories that are clickable, taking users to a page displaying at least 3 products from the selected category.

### Featured Category Sections (SSG)

- Clicking on any Featured Category redirects users to a page displaying at least 3 products of that category.
- Each product card on this page provides information similar to the Featured Products on the home page.

### Product Detail Page (SSG)

- The product detail page shows in-depth information about a PC component, including an image, product name, category, availability status, price, description, key features, individual rating, average rating, and user reviews.

### PC Builder Page (SSR)

- The PC Builder page allows users to build their own PC by selecting components from various categories such as CPU, motherboard, RAM, etc.
- Users can click "Choose/Select" to view and select components within a category.
- After selecting a component, users can click "Add To Builder" to add it to their PC build.
- The page keeps track of the selected components, and users can only click "Complete Build" when they have selected at least 5-6 components.

### Bonus Features

- User authentication is implemented using NextAuth with social login providers Google.
- A success alert is displayed when the user clicks "Complete Build."
- The website is fully responsive, providing an enjoyable experience on both mobile and desktop devices.

## Running the Project

To run the project locally, follow these steps:

1. Clone the repository from the provided GitHub link.
2. Navigate to the project directory using your terminal.
3. Run the following commands:
   
   ```
   npm install
   npm run dev
   ```
   
   This will start the development server, and you can access the website at `http://localhost:3000` in your browser.

## Deployed Website

The website is deployed on [Vercel](https://vercel.com/) and can be accessed using the following link: [PC Builder Website](https://pc-builder-frontend-seven.vercel.app).
