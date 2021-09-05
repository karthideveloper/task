
import { createTheme } from '@material-ui/core/styles';
const font =  "'ProductSans-Bold', Product Sans";

const primary = "#009688";

const theme = createTheme({
  
  typography: {
    fontFamily: font, 
  },
  palette: {
    primary: 
    {    
        main: primary,        
    },
  },

});
  
export {theme}