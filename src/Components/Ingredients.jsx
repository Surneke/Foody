import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import {KonohaUp} from "../images/KonohaUp"

export const Ingredients = ({ name, img }) => {
  const style = {
      borderRadius:"100%",
      color:"error",
      height:"32px",
      maxWidth:"12px", 
      backgroundColor:"#fdd9e5",
    }
  
  return (
    <Grid>
     <Box>
        <Box 
          display="flex"
          alignItems="center"
        >
          <KonohaUp/>
        <Typography>{name}</Typography>
        </Box>
      </Box>
      <Box 
        display="flex" 
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
      >
       <TextField label="Грамм" />

       <Button 
         color="error"
         sx={{minWidth: "12px"}}
       >
        <RemoveIcon color="error"/>
      </Button>

      </Box>
    </Grid>
  );
};
