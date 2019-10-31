export const calculateWorkComplexity = ({
  machineHours,
  humanHours,
  reserveRate,
}) =>
  Number(
    (
      (Number(machineHours) + Number(humanHours)) * Number(reserveRate) +
      Number(machineHours) +
      Number(humanHours)
    ).toFixed(1),
  );
