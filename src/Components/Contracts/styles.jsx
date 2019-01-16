const styles = theme => ({
    container:{
      padding: 30
  
    },
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      backgroundSize: 'contain'
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: '#000000',
    },
  });

  export default styles