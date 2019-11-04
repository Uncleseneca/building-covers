import { intersectionBy } from 'lodash';
export function getResultsPlants(plants, values) {
  return intersectionBy(plants, values.plants, plant => plant.name).map(
    plant => ({
      ...plant,
      share: (
        values.plants.find(formPlant => formPlant.name === plant.name) || {}
      ).share,
    }),
  );
}
