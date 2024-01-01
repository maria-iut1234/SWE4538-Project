# SWE4538-Project

## Project Overview

The SWE4538-Project is a web application designed for coffee enthusiasts. It provides users with a platform to create, share, and explore various coffee-related concoctions. The application supports essential features like user authentication, CRUD operations for recipes, detailed recipe information, search functionalities to comb through the recipes and media upload functionality.

## Technologies Used

- **Backend:**
  - Express.js

- **Database:**
  - MongoDB

- **Frontend:**
  - HTML, CSS, JavaScript

## Features

- **User Authentication System:**
  - Secure access to personalized dashboards.

- **Recipe CRUD Operations:**
  - Create, Read, Update, and Delete coffee recipes.

- **Detailed Recipe Information:**
  - Includes name, description, difficulty level, tags, ingredients, images, and audios.

- **Media Upload Functionality:**
  - Users can upload multiple images and audio files for each recipe.

- **Search Functionality:**
  - Users can search for any recipe by their tags and names.

- **Security Measures:**
  - User authentication ensures only authorized users can perform recipe-related actions.
  - Ownership verification prevents unauthorized updates or deletions.

## Getting Started

To run the project locally, follow these steps:

1. **Clone the Repository:**

2. **Install Dependencies:**

 ```bash
   cd server
   yarn
   yarn dev 
```

3. **Set Up MongoDB:**
- Ensure MongoDB is installed and running.
- Configure MongoDB connection in the application.

4. **Start the Application:**

5. **Access the Application:**
- Open a web browser and go to `http://localhost:your_port` (replace `your_port` with the specified port).

## Project Components

- **Routes:**
- Define RESTful routes for managing recipes.

- **Controllers:**
- Implement business logic for recipe-related actions.

- **Models:**
- Define MongoDB schemas for User and Recipe.

## Dependencies

- **Express.js Middleware:**
- Used for authentication, file uploads, and other essential functionalities.

- **External Libraries:**
- Libraries for handling audio and image uploads.

## Circular Dependency Resolution

The project addresses circular dependency warnings for improved stability.

## Future Development

Potential enhancements include user profile management, advanced search functionality, and continuous improvements to UI/UX.

Feel free to explore and contribute to the project!
