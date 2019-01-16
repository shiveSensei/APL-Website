const styles = theme => ({
    root: {
      flexGrow: 1,
      padding: 60,
      backgroundColor:'#398eb5',
    },
   
    grow: {
      flexGrow: 1,
    },
    paragraph: {
        margin: "50px",
        [theme.breakpoints.down("xs")]:{
            margin:"0"
        },
        [theme.breakpoints.up("sm")]:{
            margin:"20"
        },
        [theme.breakpoints.up("lg")]:{
          //padding:"24rem 0rem 0rem 10rem"
        },
        
    },
    client: {
        width: 205,
        opacity: .55,
        // -webkit-transition: opacity 0.5s ease-in-out,
        transition: "opacity 0.5s ease-in-out",
        [theme.breakpoints.down("xs")]:{
            width:"105px"
        },
        [theme.breakpoints.up("sm")]:{
            //witdh:""
        },
        
    },
    // client:hover: {
    //     opacity: 1,
        
    
    // },
    hr: {
        width: "px",
        borderTop: "1px solid red",
    
    }
    
  });

export default styles
