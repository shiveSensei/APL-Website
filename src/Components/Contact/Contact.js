import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, TextField, Paper } from '@material-ui/core';
import styles from '../Contact/styles'
 

const contacts =[
  // {"name": "vahelp", "phone": "(844) 616-0397", "email": "vasupport@allpointsllc.com"},
  {
    "name": "htx", 
    "phone": "(832) 240-4080",  
    "addy":{ 
      al1: "2625 Bay Area Blvd",
      al2: "Suite 302",
      city: "Houston",
      state: "TX",
      zip: 77058}
  },
  {
    "name": "merrit", 
    "phone": "(321) 735-8630",
    "addy":{
      al1: "190 S. Sykes Creek Pkwy",
      al2: "Suite 4",
      city: "Merrit Island",
      state: "FL",
      zip: 32952
    }
  },
  {
    "name": "reston", 
    "phone": "(703) 483-2779",
    "addy":{
      al1: "1950 Roland Clarke Place",
      al2: "Suite 220",
      city: "Reston",
      state: "VA",
      zip: 20191
    }
  },
  {
    "name": "hsv", 
    "phone": " (256) 963-0100",
    "addy":{
      al1: "4815 Bradford Dr",
      al2: "",
      city: "Huntsville",
      state: "AL",
      zip: 35805
    }
  },

]

class Contact extends React.Component{
  constructor(){
    super()

    this.state={
      name: '',
      email: '',
      subject: '',
      body: ''
    }
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault();
    console.log("fired")
   const {name, email, subject, body} = this.state
    //check if all fields are populated

    //submit to endpoint

  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
            <Grid container justify="center" spacing={24}>
          
            <Grid item xs={12} >
              <Typography color="secondary" variant="h4" className={classes.paragraph}>
                  Contact Us
              </Typography>
              <Typography variant="h3" gutterBottom>
                <strong>
                  Reach out for a new project or just say hello
                </strong>
              </Typography>
  
            </Grid>
                      
            <Grid item sm={6} >
            <Paper className={classes.form} >
            <form onSubmit={this.handleSubmit}>
          
            <TextField
              InputLabelProps={{className:classes.textField}}
              variant="outlined"
              name="name"
              label="Name"
              fullWidth
              margin="normal"
              color="secondary"
              onChange={this.handleChange}
  
              />
               <TextField
              InputLabelProps={{className:classes.textField}}
              variant="outlined"
              name="email"
              label="Email"
              fullWidth
              margin="normal"
              color="secondary"
              onChange={this.handleChange}
              />
               <TextField            
              InputLabelProps={{className:classes.textField}}
              variant="outlined"
              name="subject"
              label="Subject"
              fullWidth
              margin="normal"
              color="secondary"
              onChange={this.handleChange}
              />
  
               <TextField
                  InputLabelProps={{className:classes.textField}}
                  id="outlined-multiline-flexible"
                  name="body"
                  label="Body"
                  multiline
                  rows="10"
                  rowsMax="40"
                  fullWidth
                  color="secondary"
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
              />
              <Button type="submit"> Submit</Button>
            </form>
            </Paper>
          
    
            </Grid>
  
            <Grid item sm={4} >
  
              <Grid item >
                <Typography color="secondary" variant="h4" >
                    Contact Info
                  </Typography>
              </Grid>
              
  
               <Grid item >
                  {contacts.map(contact =>
                  <Fragment>
                    <Typography variant="title">
                      <strong>
                        {contact.name}
                      </strong>
                    </Typography>
                    <Typography>
                      {contact.phone}
                    </Typography>
  
                    <Typography>
                      {contact.addy.al1}, {contact.addy.al2}
                    </Typography>
  
                    <Typography>
                      {contact.addy.city},{contact.addy.state},{contact.addy.zip}
                    </Typography>
                      <hr class="hr" />
                  </Fragment>
                    
                  )}
              </Grid>
              
  
            </Grid>
            
  
          </Grid>
  
      </div>
    );

  }
 
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Contact);