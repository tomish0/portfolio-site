import React, {useEffect, useState} from "react";

function Dots(props) {
  const [activeDot, setActiveDot] = useState();

  useEffect(() => {
    
  }, [])

  const slide = (index) => {
    var newPosition = index * props.pageHeight;
    console.log(index, newPosition);
    window.scrollTo({
      top: newPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="dots">
      {props.projects.map((project, index) => {
        return (
          <div className="dot" key={index} onClick={() => slide(index)}>
            <span className={activeDot ? "active-dot" : ""}></span>
          </div>
        );
      })}
    </div>
  );
}

export default Dots;
