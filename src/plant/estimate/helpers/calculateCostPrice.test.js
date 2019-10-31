import { calculateCostPrice } from './calculateCostPrice';

/* 
Общая себестоимость работ на объекте:

𝐶0=КН,∗∑𝐶чел−Ч𝑖∗Ччел−Ч𝑖𝑛𝑖=1+КН,,∗∑𝐶маш−Ч𝑖∗Чмаш−Ч𝑖𝑛𝑖=1+Р1+Смат+Ср

Со = 1,02*24 192,84 + 0,98*7 029,01 + 631,3 + 10 586 758,6 + 1 936 000 = 12554955

*/

test('should work', () => {
  const result = calculateCostPrice({
    overheadRateMachinists: 0.98,
    overheadRateWorkers: 1.02,
    machineHoursCost: 7029.01,
    humanHoursCost: 24192.84,
    reserveRate: 0.02,
    installationMaterialsCost: 10586758.6,
    costPerMeter: 8800,
    area: 220,
  });

  expect(result).toBe(12554955);
});
