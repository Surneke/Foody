import { useState, useContext, useEffect, useCallback } from "react";
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
  const { setPacking, setDelivery, setMistaken, myData, setMyData } =
    useContext(OrderContext);
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
  const defaultAll = useCallback(
    () => myData.find((el) => el.status !== dataa.status),
    [dataa.status, myData]
  );

  const packaged = useCallback(() => {
    const packagedArr = myData
      .filter((el) => {
        return el.orderID === accordionID;
      })
      .map((el) => {
        return { ...el, status: status };
      });
    setPacking((pre) => [...pre, packagedArr].flat());
  }, [accordionID, myData, setPacking, status]);

  const delivered = useCallback(() => {
    const deliveredArr = myData
      .filter((el) => {
        return el.orderID === accordionID;
      })
      .map((el) => {
        return { ...el, status: status };
      });
    setDelivery((pre) => [...pre, deliveredArr].flat());
  }, [accordionID, myData, setDelivery, status]);

  const misTaken = useCallback(() => {
    const mistakenArr = myData
      .filter((el) => {
        return el.orderID === accordionID;
      })
      .map((el) => {
        return { ...el, status: status };
      });
    setMistaken((pre) => [...pre, mistakenArr].flat());
  }, [accordionID, myData, setMistaken, status]);

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
  }, [defaultAll, delivered, misTaken, packaged, status]);
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
            <ListItemText>
              <Typography variant="body2">
                - {dataa.food[0].productName}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText>
              <Typography variant="body2">
                - {dataa.food[1].productName}
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
        <List
          disablePadding
          sx={{
            borderTop: "1px dashed #DFE0EB",
          }}
        >
          <ListItem
            disablePadding
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ListItemIcon>
              <RoomIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">{dataa.address}</Typography>
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <PhoneIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">{dataa.phonenumber}</Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Box>
          <FormControl
            sx={{
              m: 1,
              minWidth: 70,
              border: 0,
              display: "flex",
              textAlign: "center",
            }}
            size="small"
          >
            <InputLabel sx={{color:"#fff"}}>{status === "" ? "Төлөв" : ""}</InputLabel>
            <Select
              value={status}
              onChange={handleChange}
              sx={{
                color: "white",
                width: "125px",
                backgroundColor: "#589D0D",
                borderRadius: "50px",
                alignItems: "center",
                "&:MuiSvgIcon": {
                  color: "white",
                },
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
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
