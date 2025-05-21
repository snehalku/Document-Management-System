import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import ID from "../assets/ID.jpg";

const Archive1 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#f2f4f5",
          //   minHeight: "90vh",
          width: "100%",
          py: 4,
          pl: "70px",
          pt: "12px",
          pr: "24px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <Card
          sx={{
            flex: 1.3,
            height: "100vh",
            position: "sticky",
            top: 0,
            alignSelf: "flex-start",
            overflowY: "hidden",
          }}
        >
          <Box sx={{ width: "100%", height: "auto" }}>
            <CardMedia
              component="img"
              image={ID}
              alt="Document"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Card>

        <Box
          sx={{
            flex: 1,
            height: "100vh", // Full height container
            p: 2, // optional padding
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Customer KYC
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 2 }}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Select Department
            </Typography>

            <FormControl sx={{ minWidth: 150 }}>
              <Select
                labelId="application-select-label"
                id="application-select"
                defaultValue="Sales"
                label="Application"
                sx={{
                  bgcolor: "#f2f4f5",
                  height: "45px",
                  borderRadius: "5px",
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
                  "& fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused": {
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)",
                  },
                }}
              >
                <MenuItem value="Sales">Sales</MenuItem>
                <MenuItem value="Accounts">Accounts</MenuItem>
                <MenuItem value="Legal">Legal</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Box display="flex" flexDirection="row">
            <Stack
              direction="row"
              spacing={2}
              sx={{ mb: 2, mr: 2 }}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Category
              </Typography>

              <FormControl sx={{ minWidth: 150 }}>
                <Select
                  labelId="application-select-label"
                  id="application-select"
                  defaultValue="AML KYC"
                  label="Application"
                  sx={{
                    bgcolor: "#f2f4f5",
                    height: "45px",
                    borderRadius: "5px",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
                    "& fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused": {
                      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)",
                    },
                  }}
                >
                  <MenuItem value="AML KYC">AML KYC</MenuItem>
                  <MenuItem value="Account">Transaction</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ mb: 2 }}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Sub Category
              </Typography>

              <FormControl sx={{ minWidth: 150 }}>
                <Select
                  labelId="application-select-label"
                  id="application-select"
                  defaultValue="ID Proof"
                  label="Application"
                  sx={{
                    bgcolor: "#f2f4f5",
                    height: "45px",
                    borderRadius: "5px",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
                    "& fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused": {
                      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)",
                    },
                  }}
                >
                  <MenuItem value="ID Proof">ID Proof</MenuItem>
                  <MenuItem value="Address Proof">Address Proof</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>

          {/* Scrollbar only inside this Card */}
          <Card
            sx={{
              height: "90vh", // Set this based on your design
              overflowY: "auto",
              p: 2,
            }}
          >
            <Typography variant="h6">Your content goes here</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </Typography>
            {[...Array(20)].map((_, i) => (
              <Typography key={i} paragraph>
                This is line {i + 1} of scrollable content.
              </Typography>
            ))}
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Archive1;
