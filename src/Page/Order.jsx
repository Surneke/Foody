import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import { OrderBox } from "../Components/OrderBox";
import { data } from "../data";
export const Order = () => {
  const { packing, delivery, mistaken } = useContext(OrderContext);
  const statusArray = [
    { status: "Захиалсан", bgColor: "#F5F5F7", orderArr: data },
    { status: "Хүргэгдсэн", bgColor: "#FAFFF5", orderArr: delivery },
    { status: "Савлагдсан", bgColor: "#FFF9F1", orderArr: packing },
    { status: "Алдаатай", bgColor: "#FAFFF5", orderArr: mistaken },
  ];
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
      {statusArray.map((status, index) => (
        <Box key={index}>
          <Typography>{status.status}</Typography>
          <Grid item display="flex">
            {orderContainer.map((el, idx) => (
              <Grid container key={idx}>
                <Grid item>
                  <OrderBox
                    name={el.name}
                    status={status.status}
                    index={index}
                    orders={status.orderArr}
                    background={status.bgColor}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Grid>
  );
};
