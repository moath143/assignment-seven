import React from "react";
import ReactPhoto from "./../../assets/react.jpg";
import VuePhoto from "./../../assets/vue.jpg";
import AngularPhoto from "./../../assets/angular.jpg";
import Card from "./../card";
import "./cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <div className="container">
        <div className="cards-tech">
          <Card
            photo={ReactPhoto}
            title={"React js"}
            desc={
              "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quidem."
            }
          />
          <Card
            photo={VuePhoto}
            title={"Vue js"}
            desc={
              "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quidem."
            }
          />
          <Card
            photo={AngularPhoto}
            title={"Angular js"}
            desc={
              "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quidem."
            }
          />
          <Card
            photo={ReactPhoto}
            title={"React js"}
            desc={
              "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quidem."
            }
          />
          <Card
            photo={VuePhoto}
            title={"Vue js"}
            desc={
              "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quidem."
            }
          />
          <Card
            photo={AngularPhoto}
            title={"Angular js"}
            desc={
              "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quidem."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
