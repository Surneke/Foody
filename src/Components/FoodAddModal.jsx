import * as React from "react";
import {
  Stack,
  Grid,
  TextField,
  Divider,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Box,
  Button,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import {ChildModal } from "./AlertModal"
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ClearIcon from "@mui/icons-material/Clear";
import { FoodAddImg } from "../images/FoodAddImg";
import { useState } from "react";
import { Ingredients } from "./Ingredients";

export const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = useState("");
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: "100vh",
    overflow: "scroll",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const ingredients = [
    { name: "Сармис" },
    { name: "Дофү" },
    { name: "Гахайн мах" },
    { name: "Гочугару" },
    { name: "Хар перц" },
    { name: "Давс" },
  ];
  return (
    <div>
      <Button sx={{ marginTop: "20px" }} onClick={handleOpen}>
        <AddCircleIcon fontSize="large" />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Box sx={style}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="18px"
            >
              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleClose}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
              <Typography>Хоол нэмэх</Typography>
              <Button variant="contained" sx={{ color: "#fff" }}>
                Хадгалах
              </Button>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between" mt="80px">
              <Box>
                <FoodAddImg
                  //  color="#A0A2A8"
                  width="304"
                  height="260"
                  backgroundColor="#fff"
                />
              </Box>
              <Stack width="480px" mb={"48px"} gap="15px">
                <Typography>Хоолны нэр</Typography>
                <TextField fullWidth label="Энд бичнэ үү" />
                <Typography>Дэлгэрэнгүй</Typography>
                <TextField fullWidth label="Энд бичнэ үү" />
                <Box display="flex" gap={"10px"}>
                  <Stack>
                    <Typography>Хоолны үнэ</Typography>
                    <TextField label="₮ Энд бичнэ үү" />
                  </Stack>
                  <Stack>
                    <Typography>Төрөл</Typography>
                    <FormControl width="80px">
                      <InputLabel></InputLabel>
                      <Select
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Халуун ногоотой</MenuItem>
                        <MenuItem value={20}>Цагаан хоол</MenuItem>
                        <MenuItem value={30}>Дессерт</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Divider />
            <Box mt="42px" display="flex" justifyContent={"space-between"}>
              <Typography>Орц, найрлага</Typography>
              <ChildModal/>
            </Box>
            <Grid
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              marginBottom="48px"
            >
              {ingredients.map((el, idx) => (
                <Ingredients key={idx} name={el.name} />
              ))}
            </Grid>
            <Divider />
            <Box mt="15px">
              <Typography variant="h6">Тэжээллэг чанар</Typography>
              <Box
                height="200px"
                width="730px"
                border="1px dashed #DFE0EB"
                mt="15px"
              >
                <input type="file" />
              </Box>
              <Divider />
              <Box mt="15px">
                <Typography variant="h6">Хийх заавар</Typography>
                <Box
                  height="200px"
                  width="730px"
                  border="1px dashed #DFE0EB"
                  mt="15px"
                >
                  <input type="file" label="бичлэг оруулах" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
