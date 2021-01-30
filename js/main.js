const randomInteger  = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max + 1 - min);

  if (min < max) {
    return Math.round(rand);
  }
  return new Error('Неверно указан числовой диапазон')
}

alert(randomInteger(110, 10));


const randomFloatNumber = (min, max, floatPoint) => {
  const randomFloat = Math.random() * (max - min) + min;

  if (min < max) {
    return randomFloat.toFixed(floatPoint);
  }
  return new Error('Неверно указан числовой диапазон')
}

alert(randomFloatNumber(0, 10, 4));
