# SipNShare (SWE4538 Final Project)

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
  - Create, Read, Update and Delete own user profiles.

- **Recipe CRUD Operations:**
  - Create, Read, Update, and Delete coffee recipes.

- **Detailed Recipe Information:**
  - Includes name, description, difficulty level, tags, ingredients, images, and audios.

- **Media Upload Functionality:**
  - Users can upload multiple images and audio files for each recipe.

- **Search Functionality:**
  - Users can search for any recipe by their tags, ingredients, ratings and names.

- **Comment Section:**
  - Users can freely express their opinions and suggestions for any recipe.

- **Upvote and Downvote System:**
  - Users can express their appreciation for a recipe by upvoting it.
  - Downvote recipes if they find them less appealing.
  - A user can nullify their vote by clicking again.

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
- Open a web browser and go to `http://localhost:3000/landingPage`
