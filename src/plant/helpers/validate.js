import { isEmpty } from 'lodash';
export function validate(plant) {
  return !!plant.name &&
    !!plant.noiseReduction &&
    !!plant.costPerMeter &&
    !isEmpty(plant.system)
    ? undefined
    : { error: 'Заполните все поля' };
}
