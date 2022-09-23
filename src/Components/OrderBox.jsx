import { Box, Typography, Grid } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useEffect } from "react";
import { Accord } from "./Accordion";
import { useState } from "react";
export const OrderBox = ({ background, name, index, status, orders, idx }) => {
  const [expanded, setExpanded] = useState(false);
  const [goyArray, setGoyArray] = useState([]);

  const handleExpand = (foodID) => (e, isExpanded) => {
    setExpanded(isExpanded ? foodID : false);
  };

  const filterData = (status, weekday) => {
    const fData = orders.filter((el) => {
      return el.status === status && el.date === weekday;
    });
    setGoyArray(fData);
  };
  // console.log(goyArray);
  useEffect(() => {
    filterData(status, name);
    return;
  });

  return (
    <Grid item width="300px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        border="1px solid #DFE0EB"
        backgroundColor="#fff"
        height="50px"
      >
        <Typography>{index === 0 ? name : ""}</Typography>
        {index === 0 ? "" : <Typography>{idx === 0 ? status : ""}</Typography>}
        <Box display="flex" alignItems="center">
          <WidgetsIcon color="info" />
        </Box>
      </Box>
      <Box
        border="1px solid #DFE0EB"
        height="540px"
        display="flex"
        alignItems="center"
        flexDirection="column"
        overflow="scroll"
        bgcolor={background}
      >
        {goyArray.map((el, id) => {
          return (
            <Accord
              key={id}
              dataa={el}
              expanded={expanded}
              handleExpand={handleExpand}
            />
          );
        })}
      </Box>
    </Grid>
  );
};
