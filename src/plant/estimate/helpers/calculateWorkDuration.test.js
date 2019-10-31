import { calculateWorkDuration } from './calculateWorkDuration';

/* 


Время проведения работ на объекте:

t = (∑Ччел-Чi * Nчелi)/(8*n*k)

t = 456,73/(8*2*12) = 2,38


*/

test('should work', () => {
  const result = calculateWorkDuration({
    humanHours: 456.73,
    machineHours: 55.73,
    shifts: 2,
    workersAmount: 12,
  });

  expect(result).toBe(2.38);
});
