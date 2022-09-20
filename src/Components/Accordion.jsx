import { useState } from "react";
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
  Box
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";

export const Accord = () => {
  const [status, setStatus] = useState("");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <Accordion
      sx={{
        "&:before": {
          display: "none",
        },
        width: "250px",
        marginTop: "30px",
        border: "1px solid #f5f5f7",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{
          border: "0.5px solid #f5f5f7",
        }}
      >
        <Typography>#655656 ugluu</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Trash" />
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
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <PhoneIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </List>
        <Box
        >
          <FormControl sx={{ m: 1, minWidth: 70}} size="small">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={status}
              label="Захиалсан"
              onChange={handleChange}
              sx={{
                height: "30px",
                color: "white",
                backgroundColor: "#589D0D",
                borderRadius: "50px",
                alignItems: "center",
                border:"none",
              }}
            >
              <MenuItem value={10}>Савалсан</MenuItem>
              <MenuItem value={20}>Хүргэсэн</MenuItem>
              <MenuItem value={30}>Алдаатай</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
