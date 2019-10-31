// @ts-check
import { FormControlLabel, Typography, Grid } from '@material-ui/core';
import { objectTypes } from 'api/dictionaries';
import { Radio } from 'final-form-material-ui';
import { default as React } from 'react';
import { Field } from 'react-final-form';

export const ObjectType = () => (
  <>
    <Typography variant="h5" component="h2" gutterBottom>
      Выбор объекта
    </Typography>
    <Grid container direction="column">
      <FormControlLabel
        label={objectTypes.walls.label}
        control={
          <Field
            name="objectType"
            component={Radio}
            type="radio"
            value={objectTypes.walls.value}
          />
        }
      />
      <FormControlLabel
        label={objectTypes.roof.label}
        control={
          <Field
            name="objectType"
            component={Radio}
            type="radio"
            value={objectTypes.roof.value}
          />
        }
      />
    </Grid>
  </>
);
