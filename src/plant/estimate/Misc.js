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
        type="number"
      />

      <Field
        label="Число машино-часов"
        name="machineHours"
        component={TextField}
        type="number"
      />

      <Field
        label="Стоимость человеко-часов"
        name="humanHoursCost"
        component={TextField}
        type="number"
      />

      <Field
        label="Стоимость машино-часов"
        name="machineHoursCost"
        component={TextField}
        type="number"
      />

      <Field
        label="Коэффициент накладных расходов"
        name="overheadRate"
        component={TextField}
        type="number"
      />

      <Field
        label="Коэффициент резерва по виду работ"
        name="reserveRate"
        component={TextField}
        type="number"
      />

      <Field
        label="Коэффициент накладных расходов к оплате труда рабочих"
        name="overheadRateWorkers"
        component={TextField}
        type="number"
      />

      <Field
        label="Коэффициент накладных расходов к оплате труда машинистов"
        name="overheadRateMachinists"
        component={TextField}
        type="number"
      />
      <Field
        label="Сменность работ"
        name="shifts"
        component={TextField}
        type="number"
      />
      <Field
        label="Общее кол-во рабочих"
        name="workersAmount"
        component={TextField}
        type="number"
      />

      <Field
        label="Стоимость материалов для монтажа"
        name="installationMaterialsCost"
        component={TextField}
        type="text"
      />
    </Grid>
  );
}
