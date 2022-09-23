import { Box, Grid,Typography, Button} from "@mui/material";
import { Container } from "@mui/system";
import { useContext, useState } from "react";
import { BasicModal } from "../Components/FoodAddModal";
import { MenuContext } from "../Context/MenuContext";
import {FoodAddImg} from "../images/FoodAddImg"

export const Menu = () => { 
    const {addIngredients,setAddIngredients,addFood,setAddFood} = useContext(MenuContext)

    return (
        <Container>
             <Box 
                height="230px" 
                width="200px" 
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                position="relative"
                marginLeft="250px"
                sx={{
                    border:"0.5px solid #ddd", 
                    background:"#fff",
                    borderRadius:'20px'
                }}>
            <Box position="absolute" sx={{top:"-40px"}}>
                <FoodAddImg/>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                mt="50px"
            />    
                <Typography variant="h6" sx={{color:"#000" }}>Шинэ хоол</Typography>
                <Typography variant="h6" sx={{color:"#000"}}>нэмэх</Typography>
                <BasicModal/>
            </Box>
        </Container>
    )
}