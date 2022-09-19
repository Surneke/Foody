import {Box, Typography, Grid} from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets';
// import { Accordion } from './Accordion';

export const OrderBox = ({name,count,color,acc}) => {
    return (
        <Grid item width="300px">
            <Box 
                display="flex" 
                alignItems="center" 
                justifyContent="space-between"
                border="1px solid #DFE0EB"
                backgroundColor="#fff"
            >
                <Typography>{name}</Typography>
                <Box>
                    <WidgetsIcon color='info'/>
                    {count}
                </Box>
            </Box>
            <Box 
                sx={{background:{color}}}
                border="1px solid #DFE0EB"
                height="540px"
            >
                 hhh
            </Box>
        </Grid>
    )
}