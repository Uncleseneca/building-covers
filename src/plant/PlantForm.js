//@ts-check

import {
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { plantSystems } from 'api/dictionaries';
import { Checkbox, TextField } from 'final-form-material-ui';
import React, { useState } from 'react';
import { Field, Form as FinalForm } from 'react-final-form';

export function PlantForm({
  title,
  onSubmit,
  defaultValues,
  resetAfterSubmit = false,
}) {
  const [key, setKey] = useState(0);

  const handleFormSubmit = handleSubmit => {
    return async values => {
      await handleSubmit(values);
      if (resetAfterSubmit) {
        setKey(Math.random());
      }
    };
  };

  return (
    <div className="content-container">
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        {title}
      </Typography>
      <FinalForm
        key={key}
        initialValues={defaultValues}
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleFormSubmit(handleSubmit)} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid
                container
                direction="column"
                alignItems="stretch"
                spacing={2}
              >
                <Grid item container direction="column" alignItems="stretch">
                  <Field
                    width="100%"
                    required
                    name="name"
                    component={TextField}
                    type="text"
                    label="Наименование"
                  />
                  <Field
                    required
                    name="noiseReduction"
                    component={TextField}
                    type="number"
                    label="Шумопоглощение, дБ"
                  />
                  <Field
                    name="costPerMeter"
                    required
                    component={TextField}
                    type="number"
                    label="Стоимость за кв.м.,руб."
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Технология
                  </Typography>
                  <Grid direction="column" container>
                    {Object.values(plantSystems).map(system => (
                      <FormControlLabel
                        key={system.value}
                        label={system.label}
                        control={
                          <Field
                            name="system"
                            component={Checkbox}
                            type="checkbox"
                            value={system.value}
                          />
                        }
                      />
                    ))}
                  </Grid>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}
