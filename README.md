> 💻 PROJECT CODE⭐ ====>>>> ✨cheerful-notebook-6741💫
> 💻 PROJECT NAME⭐ ====>>>> ✨WILD TIMES💫
> <br>

[![Backend Repo Link](https://img.shields.io/badge/Backend_Repo_Link-0A66C2?style=for-the-badge&logo=github&logoColor=#FF7139)](https://github.com/pallavijainy/unit-6-project-backend-deploy)
[![Deployed on Cyclic](https://img.shields.io/badge/Deployed_Cyclic_Link-0A66C2?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shy-blue-elk-hem.cyclic.app/)

## [![Deployed App Vercel Link](https://img.shields.io/badge/Deployed_App_Vercel_Link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://wildtimes-swati082001.vercel.app/)

![ShopGIF](https://www.luckymobileslots.com/wp-content/uploads/2016/07/wild_times_logo.jpg)

## Objective✨

> Wild Times is a real time full stack single player game. This game is build with the help of MERN Stack, also incorporating dynamic animation to create an immersive gaming experience.

---

## Description✨

- The game features players to earn points and also increase their ranks in the leaderboard, and earn rewards as they progress through the levels. Wild Times even features real time chat, leaderboard and achievements to enhance their social aspects.

- The repo includes both client-side and server-side.

---

## RUN the Game :

1. Clone this repository.
2. Open the terminal and navigate to the folder.
3. Run the following command to install dependencies:

```
npm install
```

4. Run the following command to run the game:

```
npm run dev
```

5. Enjoy!

---

## 💫Tech-Stack->

- #### For Frontend :-

  - `HTML5`
  - `CSS3`
  - `JavaScript`
  - `ReactJS`
  - `TypeScript`

- #### For Backend :-

  - `NodeJS`
  - `ExpressJS`
  - `MongoDB `

- #### For Styling :-

  - `Chakra UI `
  - `CSS-Animations`

- #### For deploy database :-

  - `cyclic `

- #### For live Project : -
  - `vercel`

---

## Features ✨:-

---

| Serial No | Feature                                                                           |
| --------- | --------------------------------------------------------------------------------- |
| 1         | User signup, User Login                                                           |
| 2         | Able to play the game                                                             |
| 3         | Able to see the score                                                             |
| 4         | Dynamic Leaderboard                                                               |

---

# Package.json(Dependency)✨:-

| Serial No | Backend      | Frontend                     |
| --------- | ------------ | ---------------------------- |
| 1         | bcrypt       | chakra-ui                    |
| 2         | mongoose     | react-router-dom             |
| 3         | cors         | react-icons                  |
| 4         | dotenv       | axios                        |
| 5         | express      | typescript                   |
| 6         | jsonwebtoken | react-simple-chatbot         |

---

## Flow

```mermaid
graph TD;
    App-->homePage
    homePage-->signUpPage;
    homePage-->loginPage;
    signUpPage-->gamePage;
    loginPage-->gamePage;
    gamePage-->resultPage
    resultPage-->leaderboardPage
    resultPage-->homePage

```

## 🔗 Creators Profile Links✨

| Creators                 | Github                                                                                                                                    | Linkedin                                                                                                                                                            | Portfolio                                                                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Sarfraj Ahmad Raza | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sarfraj0304) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sarfrajahmadraza/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://sarfraj0304.github.io/)  |
| Monojit Mondal | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ninja-mono1696) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/monojit1696/)  | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://ninja-mono1696.github.io/) |
| Swati Sucharita Mohanty | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/swati082001) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/swati-mohanty08) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://swati082001.github.io/)     |
| Ujjawal Kumar | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ujjawal0203) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ujjawal-kumar-086691237/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ujjawal0203.github.io/)  |

---

## Screenshots 📷

---

# HOME-PAGE
  - Home page includes the title of the game (WILD TIMES) along with the feature to register a new user or to login an existing user, connected with the backend. After the login or registration is successfull, the player will be able to select a theme based on his/her choice and get notified with the help of a 'toast', and will be directly navigated to the 'Gaming Page'.

![Guide](https://user-images.githubusercontent.com/105916979/222903867-661f7aea-2118-4b6d-92a3-88ed94d086d4.png)

![Home](https://user-images.githubusercontent.com/105916979/222903872-7d1ef788-bee1-49dd-b63f-fc43682fa903.png)

![Theme](https://user-images.githubusercontent.com/105916979/222903870-f94fc3d1-0fe5-4195-8f3b-6caa16bf76ee.png)

# GAME-PAGE
  - As per the theming of the game page there are two themes
    - Squid Pro : The player will get a real time experience of the squid game with player dodging the bomb obstacles and reaching the goal to earn points.
    - Snow man : The player will get a real time experience of a snow blizzard with snow-man dodging the fire obstacles and reaching the goal to earn points.

  - HOW TO PLAY :
   - On pressing of the mouse button the player will move forward and on releasing the mouse button the player will stop.
   - The speed of the obstacles keeps on increasing as the player move forward.
   - The player has to save himself/herself from the obstacles to reach the goal.
   - If the player gets touched with any obstacles, the game is over.

![loginShoeland](https://user-images.githubusercontent.com/112841168/222078830-5c542e7f-7839-45d7-912d-2a275972af94.png)

# RESULT-PAGE
  - After the game ends the scores will be shown on this page.

![kidSHoeland](https://user-images.githubusercontent.com/112841168/222079404-d1e9298c-9438-4a1d-a430-5269da99b6e6.png)

# LEADERBOARD
  - The ranking of all the players registered with us will be shown here with their all time scores and level they have crossed.

![SinglePage](https://user-images.githubusercontent.com/112841168/222079907-46142af7-7413-470c-9449-d140256ffcd3.png)

# Payment

![payment](https://user-images.githubusercontent.com/112841168/222081109-35c28696-b1a0-408a-84bb-0d823c3ee42c.png)

---

## Reference

- [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images)
-

---

<h1 align="center">✨Thank You✨</h1>
