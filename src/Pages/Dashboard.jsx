import Add from "@mui/icons-material/Add";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

import Delete from "@mui/icons-material/Delete";
import { useState } from "react";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavigateNext from "@mui/icons-material/NavigateNext";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Tooltip } from "@mui/material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import pump_report from "../assets/pump_report.pdf";

const projectData = [
  {
    id: "P001",

    name: "USB SCHOOL OF BIOMEDICAL\nENGINEERING",

    equipment: "Pump",

    tooltip: "Click to view project details",
  },

  {
    id: "P002",

    name: "BOILER FEED PUMP",

    equipment: "Fan",

    tooltip: "Click to view project details",
  },
];

const Documents = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [projectName, setProjectName] = useState(
    "USB SCHOOL OF BIOMEDICAL ENGINEERING"
  );
  const [equipmentName, setEquipmentName] = useState("Pump");

  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "#f2f4f5",
          minHeight: "88vh",
          width: "100vw",
          py: 4,
          pl: "70px",
          pt: "12px",
          pr: "24px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Reports
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 3 }}
          justifyContent="space-between"
        >
          <TextField
            placeholder="Search by Project Id, Project Name & Equipment Name..."
            variant="outlined"
            sx={{
              width: "50%",
              bgcolor: "#fff",
              height: "50px",
              borderRadius: "10px",

              "& .MuiOutlinedInput-root": {
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                "& fieldset": {
                  border: "none",
                },
                "&.Mui-focused": {
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                },
              },
            }}
          />
        </Stack>

        <TableContainer
          component={Paper}
          sx={{ mb: 4, borderRadius: "10px 10px 0 0" }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#99caff" }}>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontWeight="bold">Project Id</Typography>
                    <ArrowDropDown />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontWeight="bold">Project Name</Typography>
                    <ArrowDropDown />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontWeight="bold">Equipment Name</Typography>
                    <ArrowDropDown />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Action</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projectData.map((project) => (
                <TableRow key={project.id} hover>
                  <TableCell>
                    <Typography fontWeight="bold">{project.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight="medium">{project.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={project.equipment}
                      size="small"
                      onChange={(e) => {
                        // handle change if needed
                        console.log(
                          `New equipment for ${project.id}:`,
                          e.target.value
                        );
                      }}
                      displayEmpty
                      variant="outlined"
                      sx={{ width: "150px", bgcolor: "#fff" }}
                    >
                      <MenuItem value="Pump">Pump</MenuItem>
                      <MenuItem value="Fan">Fan</MenuItem>
                      {/* <MenuItem value="Compressor">Compressor</MenuItem> */}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Tooltip title="View Report">
                        <IconButton
                          variant="contained"
                          onClick={() => {
                            window.open(pump_report, "_blank");
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Download Report">
                        {/* <a
                          href={pump_report}
                          download="pump_report"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <IconButton size="small" color="secondary">
                            <FileDownloadIcon />
                          </IconButton>
                        </a> */}
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Documents;
