// @ts-check
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { calculateCostPrice } from './helpers/calculateCostPrice';
import { calculateWorkComplexity } from './helpers/calculateWorkComplexity';
import { calculateWorkDuration } from './helpers/calculateWorkDuration';
import { Box, Typography } from '@material-ui/core';
import { formatNumber } from 'helpers/formatNumbers';

export const Results = ({ plants, estimateContext }) => {
  return (
    <Box mb={2}>
      <Typography variant="h5" component="h3" gutterBottom>
        {plants.map(plant => plant.name).join(', ')}
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Себестоимость работ, руб</TableCell>
            <TableCell align="right">
              {formatNumber(calculateCostPrice({ ...estimateContext, plants }))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Трудоемкость работ, часов</TableCell>
            <TableCell align="right">
              {formatNumber(calculateWorkComplexity({ ...estimateContext }))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Продолжительность работ, дней</TableCell>
            <TableCell align="right">
              {formatNumber(calculateWorkDuration({ ...estimateContext }))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};
