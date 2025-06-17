import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  Stack,
  IconButton,
  Pagination,
  PaginationItem,
  Tooltip,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import NavigateNext from "@mui/icons-material/NavigateNext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../Components/Layout/Header";
import { useState } from "react";

const roles = [
  {
    name: "Emily Johnson",
    mail: "emilyjohnson@gmail.com",
    role: "Admin",
    responsibility: "Manages all users, departments, and documents.",
  },
  {
    name: "Michael Carter",
    mail: "michaelcarter@gmail.com",
    role: "Chartered Accountant (CA)",
    responsibility:
      "Views and assigns parameters to Accounts-related documents.",
  },
  {
    name: "Daniel Lewis	",
    mail: "daniellewis@gmail.com",
    role: "Sales Manager",
    responsibility: "Views and assigns parameters to Sales-related documents.",
  },
  {
    name: "Sophia Martinez	",
    mail: "sophiamartinez@gmail.com",
    role: "HR",
    responsibility: "Views and assigns parameters to HR-related documents.",
  },
];

const User = () => {
  const navigate = useNavigate();
  const departments = [
    { label: "Sales", route: "/documents" },
    { label: "Accounts", route: "/invoiceDocument" },
    { label: "HR", route: "/hrDocument" },
    { label: "Legal" },
  ];
  const [searchInputs, setSearchInputs] = useState({
    name: "",
    mail: "",
    role: "",
  });
  const handleSearchInputChange = (field, value) => {
    setSearchInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <Header departments={departments} defValue={"Sales"} />

      <Box
        sx={{
          bgcolor: "#f2f4f5",
          display: "flex",
          justifyContent: "center",
          // width: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "#f2f4f5",
            minHeight: "90vh",
            width: "100%",
            py: 4,
            pl: "70px",
            pt: "20px",
            pr: "24px",
            boxSizing: "border-box",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Stack
            display="flex"
            direction="row"
            sx={{ mb: 2 }}
            justifyContent="space-between"
          >
            <Typography
              variant="h6"
              component="h1"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              User
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 1,
                bgcolor: "#99caff",
                width: "150px",
                color: "black",
                borderRadius: "10px",
                fontWeight: "bold",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  bgcolor: "#88b9ee",
                },
              }}
            >
              Create User
            </Button>
          </Stack>
          <TableContainer
            component={Paper}
            sx={{ mb: 2, borderRadius: "10px 10px 0 0", maxHeight: 450 }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#99caff" }}>
                  <TableCell>
                    <Stack direction="column">
                      <Typography fontWeight="bold">Name</Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.name}
                        onChange={(e) =>
                          handleSearchInputChange("name", e.target.value)
                        }
                        autoComplete="off"
                        sx={{
                          mt: 1,
                          width: "100px",
                        }}
                      />
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Stack direction="column">
                      <Typography fontWeight="bold">Mail</Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.mail}
                        onChange={(e) =>
                          handleSearchInputChange("mail", e.target.value)
                        }
                        autoComplete="off"
                        sx={{
                          mt: 1,
                          width: "100px",
                        }}
                      />
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Stack direction="column">
                      <Typography fontWeight="bold">Role</Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.role}
                        onChange={(e) =>
                          handleSearchInputChange("role", e.target.value)
                        }
                        autoComplete="off"
                        sx={{
                          mt: 1,
                          width: "100px",
                        }}
                      />
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="column" alignItems="center">
                      <Typography fontWeight="bold">Responsibility</Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        autoComplete="off"
                        sx={{
                          mt: 1,
                          width: "100px",
                          "& .MuiInput-underline:before": {
                            borderBottom: "none",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottom: "none",
                          },
                          "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                            {
                              borderBottom: "none",
                            },
                        }}
                      />
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Stack direction="column" alignItems="center">
                      <Typography fontWeight="bold">Action</Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        autoComplete="off"
                        sx={{
                          mt: 1,
                          width: "100px",
                          "& .MuiInput-underline:before": {
                            borderBottom: "none",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottom: "none",
                          },
                          "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                            {
                              borderBottom: "none",
                            },
                        }}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {roles
                  .filter((role) => {
                    const nameMatch = role.name
                      .toLowerCase()
                      .includes(searchInputs.name.toLowerCase());
                    const mailMatch = role.mail
                      .toLowerCase()
                      .includes(searchInputs.mail.toLowerCase());
                    const roleMatch = role.role
                      .toLowerCase()
                      .includes(searchInputs.role.toLowerCase());
                    return nameMatch && mailMatch && roleMatch;
                  })
                  .map((role, index) => (
                    <TableRow key={index} hover>
                      <TableCell>{role.name}</TableCell>
                      <TableCell>{role.mail}</TableCell>
                      <TableCell>{role.role}</TableCell>
                      <TableCell>{role.responsibility}</TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          <Tooltip title="Edit">
                            <IconButton color="primary">
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton color="error">
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Pagination
              count={10}
              shape="rounded"
              renderItem={(item) => {
                if (item.type === "previous") {
                  return (
                    <PaginationItem
                      component={IconButton}
                      sx={{
                        border: "1px solid #a7a6a6",

                        borderRadius: "5px",

                        bgcolor: "#f2f4f5",

                        mx: 0.5,
                      }}
                      {...item}
                      icon={<NavigateBefore fontSize="small" />}
                    />
                  );
                }

                if (item.type === "next") {
                  return (
                    <PaginationItem
                      component={IconButton}
                      sx={{
                        border: "1px solid #a7a6a6",

                        borderRadius: "5px",

                        bgcolor: "#f2f4f5",

                        mx: 0.5,
                      }}
                      {...item}
                      icon={<NavigateNext fontSize="small" />}
                    />
                  );
                }

                return (
                  <PaginationItem
                    {...item}
                    sx={{
                      border: "1px solid #a7a6a6",

                      borderRadius: "5px",

                      bgcolor: item.selected ? "#99caff" : "#f2f4f5",

                      mx: 0.5,

                      color: item.selected ? "black" : "#747474",
                    }}
                  />
                );
              }}
            />
            <Box>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  ml: 1,
                  border: "1px solid #a7a6a6",
                  borderRadius: "5px",
                  bgcolor: "#f2f4f5",
                  color: "#747474",
                  fontSize: "10px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                5 / Pages <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
              </Button>

              <Menu>
                <MenuItem>5/page</MenuItem>
                <MenuItem>10/page</MenuItem>
                <MenuItem>15/page</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default User;
