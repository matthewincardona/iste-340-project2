//imports
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Tab } from "semantic-ui-react";
import getData from "../utils/getData";

//get the css
import "./People.css";

const Courses = () => {
  //instance vars
  const [courseLoaded, setcourseLoaded] = useState(false);
  const [courseObj, setcourseObj] = useState();

  //   const undergradDegrees = {
  //     render: () => <div></div>,
  //   };

  React.useEffect(() => {
    getData("courses/").then((json) => {
      setcourseObj(json);
      setcourseLoaded(true);
    });
  }, []);

  if (!courseLoaded)
    return (
      <>
        <h1>Our People</h1>
        <h3>Loading...</h3>
      </>
    );

  const courses = courseObj;

  //where all is loaded...
  return (
    <>
      <Box className="my-20">
        <h3>Courses</h3>
        <Box className="flex flex-wrap">
          {courses.map((course) => (
            <div className="flex justify-center items-center w-96 h-96 m-4 backdrop-blur-md bg-[#E0A1A11A] text-mustard">
              {course.degreeName}
              {course.semester}
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Courses;
