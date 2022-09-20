import {Box, Typography, Grid} from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Accord } from './Accordion';

export const OrderBox = ({background,name}) => {
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
                <Typography>{name}</Typography>
                <Box 
                    display="flex"
                    alignItems="center"
                >
                    <WidgetsIcon color='info'/>
                    
                </Box>
            </Box>
            <Box 
                border="1px solid #DFE0EB"
                height="540px"
                display="flex"
                alignItems="center"
                flexDirection="column"
                overflow= "scroll"             
                bgcolor={background}
            >
                <Accord/>
                <Accord/>
            </Box>
        </Grid>
    )
}