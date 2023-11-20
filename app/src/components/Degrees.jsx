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
      <Box className="my-20">
        <h3>Degrees</h3>
        <Box className="flex flex-row w-full place-content-center gap-16">
          <div>
            <h4 className="mb-2">Undergradute</h4>

            {undergraduateDegrees.map((degree) => (
              <li className="list-none">{degree.title}</li>
            ))}
          </div>
          <div>
            <h4 className="mb-2">Graduate</h4>

            {graduateDegrees.map((degree) => (
              <li className="list-none">{degree.title}</li>
            ))}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Degrees;
