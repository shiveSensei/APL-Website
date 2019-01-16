import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import css from '../Hero/Hero.css'
import { Typography, Grid, Button, withStyles } from '@material-ui/core';
import APL from '../../img/Logos/APL.png';
import AS from '../../img/Logos/AS.PNG';
import SD from '../../img/Logos/SDVOSB.PNG';

import CMMI from '../../img/Logos/CMMI2.png'


import styles from '../Hero/styles'

function Hero(props) {
  const {classes } = props;
  console.log(classes)

  return (
          <Grid container className={classes.root} spacing={0} >
             <img className={classes.logos} src ={APL} />
              <img className={classes.logos} src ={SD} />
              <img className={classes.logos} src ={CMMI} />
              <img className={classes.logos} src ={AS} />


           <div className={classes.overlay}></div>
          
            <Grid item class={`${classes.gridItem} slide` } xs={6} >
              <Typography variant="display1" color="secondary" align="left">Welcome to All Points</Typography>

              <Typography color="textSecondary" variant="h1" align="left" gutterBottom >
                <strong>
                  We are a dynamic, award winning <br/>
                  group integrating Personnel <br/>
                  Technology, and Services <br/>
                  to Exceed Customer Expectations.
                </strong>
              </Typography> 

            </Grid>

           
              <div class="home-content-line"></div>
          </Grid>
        
   
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);