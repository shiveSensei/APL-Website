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
      marginLeft: theme.spacing.unit *10,
      marginRight: theme.spacing.unit *10,
      paddingBottom:theme.spacing.unit *10,
      [theme.breakpoints.down("xs")]:{
        margin:"0 0 0 0"
    },
    [theme.breakpoints.up("sm")]:{
        margin:"0 0 0 0"
    },
    [theme.breakpoints.up("lg")]:{
      //padding:"24rem 0rem 0rem 10rem"
    },
    },
    stats: {
      borderRight: "3px solid",
      [theme.breakpoints.down("xs")]:{
        padding:"0 0 0 0",
        //borderRight: "none",
        borderRight: "1px solid"
    },
    [theme.breakpoints.up("sm")]:{
      padding:"0 0 0 0",
      borderRight: "3px solid"

    },
    [theme.breakpoints.up("lg")]:{
      //padding:"24rem 0rem 0rem 10rem"
    },
    }
  });

  export default styles