import React from "react";
import Navbar from "./assets/components/Navbar";
import Jumbotron from "./assets/components/Jumbotron";
import Card from "./assets/components/Card";

const App = () => {
  return (
      <>
      {/* Navbar */}
      <Navbar
      name="Start Bootstrap"
      home="Home"
      about="About"
      service="Services"
      contact="Contact"/>

      {/* Jumbotron*/}
      <Jumbotron
      title="A Warm Welcome!"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non sint animi excepturi. Enim quia perferendis voluptatibus consequatur accusamus facilis dicta officia, porro eveniet dignissimos deserunt non corporis! Beatae, sapiente."
      button="Call to action!"/>
      {/*  Card */}
      <Card
      title1="Card title1"
      description1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non sint animi excepturi. Enim quia perferendis voluptatibus consequatur accusamus facilis dicta officia, porro eveniet dignissimos deserunt non corporis! Beatae, sapiente."
      button1="Find Out More!"
      title2="Card title2"
      description2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non sint animi excepturi. Enim quia perferendis voluptatibus consequatur accusamus facilis dicta officia, porro eveniet dignissimos deserunt non corporis! Beatae, sapiente."
      button2="Find Out More!"
      title3="Card title3"
      description3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non sint animi excepturi. Enim quia perferendis voluptatibus consequatur accusamus facilis dicta officia, porro eveniet dignissimos deserunt non corporis! Beatae, sapiente."
      button3="Find Out More!"
      title4="Card title4"
      description4="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non sint animi excepturi. Enim quia perferendis voluptatibus consequatur accusamus facilis dicta officia, porro eveniet dignissimos deserunt non corporis! Beatae, sapiente."
      button4="Find Out More!"/>
      </>
  )}
export default App