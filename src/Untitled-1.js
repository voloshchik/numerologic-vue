let str = '1961-11-24'

const pluseNumber = (num) => {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, num) => (acc += num))
}

const dateArr = str
  .split('-')
  .reverse()
  .map(Number) //
console.log(dateArr)
const numOne = dateArr
  .join('')
  .split('')
  .map(Number)
  .reduce((acc, num) => (acc += num))
console.log(numOne)
const numTwo = pluseNumber(numOne)
console.log(numTwo)
const firstNuber = +dateArr.join('')[0]
const numThree = numOne - firstNuber * 2
console.log(numThree)

const numFour = pluseNumber(numThree)
console.log(numFour)
