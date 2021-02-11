<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Нумерология</h1>

      <div class="form-control" :class="{ invalid: errors.name }">
        <label for="name">Как вас зовут?</label>
        <input v-model.trim="name" type="text" name="name" id="name" />
        <small v-if="errors.name">{{ errors.name }}</small>
      </div>

      <div class="form-control">
        <label for="date">Ваша дата рождения?</label>
        <input type="date" id="date" v-model="date" />
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
    <div class="card">
      <button class="btn" @click="debag">Debag</button>
    </div>
    <app-table :numberMatrix="matrixNums"></app-table>
    <app-info></app-info>
  </div>
</template>

<script>
// const toNumber = (str)=>{
//   return str..toString()
//         .split('')
//         .map(Number)
// }
import AppTable from '@/AppTable'
import AppInfo from '@/component/AppInfo'

export default {
  components: { AppTable, AppInfo },

  data() {
    return {
      name: 'irina',
      date: '1961-11-24',
      matrixNums: [],

      errors: {
        name: null,
      },
    }
  },
  methods: {
    formIsValid() {
      let isValid = true
      if (this.name.length === 0) {
        this.errors.name = 'Введите выше имя'
        isValid = false
      } else {
        this.errors.name = null
      }
      return isValid
    },
    submitHandler(e) {
      if (this.formIsValid()) {
        console.group('form data')
        console.log('Name', this.name)
        console.log('Date', this.date)

        console.groupEnd()

        // this.dateArr = this.date.split('-').reverse()
        // console.log('dateArr', dateArr)
        this.pythag(date.value)
      }
    },
    pythag(str) {
      const pluseNumber = (num) => {
        return num
          .toString()
          .split('')
          .map(Number)
          .reduce((acc, num) => (acc += num))
          .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
      }

      const dateArr = str.split('-').reverse()
      // .map(Number) //

      const numOne = dateArr
        .join('')
        .split('')
        .map(Number)
        .reduce((acc, num) => (acc += num))

      const numTwo = pluseNumber(numOne)

      const firstNuber = dateArr.join('')[0]

      const numThree = numOne - firstNuber * 2

      const numFour = pluseNumber(numThree)

      const oneString = dateArr
        .join('')
        .split('')
        .map(Number)
      const twoString = [numOne, numTwo, numThree, numFour]
        .join('')
        .split('')
        .map(Number)
      // console.log('oneString', oneString)
      // console.log('twoString', twoString)
      const result = [...oneString, ...twoString]

      this.matrixNums = result
    },
    debag() {
      console.log('this.matrixNum', this.matrixNums)
    },
  },
  computed() {},
}
</script>

<style>
.form-control small {
  color: #e53935;
}

.form-control.invalid input {
  border-color: #e53935;
}
</style>
