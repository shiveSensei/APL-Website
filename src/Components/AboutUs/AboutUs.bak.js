import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
//import css
import styles from './styles'

function AboutUs(props) {
  const { classes, theme } = props;
  return (
    <div className={classes.root}>
    <div class="slide">
    <Typography variant="h6" gutterBottom>
        Hello There
      </Typography>
    </div>
      
      <Typography color="textSecondary" variant="h1" gutterBottom>
        We Are All Points
      </Typography>
      <Divider inset />

      <Typography className={classes.paragraph} variant="headline" align="center">
        a dynamic, award winning, Service Disabled Veteran Owned Small Business ( SDVOSB ) with the experience and demonstrated performance to provide low risk, competitively priced services, encompassing capabilities in Program Management, Engineering, Information Technology, Logistics and IT solution development and product delivery for a diverse set of Federal Government, civilian and DoD agencies.     
      </Typography>

            
        <Grid container justify="center" spacing={theme.spacing.unit}>
        
          <Grid item className={classes.stats}>
            <Typography variant="h4" gutterBottom>
            127
            </Typography>

            <Typography variant="h4" gutterBottom>
            <strong>Awards Received</strong>
            </Typography>

          </Grid>
          <Grid item className={classes.stats}>
            <Typography variant="h4" gutterBottom>
            1505
            </Typography>

            <Typography variant="h4" gutterBottom>
            <strong>Cups of Coffee</strong>
            </Typography>
          </Grid>
          <Grid item className={classes.stats}>
            <Typography variant="h4" gutterBottom>
            109
            </Typography>

            <Typography variant="h4" gutterBottom>
              <strong>Projects Completed</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" gutterBottom>
            102
            </Typography>

            <Typography variant="h4" gutterBottom>
            <strong>Happy Clients</strong>
            </Typography>
          </Grid>
        </Grid>

    </div>
  );
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AboutUs);