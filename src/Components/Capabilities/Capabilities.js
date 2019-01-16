import React from 'react';
import PropTypes from 'prop-types';
//Material UI imports
import {Tabs, Tab, Typography, Paper, withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core/';
//Material UI icons
import {AlternateEmail as Email, Favorite as FavoriteIcon, Person as PersonPinIcon, ExpandMore as ExpandMoreIcon, TrendingUp, SupervisedUserCircle, Build} from '@material-ui/icons/';
//Capability doc
import caps from '../Capabilities/caps.json'
import styles from '../Capabilities/styles'


//creates the Expansion Panels that holds the Sub Capabilities
function SubCaps(props) {
  const { subs } = props;
   
  return (
    <div >
      {subs.map((sub) =>
        <div> 
     
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography  color="secondary" variant="display1" gutterBottom>{sub.subName}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body2" paragraph>{sub.subDescription}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
      </div>    
      )}
    </div>
  );
}
//Lists the Name, description, and subs of a category
function TabContainer(props) {
  const {value, classes} = props
  const {name, description, subs} = caps.Capabilities[value]
  
  return (
    <div>
      <Typography variant="h3" color="textPrimary" component="div" className={classes.tabName} >
        {name}
      </Typography>

      <Typography variant="subtitle1" color="textPrimary" component="div" className={classes.tabName} paragraph>
        {description}
      </Typography>
      <SubCaps  color="secondary" subs={subs}  />
  
    </div>
  );
}

class Capabilities extends React.Component {
  state = {
    value: 0,
  };
 
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const {value } = this.state
    //console.log(classes)

    return (
      <Paper square className={classes.root}>
            <Typography className={classes.type} variant="display1" color="secondary" gutterBottom>What We Do</Typography>

        <Tabs
          value={value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="secondary"
          textColor="textPrimary"
        >
          
          <Tab icon={<Build />} label="ENGINEERING AND TECHNICAL SERVICES" />
          <Tab icon={<Email />} label="Information Technology" />
          <Tab icon={<SupervisedUserCircle />} label="Integrated Logistics" />
          <Tab icon={<TrendingUp />} label="Program Management" />
          <Tab icon={<PersonPinIcon />} label="Government Solutions" />

        </Tabs>
       
        {value === 0 && <TabContainer classes={classes} value={value}></TabContainer>}
        {value === 1 && <TabContainer classes={classes} value={value}></TabContainer>}
        {value === 2 && <TabContainer classes={classes} value={value}></TabContainer>}
        {value === 3 && <TabContainer classes={classes} value={value}></TabContainer>}
        {value === 4 && <TabContainer classes={classes} value={value}></TabContainer>}
      
      </Paper>
    );
  }
}

Capabilities.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles,{withTheme: true})(Capabilities);
