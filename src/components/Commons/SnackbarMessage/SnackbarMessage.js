import React, { useState } from "react";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export const SnackbarMessage = () => {
  const [open, setOpen] = useState(true);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    // <Stack spacing={2} sx={{ width: "100%" }}>
      // <Button variant="outlined" onClick={handleClick}>
      //   Open error snackbar
      // </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%" }}
          variant="filled"
        >
          Something went wrong. If the problem persists please contact support
        </Alert>
      </Snackbar>
    // </Stack>
  );
}