export function analyzeArray(array) {

  let arrayTotal = 0;
  array.forEach(item => {
    arrayTotal += item;
  });

  const getAverage = array => {
    let average = arrayTotal / array.length;
    return average;
  }

  const getMinValue = array => {
    let minVal = array.sort();
    let getMinVal = minVal.slice(0, 1);
    let minValNumber = Number(getMinVal);
    return minValNumber;
  }

  const getMaxValue = array => {
    let maxVal = array.sort().reverse();
    let getMaxVal = maxVal.slice(0, 1);
    let maxValNumber = Number(getMaxVal);
    return maxValNumber;
  }

  return {
    average: getAverage(array),
    min: getMinValue(array),
    max: getMaxValue(array),
    length: array.length
  }
};