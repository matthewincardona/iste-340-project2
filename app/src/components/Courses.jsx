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
      <h1>Courses</h1>
      <div>
        {courses.map((course) => (
          <li>
            {course.degreeName}
            <br />
            {course.semester}
          </li>
        ))}
      </div>
    </>
  );
};

export default Courses;
