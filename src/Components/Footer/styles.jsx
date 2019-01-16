
const styles = theme =>({
    root: {
      flexGrow: 1,
      padding: 60,
    },
    grow: {
      flexGrow: 1,
    },
    paragraph: {
      paddingLeft: 100,
      paddingRight: 100,
      paddingBottom:50,
      [theme.breakpoints.down("xs")]:{
        padding:"0 0 0 0"
    },
    [theme.breakpoints.up("sm")]:{
        padding:"0 0 0 0"
    },
    [theme.breakpoints.up("lg")]:{
      //padding:"24rem 0rem 0rem 10rem"
    },
    },
  });

  export default styles