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
  !!workersAmount;
