//imports
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Tab } from "semantic-ui-react";
import getData from "../utils/getData";
import CoursesModal from "./CoursesModal";

const Courses = () => {
  //instance vars
  const [courseLoaded, setcourseLoaded] = useState(false);
  const [courseObj, setcourseObj] = useState();

  React.useEffect(() => {
    getData("courses/").then((json) => {
      setcourseObj(json);
      setcourseLoaded(true);
    });
  }, []);

  if (!courseLoaded)
    return (
      <>
        <h3>Courses</h3>
        <h4>Loading...</h4>
      </>
    );

  const courses = courseObj;

  //where all is loaded...
  return (
    <>
      <Box className="my-20">
        <h3>Courses</h3>
        <Box className="flex flex-wrap place-content-center">
          {courses.map((course) => (
            <div className="flex justify-center items-center font-bold w-80 h-32 m-4 backdrop-blur-md bg-[#E0A1A11A]">
              <CoursesModal {...course} />
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Courses;

// import React, { useState, useEffect } from "react";
// import { Icon, Label, Menu, Table } from "semantic-ui-react";
// import Box from "@mui/material/Box";
// import getData from "../utils/getData";

// const Courses = () => {
//   const [coursesLoaded, setcoursesLoaded] = useState(false);
//   const [coursesObj, setcoursesObj] = useState();

//   useEffect(() => {
//     getData("courses/").then((json) => {
//       setcoursesObj(json);
//       setcoursesLoaded(true);
//     });
//   }, []);

//   if (!coursesLoaded) {
//     return (
//       <>
//         <h1>courses</h1>
//         <h3>Loading...</h3>
//       </>
//     );
//   }

//   const courses = coursesObj.employers.employerNames;

//   return (
//     <>
//       <Box className="my-20">
//         <h3>Courses</h3>
//         <Table celled>
//           <Table.Header>
//             <Table.Row>
//               <Table.HeaderCell>Courses</Table.HeaderCell>
//             </Table.Row>
//           </Table.Header>

//           <Table.Body>
//             {courses.map((employer, index) => (
//               <Table.Row key={index}>
//                 <Table.Cell>{employer}</Table.Cell>
//               </Table.Row>
//             ))}
//           </Table.Body>

//           <Table.Footer>
//             <Table.Row>
//               <Table.HeaderCell colSpan="1">
//                 <Menu floated="right" pagination>
//                   <Menu.Item as="a" icon>
//                     <Icon name="chevron left" />
//                   </Menu.Item>
//                   <Menu.Item as="a">1</Menu.Item>
//                   <Menu.Item as="a">2</Menu.Item>
//                   <Menu.Item as="a">3</Menu.Item>
//                   <Menu.Item as="a">4</Menu.Item>
//                   <Menu.Item as="a" icon>
//                     <Icon name="chevron right" />
//                   </Menu.Item>
//                 </Menu>
//               </Table.HeaderCell>
//             </Table.Row>
//           </Table.Footer>
//         </Table>
//       </Box>
//     </>
//   );
// };

// export default Courses;
