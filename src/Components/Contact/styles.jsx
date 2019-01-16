const styles = theme => ({
    root: {
      flexGrow: 1,
      padding: 60,
      background: "rgb(238,174,202)",
      background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    },
    textField:{
      color: "green"
    },
    form:{
      opacity: .5, 
      padding: "1rem"
      
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
   
    },
  });

  export default styles