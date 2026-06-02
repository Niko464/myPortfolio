import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import SectionHeading from "../SectionHeading";
import { stagger } from "../Reveal";
import "../../styles/Projects.css";

import NO_PICTURE from "./pictures/NO_PICTUREV1.png";

import CRYPTO_NOTIF_1 from "./pictures/CRYPTO_NOTIF_1.png";
import CRYPTO_NOTIF_2 from "./pictures/CRYPTO_NOTIF_2.png";
import FLAPPY_1 from "./pictures/FLAPPY_1.png";
import FLAPPY_2 from "./pictures/FLAPPY_2.png";
import GOMOKU_1 from "./pictures/GOMOKU_1.png";
import GOMOKU_2 from "./pictures/GOMOKU_2.png";
import GOMOKU_3 from "./pictures/GOMOKU_3.png";
import GOMOKU_4 from "./pictures/GOMOKU_4.png";
import MPR_1 from "./pictures/MPR_1.png";
import MPR_2 from "./pictures/MPR_2.png";
import MPR_3 from "./pictures/MPR_3.png";
import MPR_4 from "./pictures/MPR_4.png";
import PASS_MANAGER_1 from "./pictures/PASSWORD_MANAGER_1.png";
import PASS_MANAGER_2 from "./pictures/PASSWORD_MANAGER_2.png";
import PASS_MANAGER_3 from "./pictures/PASSWORD_MANAGER_3.png";
import PASS_MANAGER_4 from "./pictures/PASSWORD_MANAGER_4.png";
import RTECH_AI_1 from "./pictures/RTECH_AI_1.png";
import RTECH_AI_2 from "./pictures/RTECH_AI_2.png";
import RTECH_GUI_1 from "./pictures/RTECH_GUI_1.png";
import RTECH_GUI_2 from "./pictures/RTECH_GUI_2.png";
import RTECH_GUI_3 from "./pictures/RTECH_GUI_3.png";
import RTECH_GUI_4 from "./pictures/RTECH_GUI_4.png";

import LIVELINX_1 from "./pictures/LIVELINX_1.png";
import LIVELINX_2 from "./pictures/LIVELINX_2.png";
import LIVELINX_3 from "./pictures/LIVELINX_3.png";
import LIVELINX_4 from "./pictures/LIVELINX_4.png";
import LIVELINX_5 from "./pictures/LIVELINX_5.jpg";
import RENO_1 from "./pictures/RENO_1.png";
import RENO_2 from "./pictures/RENO_2.png";
import RENO_3 from "./pictures/RENO_3.jpg";
import RENO_4 from "./pictures/RENO_4.png";
import NATAN_1 from "./pictures/NATAN_1.png";
import NATAN_2 from "./pictures/NATAN_2.png";
import NATAN_3 from "./pictures/NATAN_3.png";
import CASINO_HOME from "./pictures/CASINO_HOME.png";
import CASINO_SLOT35 from "./pictures/CASINO_SLOT35.png";
import CASINO_ADMIN from "./pictures/CASINO_ADMIN.png";
import CASINO_DICE_VID from "./pictures/CASINO_DICE_VID.mp4";
import CASINO_MINES_VID from "./pictures/CASINO_MINES_VID.mp4";
import CASINO_PLINKO_VID from "./pictures/CASINO_PLINKO_VID.mp4";
import CASINO_SLOT777_VID from "./pictures/CASINO_SLOT_777_VID.mp4";

const projects = [
  {
    title: "LiveLinx",
    desc: "Digital learning platform for the medical sector — built and operated end-to-end as lead engineer.",
    previewImg: LIVELINX_1,
    presentationImages: [LIVELINX_1, LIVELINX_2, LIVELINX_3, LIVELINX_4, LIVELINX_5],
    longDescription:
      "As the lead engineer at LiveLinx I lead development of the company's digital learning platform for the medical sector across the whole stack — frontend, backend and infrastructure. Hospitals and clinicians use it to build interactive training content (clinical cases with medical history, ECGs, echocardiography and imaging) and to run live in-person training events powered by the platform. I build and maintain the product with React, TypeScript and GraphQL on AWS, and operate the production infrastructure: a Kubernetes cluster and Linux servers handling deployments, scaling, monitoring and reliability.",
    githubLink: null,
    tags: ["React", "GraphQL", "Kubernetes"],
    featured: true,
    client: true,
  },
  {
    title: "Reno Energy — Quote Simulator",
    desc: "A public 12-step simulator to configure a solar installation and request a quote online.",
    previewImg: RENO_1,
    presentationImages: [RENO_1, RENO_2, RENO_3, RENO_4],
    longDescription:
      "A public quote simulator (reno.energy/simulateur) that lets customers configure their own solar installation and request a quote online. The flow walks through twelve steps — simulation type, location, panel type, roof inclination and type, consumption, panel placement on a satellite view of the customer's actual roof, meter, storage battery and EV charger — then produces an instant configuration summary with a total price. Built with React and TypeScript.",
    githubLink: null,
    tags: ["React", "TypeScript"],
    featured: true,
    client: true,
  },
  {
    title: "Natan — Product Management",
    desc: "An internal tool to centrally manage a fashion house's products, variants, pricing and Shopify sync.",
    previewImg: NATAN_1,
    presentationImages: [NATAN_1, NATAN_2, NATAN_3],
    longDescription:
      "An internal product-management tool (app.natan.be) for the fashion house Natan to centrally track products, variants, pricing and imagery alongside customers and sales. Each product carries multi-language descriptions (FR/EN/NL), media, technical drawings, colour and size options and variants, with two-way Shopify sync and scheduled bulk import jobs that reconcile tens of thousands of products. Built with React, TypeScript and GraphQL.",
    githubLink: null,
    tags: ["React", "TypeScript", "GraphQL"],
    featured: true,
    client: true,
  },
  {
    title: "Object Detection JAM",
    desc: "AI project detecting pieces of trash on a conveyor belt full of JAM.",
    previewImg: RTECH_AI_1,
    presentationImages: [RTECH_AI_1, RTECH_AI_2],
    longDescription:
      "The mission was to: First create an AI model capable of detecting different kinds of trash that could be: small pebbles, big chunks of plastic, a piece of cloth, small insects, a tiny branch etc. Once that modal was created, the robot arm to remove those pieces of trash in realtime. The end goal was to implement this in a JAM factory where this work was done by humans. I want to clarify that I worked on this with another person, I did not create the GUI that you can see in the screenshot. I was responsible of the AI part and some of the tracking software used by the robot.",
    githubLink: null,
    tags: ["AI", "Computer Vision"],
    featured: true,
    client: true,
  },
  {
    title: "C++ Qt GUI",
    desc: "Graphical user interface using Qt in C++ for a satellite re-entry simulation.",
    previewImg: RTECH_GUI_1,
    presentationImages: [RTECH_GUI_1, RTECH_GUI_2, RTECH_GUI_3, RTECH_GUI_4],
    longDescription:
      "The client had a C++ program that computed lots of data to simulate the re-entry of a satellite in the atmosphere. The client wanted a GUI to display the data in a more user friendly way. I was responsible of creating the GUI using Qt in C++. I was not responsible for the computing/simulation part of the project.",
    githubLink: null,
    tags: ["C++", "Qt", "Desktop"],
    client: true,
  },
  {
    title: "MyCasino",
    desc: "A full-stack multiplayer casino — Dice, Mines, Plinko and slots with provably-fair RNG and real-time betting.",
    previewImg: CASINO_HOME,
    presentationImages: [
      CASINO_DICE_VID,
      CASINO_MINES_VID,
      CASINO_PLINKO_VID,
      CASINO_SLOT777_VID,
      CASINO_HOME,
      CASINO_SLOT35,
      CASINO_ADMIN,
    ],
    longDescription:
      "A full-stack, multiplayer browser casino built purely for fun — Dice, Mines, Plinko and two slot machines. Every bet resolves through a provably-fair RNG (HMAC-SHA256 over a server seed, client seed and nonce) so outcomes are verifiable. A NestJS backend broadcasts live bets, balances, results and leaderboards to every connected player in real time over Socket.IO, with JWT-authenticated WebSocket connections and CASL-based authorization. An admin dashboard surfaces per-game PnL, variance and live user analytics, with per-user management and full bet history. Built as a Yarn monorepo: a Next.js 14 frontend (Tailwind, Zustand, React Query and matter-js physics for Plinko), the NestJS/MongoDB backend, a shared package and a load-testing simulation, all containerised with Docker Compose behind Traefik.",
    githubLink: null,
    tags: ["Next.js", "NestJS", "Socket.IO", "MongoDB"],
    featured: true,
  },
  {
    title: "Twitch Bot",
    desc: "A bot capable of increasing the viewer count on a Twitch channel. (Educational, source not public.)",
    previewImg: NO_PICTURE,
    presentationImages: [NO_PICTURE],
    longDescription:
      "This is one of my more advanced projects, unfortunately I can't share the source code because it could be used with bad intentions. This bot uses proxies, it is able to increase the viewer count of a twitch channel. It also has a feature to watch ads. It has lots of different options to be able to choose how many viewers you want to increase the cannel count by, how many ads per hour you want to see, statistics about what the bot has done until now, etc. This project had an educational purpose. Coded in python",
    githubLink: null,
    tags: ["Python", "Automation"],
  },
  {
    title: "GLM Fine Tuning",
    desc: "Fine-tuning a general language model to detect hate speech in tweets.",
    previewImg: NO_PICTURE,
    presentationImages: [NO_PICTURE],
    longDescription:
      "For this project I Fine tuned a Large GLM called 'glm-roberta-large' in order to detect hate speech in tweets. I also created a second fine tuned model that was able to generate new text. The generated text answered questions regarding a given paragraph.",
    githubLink: null,
    tags: ["AI", "NLP"],
  },
  {
    title: "Racing AI",
    desc: "Mad Pod Racing (codingame.com) solved with genetic algorithms.",
    previewImg: MPR_1,
    presentationImages: [MPR_1, MPR_2, MPR_3, MPR_4],
    longDescription:
      "I created a simulation of the Mad Pod Racing game from codingame.com. I used genetic algorithms to create an AI that would be able to beat the game. I also created a library to be able to replay games and to see the evolution of the AI.",
    githubLink: "https://github.com/Niko464/ai-exploration/tree/master/codinGame",
    tags: ["AI", "Genetic Algo"],
  },
  {
    title: "Flappy AI",
    desc: "A Flappy Bird AI evolved with genetic algorithms.",
    previewImg: FLAPPY_2,
    presentationImages: [FLAPPY_1, FLAPPY_2],
    longDescription:
      "I used genetic algorithms to watch the evolution of a flappy bird AI. I used a library I created to re-watch games. The focus of the project was on building the AI not graphics.",
    githubLink: "https://github.com/Niko464/ai-exploration/tree/master/flappyBird",
    tags: ["AI", "Genetic Algo"],
  },
  {
    title: "Gomoku AI",
    desc: "Five-in-a-row AI with minimax, alpha-beta pruning, bitboards and transposition tables.",
    previewImg: GOMOKU_4,
    presentationImages: [GOMOKU_1, GOMOKU_2, GOMOKU_3, GOMOKU_4],
    longDescription:
      "This game is five in a row without the gravity rule. I made an AI that uses a minimax algorithm with alpha-beta pruning. I used lots of different optimizations to make the AI faster since it only has 5 seconds per turn to think. These optimizations include but are not limited to: Transposition tables, bitboards, iterative deepening. I enjoyed this project a lot because I learned about lots of new topics.",
    githubLink: "https://github.com/Niko464/gomoku_ai",
    tags: ["AI", "Game"],
    featured: true,
  },
  {
    title: "Journal",
    desc: "A personal journal app built with React, Fastify and MongoDB.",
    previewImg: NO_PICTURE,
    presentationImages: [NO_PICTURE],
    longDescription:
      "I wanted to be able to express my thoughts in a more organized way. I decided to create a journal application. I used React for the frontend, Fastify for the backend and MongoDB for the database. One of the reasons why I created my own app was because I wanted certain specific features such as assigning topics to entires, searching by topics, searching by dates etc. Since I know how to code, I just created it myself.",
    githubLink: "https://github.com/Niko464/journal",
    tags: ["React", "MongoDB"],
  },
  {
    title: "Password Manager",
    desc: "A self-built password manager exploring hashing, encryption and PyQt5.",
    previewImg: PASS_MANAGER_1,
    presentationImages: [PASS_MANAGER_1, PASS_MANAGER_2, PASS_MANAGER_3, PASS_MANAGER_4],
    longDescription:
      "This was a small project that I made because I did not want to use a public password manager, so I decided to build my own. I learned about hashing, encryption, more about PyQt, searching algorithms (for the search bar) etc.",
    githubLink: "https://github.com/Niko464/password_manager",
    tags: ["Python", "Security"],
  },
  {
    title: "Distributed Database Project",
    desc: "A distributed database environment using MongoDB and HDFS for media storage.",
    previewImg: NO_PICTURE,
    presentationImages: [NO_PICTURE],
    longDescription:
      "This project was in the context of my studies at Tsinghua University. The goal was to create a distributed database environment capable of storing big amounts of data. We had to pretend we were a sort of social media company that had users who read articles. Articles could also have pictures and videos which also had to be stored in a distributed way. Me and my teammate chose to use MongoDB for the database and HDFS for the media storage. The administrators of the system should also be able to see statistics about the db's performance.",
    githubLink: "https://github.com/Niko464/ddbs_final_project",
    tags: ["Big Data", "MongoDB"],
  },
  {
    title: "Crypto Notification Bot",
    desc: "Get notified about crypto price movements via the Binance API.",
    previewImg: CRYPTO_NOTIF_1,
    presentationImages: [CRYPTO_NOTIF_1, CRYPTO_NOTIF_2],
    longDescription:
      "The goal of this project is to get notifications when: a crypto currency reaches a certain price or it's price moved a certain percentage. I used the Binance API to get the price of the crypto currencies. I created this because I wanted to stay aware of the current price of the crypto currencies that I own without spending my day watching the markets evolve.",
    githubLink: "https://github.com/Niko464/crypto_notifs",
    tags: ["Python", "API"],
  },
  {
    title: "Instant Audio Replay",
    desc: "Save the PC and microphone audio of the past x minutes to disk on a hotkey.",
    previewImg: NO_PICTURE,
    presentationImages: [NO_PICTURE],
    longDescription:
      "I coded my own Instant Audio replay, I used to use NVIDIA's shadowplay but I had problems using it. Additionally since I did not want to record video data, I created my own version of shadowplay. It records the PC's output audio and the microphone's input audio of the past x minutes. It then merges the audio tracks together and saves them to disk when the users presses a hotkey.",
    githubLink: "https://github.com/Niko464/instant_replay",
    tags: ["Python", "Audio"],
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected"
          accent="work."
          lead="Client products I've shipped and personal builds I've explored — from production platforms to AI experiments. Tap any card for the details."
        />

        <motion.div
          className="projects__grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={{ ...project, hasImage: project.previewImg !== NO_PICTURE }}
              isOpen={openIndex === index}
              onOpen={() => setOpenIndex(index)}
              onClose={() => setOpenIndex(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
