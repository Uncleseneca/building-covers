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
import { usePlantsContext } from 'plant/PlantsContext';
import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { decorator } from './helpers/decorators';
import { getPlants } from './helpers/getPlants';
import { getShowResults } from './helpers/getShowResults';
import { Misc } from './Misc';
import { Results } from './Results';
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
  reserveRate: '234',
  installationMaterialsCost: '234',
  overheadRateWorkers: 12,
  overheadRateMachinists: 12,
  shifts: 2,
  workersAmount: 12,
};

export const Estimate = () => {
  const plants = usePlantsContext();

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
        decorators={[decorator]}
        render={({ handleSubmit, values }) => {
          const showSystems = !!values.objectType;
          const showWallsSystems =
            values.objectType === objectTypes.walls.value;
          const showRoofSystems = values.objectType === objectTypes.roof.value;
          const showAreaAndNoiseReduction = !!values.system;
          const showPlants =
            !!values.area && !!values.noiseReduction && !!plants;
          const showMisc = !isEmpty(values.plants);
          // TODO: make a real condition with context check
          const showResults = !!plants && getShowResults(values);
          const resultsPlants =
            showResults &&
            values.plants &&
            plants.filter(plant => values.plants.includes(plant.name));
          debugger;
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
                      {showAreaAndNoiseReduction && (
                        <>
                          <Typography variant="h5" component="h2" gutterBottom>
                            Площадь озеленения, м²
                          </Typography>
                          <Field
                            name="area"
                            component={TextField}
                            type="number"
                          />
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
                      {showResults &&
                        resultsPlants.map(resultPlant => (
                          <Results
                            plant={resultPlant}
                            estimateContext={values}
                            key={resultPlant.name}
                          />
                        ))}
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
