// @ts-check
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { plantSystems } from 'api/dictionaries';
import React from 'react';
import { Link } from 'react-router-dom';
import { removePlant } from './helpers/removePlant';
import { usePlantsContext } from './PlantsContext';
import { Typography, Box } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    overflowX: 'auto',
    maxWidth: 650,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});

export function Plants() {
  const classes = useStyles({});
  const plants = usePlantsContext();
  return (
    <div class="content-container">
      <Box mb={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Все растения
        </Typography>
      </Box>
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Наименование</TableCell>
              <TableCell align="right">Шумопоглощение, дБ</TableCell>
              <TableCell align="right">Стоимость за кв.м.,руб.</TableCell>
              <TableCell align="right">Система</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plants &&
              plants
                .sort(
                  (plant1, plant2) =>
                    plant2.createdAt.toDate().valueOf() -
                    plant1.createdAt.toDate().valueOf(),
                )
                .map(plant => (
                  <TableRow key={plant.name}>
                    <TableCell align="right">
                      <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
                    </TableCell>
                    <TableCell align="right">{plant.noiseReduction}</TableCell>
                    <TableCell align="right">{plant.costPerMeter}</TableCell>
                    <TableCell align="right">
                      {(plant.system || [])
                        .map(system => (plantSystems[system] || {}).label)
                        .join(', ')}
                    </TableCell>
                    <TableCell align="right">
                      <button
                        title="Удалить"
                        className="button-reset"
                        onClick={() => removePlant(plant.id)}
                      >
                        ❌
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
