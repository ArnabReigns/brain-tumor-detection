import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";

const Signin = ({ switchToSignUp }) => {
  return (
    <Box
      component="form"
      sx={{
        backgroundColor: "#fff",
        borderRadius: "25px ",
        px: 4,
        pt: 4,
        pb: 6,
      }}
    >
      <TextField
        fullWidth
        label="Email"
        variant="standard"
        margin="normal"
        type="email"
      />
      <TextField
        fullWidth
        label="Password"
        variant="standard"
        margin="normal"
        type="password"
      />
      <Button
        fullWidth
        variant="contained"
        sx={{
          marginTop: 2,
          backgroundColor: " #FE5F78",
          boxShadow: 0,
          ":hover": { backgroundColor: "rgb(180, 70, 86)", boxShadow: 0 },
        }}
      >
        Sign In
      </Button>

      <Typography
        variant="body2"
        textAlign="center"
        marginTop={3}
        color="text.secondary"
      >
        Don’t have an account?{" "}
        <Link
          href="#"
          underline="none"
          sx={{ color: " #FE5F78", fontWeight: 600 }}
          onClick={switchToSignUp}
        >
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
};

export default Signin;
