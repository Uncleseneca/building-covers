export const calculateWorkDuration = ({
  machineHours,
  humanHours,
  shifts,
  workersAmount,
}) => {
  const result =
    Math.max(Number(machineHours), Number(humanHours)) /
    (8 * Number(shifts) * Number(workersAmount));
  return Number(result.toFixed(2));
};
