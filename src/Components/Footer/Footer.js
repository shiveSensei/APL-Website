import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, TextField } from '@material-ui/core';

import styles from '../Footer/styles'

class Footer extends React.Component{
  constructor(){
    super()
    this.state ={
      email:''
    }
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault();
   const {email} = this.state
   console.log(email)
    //check if all fields are populated

    //submit to endpoint

  }
  render (){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
          <Grid container justify="center" spacing={12}>
          
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle" gutterBottom className={classes.paragraph}>
             All Points Logo and terms and conditions. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
              </Typography>
  
            </Grid>
                      
            <Grid item xs={12} md={6}>
              <Typography color="secondary" variant="subtitle" gutterBottom>
              Get Notified
              </Typography>
              <Typography variant="subtitle" gutterBottom className={classes.paragraph}>
              Want to stay updated with all things All Points? Enter your email  below to sign up for our weekly newsletter. We promise not to spam you.
              </Typography>

              <form onSubmit={this.handleSubmit}>
              <TextField
              name="email"
              variant="outlined"
              label="Email"
              onChange={this.handleChange}
              />
              <Button variant="contained" size="large" type="submit">Subscribe</Button>
              </form>
            </Grid>
  
  
            <Grid item xs={12} md={12}>
              <Typography variant="subtitle" >
              © Copyright All Points, LLC 2018 | <Button>User Portal</Button>
              </Typography>
  
            </Grid>
  
          </Grid>
      </div>
    );


  }
 
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);