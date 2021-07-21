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
function pythag(str) {
  const pluseNumber = (num) => {
    return num
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, num) => (acc += num))
      .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  }
  console.log(str)
  const dateArr = str.split('-').reverse()
  // .map(Number) //
  console.log('dateArr', dateArr)
  const numOne = dateArr
    .join('')
    .split('')
    .map(Number)
    .reduce((acc, num) => (acc += num))
  console.log(numOne)
  const numTwo = pluseNumber(numOne)
  console.log(numTwo)

  const firstNuber = dateArr.join('')[0]
  console.log(firstNuber)
  const numThree = numOne - firstNuber * 2
  console.log(numThree)

  const numFour = pluseNumber(numThree)
  console.log(numFour)
  const oneString = dateArr
    .join('')
    .split('')
    .map(Number)
  const twoString = [numOne, numTwo, numThree, numFour]
    .join('')
    .split('')
    .map(Number)
  console.log('oneString', oneString)
  console.log('twoString', twoString)
  const result = [...oneString, ...twoString]
  console.log(result)
  return result
}
console.log(pythag('1961-11-01'))
