> 💻 PROJECT CODE ⭐⭐⭐
<h1>✨cheerful-notebook-6741✨</h1>

> 💻 PROJECT NAME ⭐⭐⭐ 
<h1>💫WILD TIMES💫</h1>
<br/>

[![Backend Repo Link](https://img.shields.io/badge/Backend_Repo_Link-0A66C2?style=for-the-badge&logo=github&logoColor=#FF7139)](https://github.com/swati082001/games-backend)
[![Deployed on Cyclic](https://img.shields.io/badge/Deployed_Cyclic_Link-0A66C2?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shy-blue-elk-hem.cyclic.app/)
[![Deployed App on Vercel](https://img.shields.io/badge/Deployed_App_Vercel_Link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://wildtimes-swati082001.vercel.app/)

![ShopGIF](https://www.luckymobileslots.com/wp-content/uploads/2016/07/wild_times_logo.jpg)

## OBJECTIVE✨

> Wild Times is a real time full stack single player game. This game is build with the help of MERN Stack, also incorporating dynamic animation to create an immersive gaming experience.

---

## DESCRIPTION✨

- The game features players to earn points and also increase their ranks in the leaderboard, and earn rewards as they progress through the levels. Wild Times even features real time chat, leaderboard and achievements to enhance their social aspects.

- The repo includes both client-side and server-side.

---

## RUN the Game✨

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

## TECH-STACK💫

- #### For Frontend :

  - `HTML5`
  - `CSS3`
  - `JavaScript`
  - `ReactJS`
  - `TypeScript`

- #### For Backend :

  - `NodeJS`
  - `ExpressJS`
  - `MongoDB `

- #### For Styling :

  - `Chakra UI `
  - `CSS-Animations`

- #### For deploying database :

  - `cyclic `

- #### For live Project : -
  - `vercel`

---

## FEATURES✨

| Serial No | Feature                                                                           |
| --------- | --------------------------------------------------------------------------------- |
| 1         | User signup, User Login                                                           |
| 2         | Able to play the game                                                             |
| 3         | Able to see the score                                                             |
| 4         | Dynamic Leaderboard                                                               |

---

# package.json(Dependency)✨

| Serial No | Backend      | Frontend                     |
| --------- | ------------ | ---------------------------- |
| 1         | bcrypt       | chakra-ui                    |
| 2         | mongoose     | react-router-dom             |
| 3         | cors         | react-icons                  |
| 4         | dotenv       | axios                        |
| 5         | express      | typescript                   |
| 6         | jsonwebtoken | react-simple-chatbot         |

---

## Flow✨

```mermaid
graph TD;
    App-->homePage
    homePage-->registerPage;
    homePage-->loginPage;
    registerPage-->gamePage;
    loginPage-->gamePage;
    gamePage-->resultPage
    resultPage-->gamePage
    resultPage-->leaderboardPage
    leaderboardPage-->homePage

```

## Creators Profile Links✨

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

  ![Day2Night](https://user-images.githubusercontent.com/105916979/222904173-5f39083f-4424-40d1-a254-5fc6287fd3ad.png)

  ![Winter](https://user-images.githubusercontent.com/105916979/222904176-bfeb69fa-2819-4aee-b728-0755827e2b02.png)

  ![Chatbot](https://user-images.githubusercontent.com/105916979/222904174-4ffc69c6-5f6a-43b3-ab98-9c355358a870.png)

# RESULT-PAGE
  - After the game ends the scores will be shown on this page.

  ![Result](https://user-images.githubusercontent.com/105916979/222904169-a0d168b7-be4d-4285-8fa0-0b4cb237add9.png)

# LEADERBOARD
  - The ranking of all the players registered with us will be shown here with their all time scores and level they have crossed.

  ![Leaderboard](https://user-images.githubusercontent.com/105916979/222904170-2a7e0cb1-a64d-4d47-a962-ea0629596921.png)

---

## Reference✨

- [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images)
- [Framer Motion](https://www.framer.com/motion/)

---

<h1 align="center">✨Thank You✨</h1>
