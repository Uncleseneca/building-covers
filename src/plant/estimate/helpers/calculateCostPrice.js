export const calculateCostPrice = ({
  overheadRateMachinists,
  overheadRateWorkers,
  humanHoursCost,
  machineHoursCost,
  reserveRate,
  installationMaterialsCost,
  area,
  plants,
}) => {
  const totalCostPerMeter =
    plants.reduce((acc, plant) => {
      acc = acc + Number(plant.costPerMeter) * Number(plant.share);
      return acc;
    }, 0) / 100;
  console.log('TCL: totalCostPerMeter', totalCostPerMeter);
  const result =
    (Number(overheadRateMachinists) * Number(machineHoursCost) +
      Number(overheadRateWorkers) * Number(humanHoursCost)) *
      reserveRate +
    Number(overheadRateMachinists) * Number(machineHoursCost) +
    Number(overheadRateWorkers) * Number(humanHoursCost) +
    Number(installationMaterialsCost) +
    totalCostPerMeter * Number(area);

  return Number(result.toFixed(1));
};
