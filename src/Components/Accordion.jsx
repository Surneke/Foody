import { useState, useContext, useEffect } from "react";
import { OrderContext } from "../Context/OrderContext";
import {
  AccordionSummary,
  Typography,
  AccordionDetails,
  Accordion,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  MenuItem,
  Select,
  FormControl,
  Box,
  InputLabel,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";

export const Accord = ({ dataa, expanded, handleExpand }) => {
  const {
    order,
    setOrder,
    packing,
    delivery,
    mistaken,
    setPacking,
    setDelivery,
    setMistaken,
    data,
  } = useContext(OrderContext);
  const [status, setStatus] = useState("");
  const [accordionID, setAccordionID] = useState("");

  const statusOptions = [
    { status: "Савлагдсан" },
    { status: "Хүргэгдсэн" },
    { status: "Алдаатай" },
  ];
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const defaultAll = () => data.find((el) => el.status === dataa.status);

  const packaged = () => {
    const packagedArr = data
      .filter((el) => {
        return el.orderID === accordionID;
      })
      .map((el) => {
        return { ...el, status: status };
      });
    setPacking((pre) => [...pre, packagedArr].flat());
  };

  const delivered = () => {
    const deliveredArr = data
      .filter((el) => {
        return el.orderID === accordionID;
      })
      .map((el) => {
        return { ...el, status: status };
      });
    setDelivery((pre) => [...pre, deliveredArr].flat());
  };

  const misTaken = () => {
    const mistakenArr = data
      .filter((el) => {
        return el.orderID === accordionID;
      })
      .map((el) => {
        return { ...el, status: status };
      });
    setMistaken((pre) => [...pre, mistakenArr].flat());
  };

  useEffect(() => {
    const statusFunction = () => {
      switch (status) {
        case "Савлагдсан":
          return packaged();
        case "Хүргэгдсэн":
          return delivered();
        case "Алдаатай":
          return misTaken();
        default:
          return defaultAll();
      }
    };
    statusFunction();
  }, [status]);
  const getID = (e) => {
    setAccordionID(dataa.orderID);
  };
  return (
    <Accordion
      onClick={getID}
      expanded={expanded === dataa.orderID}
      onChange={handleExpand(dataa.orderID)}
      sx={{
        "&:before": {
          display: "none",
        },
        width: "250px",
        marginTop: "20px",
        border: "1px solid #f5f5f7",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{
          border: "0.5px solid #f5f5f7",
        }}
      >
        <Box display="flex" gap="15px">
          <Typography>{dataa.orderID}</Typography>
          <Typography sx={{ color: "#A0A2A8" }}>{dataa.date} </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemText primary={dataa.food.productName} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={dataa.productName} />
          </ListItem>
        </List>
        <List
          disablePadding
          sx={{
            borderTop: "1px dashed #DFE0EB",
          }}
        >
          <ListItem disablePadding>
            <ListItemIcon>
              <RoomIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={dataa.address} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <PhoneIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={dataa.phonenumber} />
          </ListItem>
        </List>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 70, border: "none" }} size="small">
            <InputLabel>Төлөв</InputLabel>
            <Select
              value={status}
              onChange={handleChange}
              sx={{
                height: "30px",
                color: "white",
                width: "125px",
                backgroundColor: "#589D0D",
                borderRadius: "50px",
                alignItems: "center",
                border: "none",
                "&:MuiSvgIcon": {
                  color: "white",
                },
              }}
            >
              {statusOptions.map((el, id) => (
                <MenuItem key={id} value={el.status}>
                  {el.status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
