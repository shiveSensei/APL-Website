import React, { Component, Fragment } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListSubheader
} from "@material-ui/core";

import jobs from "./jobs.json";

class Careers extends Component {
  render() {
    const jo = jobs.Jobs;
    return (
      <Fragment>
        <Grid container spacing={32}>
          <Grid item xs={12}>
            <Typography> Careers</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Looking for a new opportunity? Well look no further
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              //InputLabelProps={{className:classes.textField}}
              variant="outlined"
              label="Key Words"
              margin="normal"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              // InputLabelProps={{className:classes.textField}}
              variant="outlined"
              label="Location"
              margin="normal"
              color="secondary"
            />
          </Grid>
          <hr />
        </Grid>
        {jo.map((job, key) => (
          <Grid container justify="flex-start">
            <Grid item xs={12}>
              <Typography variant="h4"> JOB TITLE: {job.title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography> Date Posted: {job.posted}</Typography>
            </Grid>
            <Grid item>
              <List
                component="ul"
                subheader={
                  <ListSubheader color="primary"> Description</ListSubheader>
                }
              >
                {job.description.map((item, key) => (
                  <ListItem>
                    <Typography variant="body1">{item.duty}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12}>
              <Button> Apply</Button>
            </Grid>
          </Grid>
        ))}
      </Fragment>
    );
  }
}

export default Careers;
