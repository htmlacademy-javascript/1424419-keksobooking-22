const randomInteger  = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max + 1 - min);

  if (min < max) {
    return Math.round(rand);
  }
  return ('Неверно указан числовой диапазон')
}

alert(randomInteger(0, 10));


const randomFloatNumber = (min, max, floatPoint) => {
  const randomFloatNumber = Math.random() * (max - min) + min;

  if (min < max) {
    return randomFloatNumber.toFixed(floatPoint);
  }
  return ('Неверно указан числовой диапазон')
}

alert(randomFloatNumber(0, 10, 4));
