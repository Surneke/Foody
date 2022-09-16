import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    shape: {
        borderRadius: 20
    },
    shadows: {
        borderShadow: "none"
    },
    palette: {
        primary: {
            main:'#66B60F'
        },
        secondary: {
            main: '#73bcec'
        },
        success:{
            main: '#000723'
        },
        background: {
            default: ' #f5f5f7',

        },
        text: {
            primary: '#383838',
        },
        red: {
            main: "#ff0000",
        }
    },
});
