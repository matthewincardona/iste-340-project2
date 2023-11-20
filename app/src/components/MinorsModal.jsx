import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import getData from "../utils/getData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 650,
  p: 6,
  bgcolor: "#ffffff20",
  backdropFilter: "blur(8px)",
  borderRadius: "10px",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
};

const styleInner = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  height: "300px",
};

export default function MinorsModal({
  name,
  title,
  description,
  courses,
  note,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [courseLoaded, setCourseLoaded] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isCourseSelected, setIsCourseSelected] = useState(false);
  const [courseData, setCourseData] = useState(null);

  const getCourseData = (courseID) => {
    setIsCourseSelected(true);
    setCourseLoaded(false);
    getData("course/courseID=" + courseID).then((json) => {
      setCourseData(json);
      setCourseLoaded(true);
    });
  };

  return (
    <div>
      <Typography variant="h3" component="h2">
        {name}
      </Typography>
      <Box className="h-60 overflow-y-auto">
        <Typography variant="h6" component="h2">
          {description}
        </Typography>
      </Box>
      <Button className="w-full " onClick={handleOpen}>
        View More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={styleInner}>
            <Box>
              <Typography variant="h2" component="h2">
                {name}
              </Typography>
              <Box className="flex flex-col gap-1 mt-4">
                <Typography variant="h4" component="h2">
                  Note:
                </Typography>
                <Typography variant="h6" component="h2">
                  {note}
                </Typography>
              </Box>
            </Box>
            <Box className="flex flex-col gap-2">
              <Box className="">
                <Typography variant="h4" component="h2">
                  Courses
                </Typography>
              </Box>
              <Box className="overflow-auto w-60 pb-8 mb-8">
                <Typography variant="h6" component="h2">
                  {courses.map((course) => (
                    <li
                      key={course}
                      className="text-mustard hover:underline cursor-pointer"
                      onClick={() => {
                        setSelectedCourse(course);
                        getCourseData(course);
                      }}
                    >
                      {course}
                    </li>
                  ))}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="mt-4 flex flex-col gap-2">
            <Typography variant="h4" component="h2">
              Course Description
            </Typography>
            {/* nested ternary :D */}
            {selectedCourse ? (
              courseLoaded ? (
                <Typography variant="h6" component="h2">
                  {courseData.title}
                  {": "}
                  {courseData.description}
                </Typography>
              ) : (
                <div className="flex items-center justify-center">
                  <CircularProgress size={24} />
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ marginLeft: 2 }}
                  >
                    Loading...
                  </Typography>
                </div>
              )
            ) : (
              <Typography variant="h6" component="h2">
                Select a course above to see information about it.
              </Typography>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
