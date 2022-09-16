import * as React from "react";
import { Stack,Grid, TextField,Divider, MenuItem, InputLabel, FormControl,Select, Box,Button,Typography,Modal,IconButton} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from '@mui/icons-material/Add';
import { FoodAddImg } from "../images/FoodAddImg";
import { useState } from "react";
import {Ingredients} from "./Ingredients"
export const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  const ingredients = [
    {name:'Сармис', img: ""},
    {name:'Дофү', img: ""},
    {name:'Гахайн мах', img: ""},
    {name:'Гочугару', img: ""},
    {name:'Хар перц', img: ""},
    {name:'Давс', img: ""},
  ]
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
          <Box
            sx={style}
          >
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
              <Stack width="480px" mb={'48px'} gap="15px">
                <Typography>Хоолны нэр</Typography>
                <TextField fullWidth label="Энд бичнэ үү" />
                <Typography>Дэлгэрэнгүй</Typography>
                <TextField fullWidth label="Энд бичнэ үү" />
                <Box display="flex" gap={'10px'}>
                  <Stack>
                    <Typography>Хоолны үнэ</Typography>
                    <TextField label="₮ Энд бичнэ үү" />
                  </Stack>
                  <Stack>
                    <Typography>Төрөл</Typography>
                    <FormControl width="80px">
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Divider/>
            <Box mt="42px" display='flex' justifyContent={'space-between'}>
                <Typography>Орц, найрлага</Typography>
                <Button><AddIcon/>Орц нэмэх</Button>
            </Box>
            <Grid>
              {ingredients.map((el) => <Ingredients/> )}
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
