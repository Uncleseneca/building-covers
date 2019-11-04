// @ts-check
import { withAutoSaveOnFieldBlur } from '@breadhead/form-saver';
import {
  Box,
  Grid,
  MenuItem,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { objectTypes } from 'api/dictionaries';
import { Select, TextField, Input } from 'final-form-material-ui';
import { isEmpty } from 'lodash';
import { usePlantsContext } from 'plant/PlantsContext';
import React from 'react';
import { Field, Form as FinalForm, FormSpy } from 'react-final-form';
import { decorator } from './helpers/decorators';
import { getPlants } from './helpers/getPlants';
import { getShowResults as getShowResultsFromForm } from './helpers/getShowResults';
import { Misc } from './Misc';
import { ObjectType } from './ObjectType';
import { System } from './System';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { PlantsPicker } from './PlantsPicker';

const ESTIMATE_FORM_KEY = 'building-covers-estimate';

const initialValuesFromLocalStorage = localStorage.getItem(ESTIMATE_FORM_KEY);
const initialValues = initialValuesFromLocalStorage
  ? JSON.parse(initialValuesFromLocalStorage)
  : null;

const saveDataToLocalStorage = fields => {
  return Promise.resolve(
    localStorage.setItem(ESTIMATE_FORM_KEY, JSON.stringify(fields)),
  );
};

const SaveSpy = withAutoSaveOnFieldBlur(FormSpy);

export const Estimate = () => {
  const plants = usePlantsContext();
  if (!plants) {
    return null;
  }

  return (
    <div className="content-container">
      <Box mb={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Расчет растений
        </Typography>
      </Box>
      <FinalForm
        mutators={{ ...arrayMutators }}
        initialValues={initialValues}
        onSubmit={console.log}
        // decorators={[decorator]}
        render={({
          handleSubmit,
          values,
          form: {
            mutators: { push, pop },
          },
        }) => {
          const showSystems = !!values.objectType;
          const showWallsSystems =
            values.objectType === objectTypes.walls.value;
          const showRoofSystems = values.objectType === objectTypes.roof.value;
          const showAreaAndNoiseReduction = !!values.system;
          const showPlants =
            !!values.area &&
            !!values.noiseReduction &&
            !isEmpty(getPlants(plants, values));
          const showEmptyPlantsListNote =
            !!values.area && !!values.noiseReduction && !!values.system;
          const showMisc = !isEmpty(values.plants);
          const showResults = !!values.plants && getShowResultsFromForm(values);
          const resultsPlants =
            showResults &&
            plants.filter(plant => values.plants.includes(plant.name));

          return (
            <form onSubmit={handleSubmit}>
              <SaveSpy save={saveDataToLocalStorage}></SaveSpy>
              <Paper style={{ padding: '32px 16px' }}>
                <Grid direction="column" container spacing={5}>
                  <Grid item xs={12}>
                    <Box mb={2}>
                      <ObjectType />
                    </Box>
                    {showSystems && (
                      <Box mb={2}>
                        <System
                          showRoofSystems={showRoofSystems}
                          showWallsSystems={showWallsSystems}
                        />
                      </Box>
                    )}
                    {showAreaAndNoiseReduction && (
                      <>
                        <Box display="flex" flexDirection="column" mb={2}>
                          <Typography variant="h5" component="h2" gutterBottom>
                            Площадь озеленения, м²
                          </Typography>
                          <Field
                            name="area"
                            component={TextField}
                            type="number"
                          />
                        </Box>
                        <Box display="flex" flexDirection="column" mb={2}>
                          <Typography variant="h5" component="h2" gutterBottom>
                            Минимальное шумопоглощение, дб
                          </Typography>
                          <Field
                            name="noiseReduction"
                            component={TextField}
                            type="number"
                          />
                        </Box>
                      </>
                    )}
                    {showPlants ? (
                      <PlantsPicker
                        plants={plants}
                        values={values}
                        push={push}
                      />
                    ) : showEmptyPlantsListNote ? (
                      <Box display="flex" flexDirection="column" mb={2}>
                        <Typography variant="h5" component="h2" gutterBottom>
                          Не нашлось подходящих растений
                        </Typography>
                      </Box>
                    ) : null}
                    {showMisc && (
                      <Box mb={2}>
                        <Misc />
                      </Box>
                    )}
                    {/* {!isEmpty(resultsPlants) && (
                      <Box mb={2}>
                        <Box mb={3}>
                          <Typography variant="h5" component="h4" gutterBottom>
                            Результаты
                          </Typography>
                        </Box>
                        {resultsPlants.map(resultPlant => (
                          <Results
                            plant={resultPlant}
                            estimateContext={values}
                            key={resultPlant.name}
                          />
                        ))}
                      </Box>
                    )} */}
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
