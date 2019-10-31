import { calculateWorkComplexity } from './calculateWorkComplexity';

/* 

Резерв рабочего времени:

Р2 = (∑𝑁чел−Ч𝑖∗Ччел−Ч𝑖𝑛𝑖=1+∑𝑁маш−Ч𝑖∗Чмаш−Ч𝑖𝑛𝑖=1)*kр

Р2 = (456,73 + 55,73)*0,02 = 10,25

Общая трудоемкость работ на объекте:

То = ∑Ччел-Чi *Nчелi + ∑Чмаш-Чi *Nмашi + Р2

То = 456,73 + 55,73 + 10,25 = 522,71


*/

test('should work', () => {
  const result = calculateWorkComplexity({
    machineHours: 55.73,
    humanHours: 456.73,
    reserveRate: 0.02,
  });

  expect(result).toBe(522.7);
});
