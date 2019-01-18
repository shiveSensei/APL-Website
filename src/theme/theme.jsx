import {createMuiTheme} from '@material-ui/core'
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({})
const theme = createMuiTheme({
    breakpoints,
    palette:{
        primary: {
            main:'#224B73', //allpoints blue
        },
        text: {
            primary: "#224B73",
            secondary: "white"
        }
    },
    overrides: {
        MuiTypography: {
            h1:{
                fontSize:"5rem",
               [breakpoints.down("xs")]:{
                   fontSize:"3rem"
               },
               [breakpoints.down("sm")]:{
                   fontSize:"3rem"

               }
            },
            h2:{
                [breakpoints.down("xs")]:{
                    fontSize:"2rem"
                }
             },
             h3:{
                 [breakpoints.down("xs")]:{
                     fontSize:"1.75rem"
                 }

             },
             h4:{
                 [breakpoints.down("xs")]:{
                     fontSize:"1rem"
                 }
             },

          subheading: { //changes the color of the nav text
            
          },
          body2: { //this color changes the color of the inner tabs in capabilities
            
          }
        },
        MuiFormLabel:{
            color: "#224B73"

        }
    }
   
})

export default theme