const randomInteger  = (min, max) => {
  if (min > max) {
    return new Error('Неверно указан числовой диапазон');
  }
  const random = min - 0.5 + Math.random() * (max + 1 - min);
  return Math.round(random);
}

alert(randomInteger(0, 10));


const randomFloatNumber = (min, max, floatPoint) => {
  if (min > max) {
    return new Error('Неверно указан числовой диапазон');
  }
  const randomFloat = Math.random() * (max - min) + min;
  return randomFloat.toFixed(floatPoint);
}

alert(randomFloatNumber(0, 10, 4));
