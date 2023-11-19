//imports
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Tab } from "semantic-ui-react";
import getData from "../utils/getData";

//get the css
import "./People.css";

const Degrees = () => {
  //instance vars
  const [degLoaded, setdegLoaded] = useState(false);
  const [degObj, setdegObj] = useState();

  //   const undergradDegrees = {
  //     render: () => <div></div>,
  //   };

  React.useEffect(() => {
    getData("degrees/").then((json) => {
      setdegObj(json);
      setdegLoaded(true);
    });
  }, []);

  if (!degLoaded)
    return (
      <>
        <h1>Our People</h1>
        <h3>Loading...</h3>
      </>
    );

  const undergraduateDegrees = degObj.undergraduate;
  const graduateDegrees = degObj.graduate;

  //where all is loaded...
  return (
    <>
      <h1>Courses</h1>
      <h3>Undergradute</h3>
      <div>
        {undergraduateDegrees.map((degree) => (
          <li>{degree.title}</li>
        ))}
      </div>
      <h3>Graduate</h3>
      <div>
        {graduateDegrees.map((degree) => (
          <li>{degree.title}</li>
        ))}
      </div>
    </>
  );
};

export default Degrees;
