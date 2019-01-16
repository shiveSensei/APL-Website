import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Button, Fab, SwipeableDrawer, withStyles, List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
//Icons
import {Menu} from '@material-ui/icons/';

const styles = {
  list: {
    width: 250,
  },
  listText:{
    color: '#000'
  },
  fullList: {
    width: 'auto',
  },
  nav: {
    
  },
  btn:{
    float: 'right',
    zIndex: 999,
    margin: '-40px 0 0 0',
    position: 'sticky',
    top: 10,
    right: 10
  }
};

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

class Nav extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes, theme } = this.props;
    //console.log(classes)

    const sideList = (
      <div className={classes.list}>
        <List>
            <ListItemLink href="/">
             <ListItemText className={classes.listText} primary="Home" />
            </ListItemLink>

            <ListItemLink href="/capabilities">
             <ListItemText primary="Capabilities" />
            </ListItemLink>

            <ListItemLink href="/contract-vehicles">
             <ListItemText primary="Contract Vehicles" />
            </ListItemLink>
            <ListItemLink href="/leadership">
             <ListItemText primary="Leadership" />
            </ListItemLink>
         
        </List>
        <Divider />
        <List>
            <ListItemLink href="/">
             <ListItemText primary="Employees" />
            </ListItemLink>
            <ListItemLink href="/careers">
             <ListItemText primary="Careers" />
            </ListItemLink>
           
        </List>
      </div>
    );
    return(
      <Fragment>
         <div className={classes.btn}>
          <Fab 
           size="small" 
           onClick={this.toggleDrawer('right', true)}
           >
           <Menu />
           </Fab>
          
      </div>
      <div className={classes.nav}>
      <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        

      </div>


      </Fragment>
     
    )

    // return (
    //   <div className={classes.nav}>
    //     <div className={classes.btn}>
    //     <Fab 
    //     size="small" 
    //     onClick={this.toggleDrawer('right', true)}
    //     >
    //     <Menu />
    //     </Fab>
        
    //     </div>
        
     
    
    //   </div>
    // );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Nav);