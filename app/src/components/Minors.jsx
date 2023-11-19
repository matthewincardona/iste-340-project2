//imports
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Tab } from "semantic-ui-react";
import getData from "../utils/getData";

//get the css
import "./People.css";

const Minors = () => {
  //instance vars
  const [minorsLoaded, setminorsLoaded] = useState(false);
  const [minorsObj, setminorsObj] = useState();

  //   const undergradDegrees = {
  //     render: () => <div></div>,
  //   };

  React.useEffect(() => {
    getData("minors/").then((json) => {
      setminorsObj(json);
      setminorsLoaded(true);
    });
  }, []);

  if (!minorsLoaded)
    return (
      <>
        <h1>Our People</h1>
        <h3>Loading...</h3>
      </>
    );

  const minors = minorsObj.UGMinors;

  //where all is loaded...
  return (
    <>
      <h1>Minors</h1>
      <div>
        {minors.map((minor) => (
          <li>
            {minor.name}
            <br />
            {minor.title}
            <br />
            {minor.description}
          </li>
        ))}
      </div>
    </>
  );
};

export default Minors;
