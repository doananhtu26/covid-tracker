import React from 'react';
import {Grid} from '@material-ui/core';
import LineChart from "../Charts/LineChart";

const Summary = () => {
    return <div>
      <Grid container spacing={3}>
          <Grid item sm={8} xs={12}>
            <LineChart data={[]} />
          </Grid>
          <Grid item sm={8} xs={12}>
              
              </Grid>

      </Grid>
    )
    </div>
}

export default Summary;