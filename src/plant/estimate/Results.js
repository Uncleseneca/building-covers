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

export const Results = ({ plant, estimateContext }) => {
  return (
    <Box mb={2}>
      <Typography variant="h5" component="h3" gutterBottom>
        {plant.name}
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Себестоимость работ</TableCell>
            <TableCell align="right">
              {calculateCostPrice({ ...plant, ...estimateContext })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Трудоемкость работ</TableCell>
            <TableCell align="right">
              {calculateWorkComplexity({ ...estimateContext })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Продолжительность работ</TableCell>
            <TableCell align="right">
              {calculateWorkDuration({ ...estimateContext })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};
