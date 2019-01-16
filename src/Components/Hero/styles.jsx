const styles = theme => ({
    root:{
      backgroundImage: `url('../../img/home/hero.jpg')`,
      flexGrow: 1,
      backgroundSize: 'cover',
      minHeight: '100vh'
    },
    logos:{
      height: "100px",
      zIndex: 999999
    },
    gridItem:{
      fload: 'left',
      padding:"24rem 0rem 0rem 10rem",
      [theme.breakpoints.down("sm")]:{
          padding:"5rem 1rem 0 1rem"
      },
      [theme.breakpoints.up("md")]:{
        padding:"12rem 0rem 0rem 5rem"
      },
      [theme.breakpoints.up("lg")]:{
        padding:"24rem 0rem 0rem 10rem"
      },
    },
    overlay:{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100% !important',
      opacity: .6,
      backgroundColor: '#000000'
  
    },
    homeContent:{
      width: 100,
      height: 100,
      maxHeight: 'inherit',
      verticalAlign: 'middle',
      //padding: 0rem 0rem 0rem 0rem,
      position: 'relative',
      overflow: 'hidden'
    }
  
  });

  export default styles