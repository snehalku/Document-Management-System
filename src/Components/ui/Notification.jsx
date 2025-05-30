import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function TransitionAlerts({
  alertOpen,
  handleAlertClose,
  message,
}) {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={alertOpen}>
        {/* <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleAlertClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert> */}
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleAlertClose}
            >
              {/* <CloseIcon fontSize="small" /> */}
            </IconButton>
          }
          severity="info"
          variant="filled"
          sx={{
            mb: 1,
            borderRadius: 2,
            boxShadow: 2,
            px: 2,
            py: 1.5,
            fontSize: "0.95rem",
            fontWeight: 500,
            backgroundColor: "#2e7d32",
            color: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}
