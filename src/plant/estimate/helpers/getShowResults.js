export const getShowResults = ({
  humanHours,
  machineHours,
  humanHoursCost,
  overheadRate,
  machineHoursCost,
  reserveRate,
  installationMaterialsCost,
  overheadRateWorkers,
  overheadRateMachinists,
  shifts,
  workersAmount,
  plants,
}) =>
  !!humanHours &&
  !!machineHours &&
  !!humanHoursCost &&
  !!overheadRate &&
  !!machineHoursCost &&
  !!reserveRate &&
  !!installationMaterialsCost &&
  !!overheadRateWorkers &&
  !!overheadRateMachinists &&
  !!shifts &&
  !!workersAmount &&
  plants.every(plant => !!plant.name && !!plant.share);
