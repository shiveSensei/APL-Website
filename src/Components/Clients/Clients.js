import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
//import css from '../Clients/client.css'
import client1 from '../../img/clients/apple.png'
import client2 from '../../img/clients/atom.png'
import client3 from '../../img/clients/firefox.png'
import client4 from '../../img/clients/dropbox.png'
import client5 from '../../img/clients/blackberry.png'
import client6 from '../../img/clients/mozilla.png'

import styles from '../Clients/styles'

const clients =[
    {"name": "Client 1", "image": client1},
    {"name": "Client 2", "image": client2},
    {"name": "Client 3", "image": client3},
    {"name": "Client 3", "image": client4},
    {"name": "Client 3", "image": client5},
    {"name": "Client 3", "image": client6},
]

function Clients(props) {
  const { classes } = props;
  //console.log(classes)
 
  return (
    <div className={classes.root}>
        <Typography variant="h6" gutterBottom>
            Our Clients
        </Typography>
        <hr className={classes.hr} />


        <Typography className={classes.paragraph} variant="h2" gutterBottom>
            <strong >All Points has been honored to partener up with these clients</strong>
        </Typography>
       
        <Grid container justify="center" spacing={24}>
            <Grid item>
                {clients.map(client =>
                    <img id={client.name}  className={classes.client} src ={client.image} />
                )}
            </Grid>
        </Grid>

    </div>
  );
}

Clients.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Clients);

/*
    <Grid item>
            <Typography variant="h4" gutterBottom>
            Client 1
            </Typography>
            <img className={classes.client} src={client1} />
          </Grid>

          <Grid item>
            <Typography variant="h4" gutterBottom>
            Client 2
            </Typography>
            <img className={classes.client} src={client1} />
          </Grid>

          <Grid item>
            <Typography variant="h4" gutterBottom>
            Client 3
            </Typography> 
            <img className={classes.client} src={client1} />
          </Grid>
          <Grid item>

            <Typography variant="h4" gutterBottom>
            Client 4
            </Typography>
            <img className={classes.client} src={client1} />
          </Grid>

*/