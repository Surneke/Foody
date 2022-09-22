import { Box, Grid, Typography } from "@mui/material";
import { OrderBox } from "../Components/OrderBox";

export const Order = () => {
  const statusArray = [
    { status: "Захиалсан", bgColor: "#F5F5F7" },
    { status: "Хүргэгдсэн", bgColor: "#FAFFF5" },
    { status: "Савлагдсан", bgColor: "#FFF9F1" },
    { status: "Алдаатай", bgColor: "#FAFFF5" },
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
          <Grid item display="flex" >
            {orderContainer.map((el, idx) => (
              <Grid key={idx}>
                <OrderBox
                  name={el.name}
                  status={status.status}
                  index={index}
                  background={status.bgColor}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Grid>
  );
};
