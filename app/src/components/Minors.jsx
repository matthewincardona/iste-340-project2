//imports
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Tab } from "semantic-ui-react";
import getData from "../utils/getData";
import MinorsModal from "./MinorsModal";

const Minors = () => {
  //instance vars
  const [minorsLoaded, setminorsLoaded] = useState(false);
  const [minorsObj, setminorsObj] = useState();

  React.useEffect(() => {
    getData("minors/").then((json) => {
      setminorsObj(json);
      setminorsLoaded(true);
    });
  }, []);

  if (!minorsLoaded)
    return (
      <>
        <h3>Minors</h3>
        <h4>Loading...</h4>
      </>
    );

  const minors = minorsObj.UgMinors;

  //where all is loaded...
  return (
    <>
      <Box className="my-20">
        <h3>Minors</h3>
        <Box className="flex flex-wrap place-content-center">
          {minors.map((minor) => (
            <div className="flex justify-center p-8 font-bold w-[40rem] h-96 m-4 backdrop-blur-md bg-[#E0A1A11A]">
              <MinorsModal {...minor} />
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Minors;

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
