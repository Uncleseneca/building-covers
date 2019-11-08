// @ts-check
import { FormControlLabel, Grid, Typography } from '@material-ui/core';
import { plantSystems } from 'api/dictionaries';
import { Radio } from 'final-form-material-ui';
import React from 'react';
import { Field } from 'react-final-form';

export const System = ({ showWallsSystems, showRoofSystems }) => (
  <Grid item xs={12}>
    <Typography variant="h5" component="h2" gutterBottom>
      Выбор технологии
    </Typography>
    <Grid direction="column" container>
      {showWallsSystems && (
        <>
          <FormControlLabel
            label={plantSystems.module.label}
            control={
              <Field
                name="system"
                component={Radio}
                type="radio"
                value={plantSystems.module.value}
              />
            }
          />
          <FormControlLabel
            label={plantSystems.felt.label}
            control={
              <Field
                name="system"
                component={Radio}
                type="radio"
                value={plantSystems.felt.value}
              />
            }
          />
          <FormControlLabel
            label={plantSystems.container.label}
            control={
              <Field
                name="system"
                component={Radio}
                type="radio"
                value={plantSystems.container.value}
              />
            }
          />
        </>
      )}
      {showRoofSystems && (
        <>
          <FormControlLabel
            label={plantSystems.extensive.label}
            control={
              <Field
                name="system"
                component={Radio}
                type="radio"
                value={plantSystems.extensive.value}
              />
            }
          />
          <FormControlLabel
            label={plantSystems.intensive.label}
            control={
              <Field
                name="system"
                component={Radio}
                type="radio"
                value={plantSystems.intensive.value}
              />
            }
          />
        </>
      )}
    </Grid>
  </Grid>
);
