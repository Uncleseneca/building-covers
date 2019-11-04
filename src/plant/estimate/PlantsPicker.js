// @ts-check
import { Box, Button, MenuItem, Typography } from '@material-ui/core';
import { Input, Select } from 'final-form-material-ui';
import React from 'react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { getPlants } from './helpers/getPlants';

export const PlantsPicker = ({ plants, values, push }) => (
  <Box display="flex" flexDirection="column" mb={2}>
    <Typography variant="h5" component="h2" gutterBottom>
      Выбор растений
    </Typography>

    <FieldArray name="plants">
      {({ fields }) =>
        fields.map((name, index) => (
          <div className="plant-select-box-outer" key={name}>
            <label>Растение {index + 1}</label>

            <Box className="plant-select-box" display="grid">
              <Field
                name={`${name}.name`}
                component={Select}
                type="select"
                label="Растение"
              >
                {getPlants(plants, values).map(plant => (
                  <MenuItem key={plant.name} value={plant.name}>
                    {plant.name}
                  </MenuItem>
                ))}
              </Field>
              <Field
                format={value => (Number(value) > 100 ? 100 : value)}
                className="plant-share-wrapper"
                name={`${name}.share`}
                component={Input}
                type="number"
                placeholder="Доля в процентах"
              />
            </Box>
            <span
              onClick={() => fields.remove(index)}
              style={{
                cursor: 'pointer',
                position: 'absolute',
                right: 0,
              }}
            >
              ❌
            </span>
          </div>
        ))
      }
    </FieldArray>
    <Button variant="outlined" onClick={() => push('plants', undefined)}>
      Добавить растение
    </Button>
  </Box>
);
