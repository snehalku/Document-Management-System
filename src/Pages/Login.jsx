import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  Button,
  Box,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    setError("");
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 400,
          p: 3,
          borderRadius: 3,
          boxShadow: 5,
          bgcolor: "#ffffff",
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" textAlign="center" fontWeight="bold">
              {step === 1 ? "Login" : "OTP Verification"}
            </Typography>
          }
        />
        <CardContent>
          <Box
            component="form"
            onSubmit={step === 1 ? handleLogin : handleOtpVerification}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {step === 1 ? (
              <>
                <TextField
                  label="Email"
                  type="email"
                  required
                  fullWidth
                  placeholder="sarahjohnson@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
                <TextField
                  label="Password"
                  type="password"
                  required
                  fullWidth
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
              </>
            ) : (
              <TextField
                label="OTP"
                type="text"
                required
                fullWidth
                placeholder="1234"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                autoComplete="off"
              />
            )}

            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#99CAFF",
                color: "#000",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#80BFFF",
                },
              }}
            >
              {step === 1 ? "Login" : "Verify OTP"}
            </Button>
          </Box>
        </CardContent>

        {step === 1 && (
          <CardActions sx={{ justifyContent: "center" }}>
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link
                component="button"
                underline="hover"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </Link>
            </Typography>
          </CardActions>
        )}
      </Card>
    </Box>
  );
};

export default Login;
