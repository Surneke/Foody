import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from "react";
import {KonohaUp} from "../images/KonohaUp"
import { MenuContext } from "../Context/MenuContext";

export const Ingredients = ({ name, img, idx }) => {
   const deleteIng = (idx) => {
    console.log(idx)
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
         onChange={deleteIng}
       >
        <RemoveIcon color="error"/>
      </Button>
      </Box>
    </Grid>
  );
};
