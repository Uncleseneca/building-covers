export const calculateCostPrice = ({
  overheadRateMachinists,
  overheadRateWorkers,
  humanHoursCost,
  machineHoursCost,
  reserveRate,
  installationMaterialsCost,
  costPerMeter,
  area,
}) => {
  const result =
    (Number(overheadRateMachinists) * Number(machineHoursCost) +
      Number(overheadRateWorkers) * Number(humanHoursCost)) *
      reserveRate +
    Number(overheadRateMachinists) * Number(machineHoursCost) +
    Number(overheadRateWorkers) * Number(humanHoursCost) +
    Number(installationMaterialsCost) +
    Number(costPerMeter) * Number(area);
  return Number(result.toFixed(1));
};
