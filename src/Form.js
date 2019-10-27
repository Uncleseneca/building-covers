import {
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { PLANTS } from 'api/doc-types';
import { firestore } from 'api/firebase';
import { Checkbox, TextField } from 'final-form-material-ui';
import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';

export function Form({ title, onSubmit }) {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        {title}
      </Typography>
      <FinalForm
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="name"
                    component={TextField}
                    type="text"
                    label="Наименование"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="noiseReduction"
                    component={TextField}
                    type="number"
                    label="Шумопоглощение, дБ"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="costPerMeter"
                    fullWidth
                    required
                    component={TextField}
                    type="number"
                    label="Стоимость за кв.м.,руб."
                  />
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Система</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        label="Модульная"
                        control={
                          <Field
                            name="system"
                            component={Checkbox}
                            type="checkbox"
                            value="module"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Войлочная"
                        control={
                          <Field
                            name="system"
                            component={Checkbox}
                            type="checkbox"
                            value="felt"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Интенсивная"
                        control={
                          <Field
                            name="system"
                            component={Checkbox}
                            type="checkbox"
                            value="intensive"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Экстенсивная"
                        control={
                          <Field
                            name="system"
                            component={Checkbox}
                            type="checkbox"
                            value="extensive"
                          />
                        }
                      />
                    </FormGroup>
                  </FormControl>
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
