import React, { useEffect, useState } from "react";
import Color from "color";
import Header from "./features/Header/Header";
import Main from "./features/Main/Main";
import projects from "./assets/projects.json";

function App() {
  const [color, setColor] = useState(undefined);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    projects.forEach((project) => {
      var color = Color(project.backgroundColor);
      var light = color.isLight();
      var newColor;
      if (light) {
        newColor = color.rotate(50).darken(0.5);
      } else {
        newColor = color.rotate(-50).lighten(0.8);
      }
      setColors((colors) => [...colors, newColor]);
    });
  }, []);

  return (
    <div className="App">
      <Header color={color ? color : colors[0]} />
      <Main
        setColor={setColor}
        colors={colors}
        color={color ? color : colors[0]}
      />
    </div>
  );
}

export default App;
