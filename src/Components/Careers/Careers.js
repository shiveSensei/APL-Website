import React, { Component } from 'react';
import {Grid, Typography, TextField} from '@material-ui/core'

class Careers extends Component{

    render(){
        return(
            <Grid container spacing={32}>
                <Grid item xs={12}>
                    <Typography> Careers</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography> Looking for a new opportunity? Well look no further</Typography>
                </Grid>
                <Grid item xs={12}>
                <TextField
                    //InputLabelProps={{className:classes.textField}}
                    variant="outlined"
                    label="Key Words"
                    fullWidth
                    margin="normal"
                    color="secondary"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    // InputLabelProps={{className:classes.textField}}
                    variant="outlined"
                    label="Location"
                    fullWidth
                    margin="normal"
                    color="secondary"
                />
                </Grid>
       
            </Grid>
        )
    }
   
}

export default Careers