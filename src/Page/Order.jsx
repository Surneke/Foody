import { Box, Container, Grid,Typography } from "@mui/material";
import { Accordion } from "../Components/Accordion";
import { OrderBox } from "../Components/OrderBox";
import { Accord } from "../Components/Accordion";
import { OrderContext } from "../Context/OrderContext";
import { useContext } from "react";

export const Order = () => {
  const data = useContext(OrderContext)
  console.log(data);
  const orderContainer = [
    { name: "Даваа" },
    { name: "Мягмар" },
    { name: "Лхагва" },
    { name: "Пүрэв" },
    { name: "Баасан" },
    { name: "Бямба" },
    { name: "Ням" },
  ];
  return (
    <Grid
      width="fitcontent"
      flexDirection="column"
      marginLeft="300px"
      container
    >
      <Grid item display="flex">
        {orderContainer.map((el, idx) => (
          <Grid key={idx}>
            <OrderBox name={el.name} background={"#f5f5f7"}/>
            <OrderBox background={"#FFF9F1"}/>
            <OrderBox background={"#FAFFF5;"}/> 
            <OrderBox background={"#FAFFF5"}/> 
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
