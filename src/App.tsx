import React from "react";
import Snowfall from "react-snowfall";

interface Iproject {
  display_name: string;
  description: string;
  link: string;
}

const projects: Iproject[] = [
  {
    display_name: "Simple Core State (BETA)",
    description:
      "A simple state library for React that is object based as the core",
    link: "https://www.npmjs.com/package/simple-core-state",
  },
  {
    display_name: "YourStatus",
    description:
      "Social media platform where you can publish your status and say in a small form what you'r doing in life or anything else",
    link: "https://yourstatus.app",
  },
];

const links: string[] = [
  "https://github.com/twanluttik",
  "https://twitter.com/twanluttik",
  "https://linkedin.com/in/twanluttik",
];

export const App = () => {
  return (
    <div className="App">
      <Snowfall color="rgb(62, 59, 70)" style={{ zIndex: 10 }} />
      <div style={{ position: "relative", zIndex: 11 }}>
        <p
          style={{
            fontWeight: 800,
            fontSize: 60,
            color: "white",
            textAlign: "center",
          }}
        >
          Twan Luttik
        </p>

        <div>
          {links.map((item, index) => (
            <p
              key={`id-${index}`}
              className="linkText"
              onClick={() => window.location.assign(item)}
            >
              {item.split("://")[1]}
            </p>
          ))}
        </div>

        <div style={{ marginTop: 60 }}>
          {projects.map((item, index) => (
            <div
              className="projectCard"
              key={`id-${index}`}
              // onMouseMove={(item) => {
              //   let x = Math.abs(
              //     item.currentTarget.getBoundingClientRect().x - item.clientX
              //   );
              //   // Get the y position relative to the button
              //   let y = Math.abs(
              //     item.currentTarget.getBoundingClientRect().y - item.clientY
              //   );
              //   let halfWidth =
              //     item.currentTarget.getBoundingClientRect().width / 2;
              //   let halfHeight =
              //     item.currentTarget.getBoundingClientRect().height / 2;

              //   let calcAngleX = (x - halfWidth) / 6;
              //   let calcAngleY = (y - halfHeight) / 14;
              //   console.log(calcAngleX);

              //   item.currentTarget.style.transform = `rotate3d(${!calcAngleX}, ${1}, 0, 20deg)`;
              //   // item.currentTarget.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;
              // }}
            >
              <p>{item.display_name}</p>
              <p className="description">{item.description}</p>
              <button onClick={() => window.location.assign(item.link)}>
                Check out
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
