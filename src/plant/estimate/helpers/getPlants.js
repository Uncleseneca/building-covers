export function getPlants(plants, values) {
  return plants
    .filter(plant => plant.system.includes(values.system))
    .filter(
      plant => Number(plant.noiseReduction) >= Number(values.noiseReduction),
    );
}
