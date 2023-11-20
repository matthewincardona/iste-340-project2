import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "700px",
  height: "400px",
  bgcolor: "#22031f80",
  backdropFilter: "blur(8px)",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  rowGap: "1em",
};

export default function PeopleModal({
  username,
  facebook,
  imagePath,
  interestArea,
  name,
  phone,
  office,
  title,
  twitter,
  website,
  tagLine,
  email,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="!mt-4" onClick={handleOpen}>
        {name}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="" sx={style}>
          <Box>
            <Typography variant="h2" component="h2">
              {name}
            </Typography>
            <Typography variant="h4" component="h2">
              {title}
            </Typography>
            {website && (
              <Typography variant="h6" component="h2">
                Website:{" "}
                <a href={website} target="_blank">
                  {website}
                </a>
              </Typography>
            )}
            <Typography variant="h6" component="h2">
              Interest Area: {interestArea}
            </Typography>
          </Box>
          <img src={imagePath} alt={name} />
        </Box>
      </Modal>
    </div>
  );
}
