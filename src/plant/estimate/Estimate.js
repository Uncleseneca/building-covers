// @ts-check
import {
  Box,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { objectTypes } from 'api/dictionaries';
import { Checkbox, Radio, TextField } from 'final-form-material-ui';
import { isEmpty } from 'lodash';
import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { usePlants } from '../helpers/usePlants';
import { getPlants } from './getPlants';
import { Misc } from './Misc';
import { System } from './System';

const initialValues = {
  objectType: 'walls',
  system: 'felt',
  area: '102',
  noiseReduction: '12',
  plants: ['роза', '324рывапы'],
  humanHours: '123',
  machineHours: '234',
  humanHoursCost: '34',
  overheadRate: '2342',
  machineHoursCost: '234',
  workKindRate: '234',
  installationCost: '234',
};

export const Estimate = () => {
  const plants = usePlants();
  console.log('TCL: Estimate -> plants', plants);

  return (
    <div className="content-container">
      <Box mb={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Расчет растений
        </Typography>
      </Box>
      <FinalForm
        initialValues={initialValues}
        onSubmit={console.log}
        render={({ handleSubmit, values }) => {
          const showSystems = !!values.objectType;
          const showWallsSystems =
            values.objectType === objectTypes.walls.value;
          const showRoofSystems = values.objectType === objectTypes.roof.value;
          const showArea = !!values.system;
          const showNoiseReduction = !!values.area;
          const showPlants = !!values.noiseReduction && plants;
          const showMisc = !isEmpty(values.plants);
          const showResults = true;

          return (
            <form onSubmit={handleSubmit}>
              <Paper style={{ padding: '32px 16px' }}>
                <Grid direction="column" container spacing={5}>
                  <Grid item xs={12}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Выбор объекта
                    </Typography>
                    <Grid direction="column" container>
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
                      {showSystems && (
                        <System
                          showRoofSystems={showRoofSystems}
                          showWallsSystems={showWallsSystems}
                        />
                      )}
                      {showArea && (
                        <>
                          <Typography variant="h5" component="h2" gutterBottom>
                            Площадь озеленения, м²
                          </Typography>
                          <Field
                            name="area"
                            component={TextField}
                            type="number"
                          />
                        </>
                      )}
                      {showNoiseReduction && (
                        <>
                          <Typography variant="h5" component="h2" gutterBottom>
                            Минимальное шумопоглощение, дб
                          </Typography>
                          <Field
                            name="noiseReduction"
                            component={TextField}
                            type="number"
                          />
                        </>
                      )}
                      {showPlants &&
                        getPlants(plants, values).map(plant => (
                          <FormControlLabel
                            key={plant.name}
                            label={plant.name}
                            control={
                              <Field
                                name="plants"
                                component={Checkbox}
                                type="checkbox"
                                value={plant.name}
                              />
                            }
                          />
                        ))}
                      {showMisc && <Misc />}
                      {showResults && (
                        <>
                          <div>
                            {values.area *
                              (plants &&
                                plants.find(
                                  plant => values.plants[0] === plant.name,
                                ).costPerMeter)}
                          </div>
                        </>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          );
        }}
      ></FinalForm>
    </div>
  );
};
