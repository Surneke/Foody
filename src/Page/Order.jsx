import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import { OrderBox } from "../Components/OrderBox";

export const Order = () => {
  const { packing, delivery, mistaken, myData } = useContext(OrderContext);
  const statusArray = [
    { status: "Захиалсан", bgColor: "#F5F5F7", orderArr: myData },
    { status: "Савлагдсан", bgColor: "#FFF9F1", orderArr: packing },
    { status: "Хүргэгдсэн", bgColor: "#FAFFF5", orderArr: delivery },
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
      mt="-48px"
    >
      {statusArray.map((status, index) => (
        <Box key={index}>
          <Box item display="flex">
            {orderContainer.map((el, idx) => (
              <Box key={idx}>
                <Box item>
                  <OrderBox
                    name={el.name}
                    idx={idx}
                    status={status.status}
                    index={index}
                    orders={status.orderArr}
                    background={status.bgColor}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Grid>
  );
};
