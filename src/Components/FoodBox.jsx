import { Box, Button, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {FoodAddImg} from "../images/FoodAddImg"

export const FoodBox = ({img,name,portion,price}) => {
    return (
        <Box 
            height="230px" 
            width="200px" 
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            sx={{
                border:"0.5px solid #ddd", 
                background:"#fff",
                borderRadius:'20px'
            }}>
            <Box position="absolute" sx={{top:"-40px"}}>
                <FoodAddImg/>
            </Box>
           <Typography>{name}</Typography>
           <Typography>{portion}</Typography>
           <Box>
               <Typography>{price}</Typography>
               <Button><AddCircleIcon/></Button>
           </Box>
        </Box>
    )
}