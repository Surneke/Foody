import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

export const Ingredients = ({ name, img }) => {
  return (
    <Grid>
     <Box>
        <Box display="flex">
          <img alt="logo" src={img}/>
        </Box>
        <Typography>{name}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
       <TextField label="Грамм" />
       <Button><RemoveIcon/></Button>
      </Box>
    </Grid>
  );
};
