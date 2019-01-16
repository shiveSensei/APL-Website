import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardHeader, CardMedia, CardContent, CardActions,Collapse, Avatar, IconButton, Typography, Grid } from '@material-ui/core';
import classnames from 'classnames';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//data import
import vehicles from '../Contracts/vehicles';
import styles from '../Contracts/styles'

// const styles = theme => ({ 
//   container:{
//     padding: 30

//   },
//   card: {
//     maxWidth: 400,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//     backgroundSize: 'contain'
//   },
//   actions: {
//     display: 'flex',
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// });

class Contracts extends React.Component {
  state = { 
    expanded0: false,
    expanded1: false,
    expanded2: false,
    expanded3: false

   };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleChange = key => {
    console.log(key)
    const currentState = this.state[key]
    console.log(currentState)

     this.setState({
       [key]: !currentState,
     });
   console.log(this.state.expanded0)
  };

  render() {
    const { classes } = this.props;
    const veh = vehicles.Vehicles

    return (
      <Grid className={classes.container} container justify="center" spacing={32}>
        <Grid item xs={12}>
          <Typography className={classes.type} variant="display1" color="secondary" gutterBottom>Contract Vehicles</Typography>
        </Grid>
       {veh.map((vehicle, key) =>

          <Grid item>
              <Card key={vehicle.id} className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  IDK
                </Avatar>
              }
            
              title={vehicle.name}
              subheader={vehicle.subheader}
            />
            <CardMedia
              className={classes.media}
              image={vehicle.logo}
              title="Paella dish"
            />
            <CardContent>
              <Typography component="p">
                Click the pull down to learn more...
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
              <IconButton
                value={false}
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state["expanded"+key],
                })}
                onClick={() => this.handleChange("expanded"+key)}
                aria-expanded={this.state[key]}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state["expanded"+key]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{vehicle.scope}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        )}
      </Grid>
    
    );
  }
}

Contracts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contracts);