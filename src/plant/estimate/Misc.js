import { Grid, Typography } from '@material-ui/core';
import { TextField } from 'final-form-material-ui';
import React from 'react';
import { Field } from 'react-final-form';
export function Misc() {
  return (
    <Grid container direction="column">
      <Typography variant="h5" component="h2" gutterBottom>
        Остальные параметры
      </Typography>

      <Field
        label="Число человеко-часов"
        name="humanHours"
        component={TextField}
        type="text"
      />

      <Field
        label="Число машино-часов"
        name="machineHours"
        component={TextField}
        type="text"
      />

      <Field
        label="Стоимость человеко-часов"
        name="humanHoursCost"
        component={TextField}
        type="text"
      />

      <Field
        label="Стоимость машино-часов"
        name="machineHoursCost"
        component={TextField}
        type="text"
      />

      <Field
        label="Коэффициент накладных расходов"
        name="overheadRate"
        component={TextField}
        type="text"
      />

      <Field
        label="Коэффициент резерва по виду работ"
        name="workKindRate"
        component={TextField}
        type="text"
      />

      <Field
        label="Стоимость материалов для монтажа"
        name="installationCost"
        component={TextField}
        type="text"
      />
    </Grid>
  );
}
