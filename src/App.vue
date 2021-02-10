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
    <app-table></app-table>
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
