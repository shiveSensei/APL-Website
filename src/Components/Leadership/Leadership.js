import React, { Component } from 'react';
import leaders from '../Leadership/leaders'

import {Grid, Typography} from '@material-ui/core'

class Leadership extends Component{


    render(){
        const lead = leaders.Leaders



        return(
            <Grid container spacing={32}>Leadership
                {lead.map((leader) =>
                    <Grid item xs={12}>
                    <Typography> {leader.name}</Typography>
                    <Typography> {leader.position}</Typography>
                    <Typography> {leader.about}</Typography>
                    <img key={leader.image} src={require(`../../img/Leadership/${leader.image}.jpg`)} alt="" className="img-responsive" />

                    </Grid>
                    
                )} 

            </Grid>
        )
    }
   
}

export default Leadership