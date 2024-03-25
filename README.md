
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/maria-iut1234/SipNShare">
<!--     <img src="client/src/assets/favicon.ico" alt="Logo" width="40" height="70"> -->
  </a>

  <h3 align="center">SipNShare</h3>

  <p align="center">
    A website for coffee enthusiasts to create, share, and explore various coffee-related concoctions.
    <br>
<!--     <a href="https://innuo.netlify.app/">Innuo Website</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary><h3>Table of Contents<h3></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- ![image](https://github.com/Xer0Bytes/Innuo/assets/95132675/0dc4247f-0347-4f72-8c05-79d241e4cb0d) -->

This is a web application designed for coffee enthusiasts. It provides users with a platform to create, share, and explore various coffee-related concoctions. 

The application supports essential features like user authentication (both with the website and using Google OAuth2), CRUD operations for both recipes and users, detailed recipe information, search functionalities to comb through the vast number of recipes, the ability of users to express their opinion via upvotes and downvotes and media upload functionality for a user friendly view of the recipe contents.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

<!-- * ![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB) -->
* ![Express.js](https://img.shields.io/badge/Express.js-122658?style=for-the-badge&logo=express&logoColor=white)
* ![Nodejs](https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)
* ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
* ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
* ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Please follow the steps below to run the project locally:

### Prerequisites

You will require a .env file before you can start running the project.
* Create a file named `.env` in the `server/` folder.
* Populate the file with the following environment variables according to your environment:
  ```sh
  SESSION_SECRET=
  MONGO_URI=
  CLIENT_ID=
  CLIENT_SECRET=
  ```
* The `CLIENT_ID, CLIENT_SECRET` variables are created using Google API for Google OAuth2.
* The `MONGO` variable is the mongoDB link to the database used to store all the website information.
* `SESSION_SECRET` can be set according to user preferance.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/maria-iut1234/SipNShare.git
   ```
3. Install NPM packages for server
   ```bash
   cd server
   yarn install
   ```
4. Start the server
   ```bash
   yarn dev
   ```
5. Set Up MongoDB
  - Ensure MongoDB is installed and running.
  - Configure MongoDB connection in the application.
6. Go to the following link to run the website locally:
   ```yaml
   http://localhost:3000/landingPage
   ```
7. The API links for the server can be accessed via softwares like `Postman`

<!-- You can also use the deployed website [here](https://innuo.netlify.app/). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

**1. User Authentication System:**
  - Secure access to personalized dashboards.
  - Create, Read, Update and Delete own user profiles.

**2. Recipe CRUD Operations:**
  - Create, Read, Update, and Delete coffee recipes.

**3. Detailed Recipe Information:**
  - Includes name, description, difficulty level, tags, ingredients, images, and audios.

**4. Media Upload Functionality:**
  - Users can upload multiple images and audio files for each recipe.

**5. Search Functionality:**
  - Users can search for any recipe by their tags, ingredients, ratings and names.

**6. Comment Section:**
  - Users can freely express their opinions and suggestions for any recipe.

**7. Upvote and Downvote System:**
  - Users can express their appreciation for a recipe by upvoting it.
  - Downvote recipes if they find them less appealing.
  - A user can nullify their vote by clicking again.

**8. Security Measures:**
  - User authentication ensures only authorized users can perform recipe-related actions.
  - Ownership verification prevents unauthorized updates or deletions.
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

This project is licensed under the [MIT License](LICENSE).

<!-- CONTACTS -->
## Contact:

- **Shanta Maria**
  - *GitHub:* [NafisaMaliyat-iut](https://github.com/NafisaMaliyat-iut)



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Img Shields](https://shields.io)
* [GitHub ReadMe Template](https://github.com/othneildrew/Best-README-Template/tree/master)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

