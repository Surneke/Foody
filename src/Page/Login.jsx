import * as React from "react";
import {
  Box,
  TextField,
  Container,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Konoha } from "../images/Konoha";
import { KonohaUp } from "../images/KonohaUp";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../FirebaseForThisProject/Firebase";

export const Login = () => {
  const [email, setEmail] = React.useState();
  const actionCodeSettings = {
    url: "https://foody-5ec4a.web.app/",
    handleCodeInApp: true,
  };
  const sentMessage = () => {
    console.log(email);
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        console.log("amjilttai");
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <Grid
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Typography color="#474B5A" variant="h4">
        Нэвтрэх
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap="15px"
        width="400px"
        mt="30px"
      >
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="ИМэйл"
          fullWidth
        />
        <TextField label="Нууц үг" fullWidth />
        <Button
          onClick={() => sentMessage()}
          variant="contained"
          sx={{ color: "#fff" }}
        >
          Баталгаажуулах
        </Button>
      </Box>
    </Grid>
  );
};
