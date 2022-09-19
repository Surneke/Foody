import { Box, Container, Grid } from "@mui/material";
import { Accordion } from "../Components/Accordion";
import { OrderBox } from "../Components/OrderBox";
import { Accord } from "../Components/Accordion";
export const Order = () => {
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
        {orderContainer.map((el) => (
          <Grid>
            <OrderBox name={el.name}> 
			  jrehjre
			</OrderBox>
            <OrderBox />
            <OrderBox />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
