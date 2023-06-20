// case 1
const getConditionTemperature = (temperature) => {
  const FROZEN = {
    name: 'Beku',
    temperature: {
      min: -100,
      max: 0
    }
  };

  const LIQUID = {
    name: 'Cair',
    temperature: {
      min: 1,
      max: 100
    }
  };

  const GAS = {
    name: 'Uap',
    temperature: {
      min: 101,
      max: 500
    }
  };

  const CONDITIONS = [FROZEN, LIQUID, GAS];

  for (let condition of CONDITIONS) {
    if (temperature >= condition.temperature.min && temperature <= condition.temperature.max) {
      return condition.name;
    }
  }

  return 'Tidak terdefinisi'
}

const temperature = 101;
console.log(getConditionTemperature(temperature));


// case 2
const PLATE_COLORS = {
  black: 'hitam',
  yellow: 'kuning',
};

const VEHICLE_TYPES = {
  motorcycle: 'motor',
  car: 'mobil',
};

const getGasolineType = (plateColor, vehicle, ccCapacity) => {
  const GASOLINE_TYPES = {
    subsidi: 'BBM Subsidi',
    pertamax: 'Pertamax',
    pertamaxTurbo: 'Pertamax Turbo',
  };
  
  if (plateColor === PLATE_COLORS.yellow || vehicle === VEHICLE_TYPES.motorcycle) {
    return GASOLINE_TYPES.subsidi;
  } else if (vehicle === VEHICLE_TYPES.car && ccCapacity < 1500) {
    return GASOLINE_TYPES.pertamax;
  } else if (vehicle === VEHICLE_TYPES.car && ccCapacity >= 1500) {
    return GASOLINE_TYPES.pertamaxTurbo;
  }

  return 'Tidak terdefinisi';
}

const plateColor = PLATE_COLORS.black;
const vehicle = VEHICLE_TYPES.car;
const ccCapacity = 1490;

console.log(getGasolineType(plateColor, vehicle, ccCapacity));