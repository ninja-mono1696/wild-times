import React, { useRef, useEffect, ImgHTMLAttributes } from "react";
import { Avatar, Box, Button, Heading, Text } from "@chakra-ui/react";
import bgVideo from "../../assets/bg_video.mp4";
import styles from "./Games.module.css";
import { useToast } from "@chakra-ui/react";
import night from "../../assets/Night.mp4";
import vdo from "../../assets/Day2Night.mp4";
import winter from "../../assets/winter.mp4";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// type BlobImageProps = ImgHTMLAttributes<HTMLImageElement> & {
//     image: ImgHTMLAttributes<HTMLImageElement>
// }

interface Overlap {
  bomb: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  b: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

interface result {
  score: number;
  result: String;
}

type userData = {
  _id: string;
  name: string;
  score: number;
  level: number;
};

const Games = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const toast = useToast();
  const navigate = useNavigate();
  console.log(ref.current);

  useEffect(() => {
    init(Bird);
  }, []);

  const SessionData: Array<userData> = JSON.parse(
    sessionStorage.getItem("user") || ""
  );
  const id = SessionData[0]._id;
  const PatchPlayerData = (score: number) => {
    try {
      axios
        .patch(`https://shy-blue-elk-hem.cyclic.app/update/${id}`, {
          score: score,
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  function isOverlap(bomb: any, b: any) {
    if (
      bomb.x < b.x + b.w &&
      bomb.x + bomb.w > b.x &&
      bomb.y < b.y + b.h &&
      bomb.y + bomb.h > b.y
    ) {
      return true;
    }

    return false;
  }
  //https://i.ibb.co/n3ybx81/Snowman-Face.png ---snowman face
  //https://i.ibb.co/ZxrcfmY/Snowman.png ---snowman
  //https://i.ibb.co/QCdKNyY/al.png----bird
  const Bird = new Image();
  Bird.src = "https://i.ibb.co/ZxrcfmY/Snowman.png";
  Bird.alt = "bird";
  Bird.style.zIndex = "10";

  //https://i.ibb.co/bF1JRDB/fire.png ----fire
  //https://i.ibb.co/mTRxM21/images.png ---bomb
  const Bomb = new Image();
  Bomb.src = "https://i.ibb.co/bF1JRDB/fire.png";
  Bomb.alt = "Bomb";
  Bomb.style.zIndex = "20";

  const Winner = new Image();
  Winner.src = "https://i.ibb.co/6Yh1mT6/trophy.png";
  Winner.alt = "Trophy";
  Winner.style.zIndex = "20";

  function init(Bird: HTMLImageElement) {
    if (ref.current) {
      const canvas = ref.current.getContext("2d");
      let game_over = false;

      let width = (ref.current.width = 1252);
      let height = (ref.current.height = 516);

      let e1 = { x: 200, y: 50, w: 80, h: 80, speed: 20 };
      let e2 = { x: 450, y: 150, w: 80, h: 80, speed: 30 };
      let e3 = { x: 700, y: 300, w: 80, h: 80, speed: 30 };
      let e4 = { x: 950, y: 100, w: 80, h: 80, speed: 30 };

      let enemy = [e1, e2, e3, e4];
      let player = {
        x: 30,
        y: height / 2.5,
        w: 110,
        h: 110,
        speed: 35,
        moving: "false",
      };
      let trophy = {
        x: width - 150,
        y: height / 2.5,
        w: 150,
        h: 150,
      };

      ref.current.addEventListener("mousedown", () => {
        console.log("Mouse Pressed");
        player.moving = "true";
      });

      ref.current.addEventListener("mouseup", () => {
        console.log("Mouse Released");
        player.moving = "false";
      });

      //set interval
      function gameInterval() {
        if (game_over) {
          setTimeout(() => {
            navigate("/result");
          }, 2000);
          clearInterval(temp);
        }

        //to move the bird
        if (player.moving == "true") {
          player.x += player.speed;
        }
        //to move the bomb
        for (let i = 0; i < enemy.length; i++) {
          enemy[i].y += enemy[i].speed;
          if (enemy[i].y > height - enemy[i].h || enemy[i].y <= 0) {
            enemy[i].speed *= -1;
          }
        }

        //to check the collision
        for (let i = 0; i < enemy.length; i++) {
          if (isOverlap(enemy[i], player)) {
            let obj: result = {
              score: enemy.length * 0,
              result: "lose",
            };

            //to clear the prev image
            canvas?.clearRect(0, 0, width, height);

            //to draw the image of the bomb
            for (let i = 0; i < enemy.length; i++) {
              canvas?.drawImage(
                Bomb,
                enemy[i].x,
                enemy[i].y,
                enemy[i].w,
                enemy[i].h
              );
            }
            //drawing the bird
            canvas?.drawImage(Bird, player.x, player.y, player.w, player.h);
            toast({
              title: "Oops ! You Loose",
              description: "Better Luck Next Time",
              status: "error",
              duration: 9000,
              isClosable: true,
              position: "top",
            });
            PatchPlayerData(0);
            sessionStorage.setItem("result", JSON.stringify(obj));
            game_over = true;
            break;
          }
        }

        // collision for the win.
        if (isOverlap(player, trophy)) {
          let obj: result = {
            score: enemy.length * 10,
            result: "win",
          };
          toast({
            title: "Yeayy ! You won..",
            description: "Amazing",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
          PatchPlayerData(obj.score);
          sessionStorage.setItem("result", JSON.stringify(obj));
          game_over = true;
          return;
        }

        //to clear the prev image
        canvas?.clearRect(0, 0, width, height);

        //to draw the image of the bomb
        for (let i = 0; i < enemy.length; i++) {
          canvas?.drawImage(
            Bomb,
            enemy[i].x,
            enemy[i].y,
            enemy[i].w,
            enemy[i].h
          );
        }
        //drawing the bird
        canvas?.drawImage(Bird, player.x, player.y, player.w, player.h);

        //to draw the trophy
        // Draw the vaccine
        canvas?.drawImage(Winner, trophy.x, trophy.y, trophy.w, trophy.h);
      }

      var temp = setInterval(gameInterval, 100);
    }
  }

  return (
    <div className={styles.games}>
      <Box id="main" height={"100vh"} width={"100%"}>
        <video
          src={winter}
          muted
          autoPlay
          loop
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: -1,
            objectFit: "cover",
          }}
        ></video>
        <Box
          display={"flex"}
          flexDirection="column"
          gap={"10px"}
          position={"absolute"}
          top={"5%"}
          width={"100%"}
        >
          <Box
            width={"90%"}
            display={"flex"}
            justifyContent={"space-between"}
            m={"auto"}
          >
            <Button
              bg={"black"}
              color="white"
              onClick={() => {
                navigate("/");
              }}
            >
              End Game
            </Button>

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"12%"}
            >
              <Avatar name={SessionData[0].name.toUpperCase()}></Avatar>
              <Text fontSize={"25px"}>
                {SessionData[0].name.toUpperCase()}({SessionData[0].level})
              </Text>
            </Box>
          </Box>
          <canvas ref={ref} id="canvas"></canvas>
        </Box>
      </Box>
    </div>
  );
};

export default Games;
