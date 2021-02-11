<template>
  <div class="card">
    <h1>Квадрат Пифагора (психоматрица) для рассматриваемой даты</h1>
    <table>
      <tr>
        <td>{{ one }}</td>
        <td>{{ two }}</td>
        <td>{{ three }}</td>
      </tr>
      <tr>
        <td>{{ four }}</td>
        <td>{{ five }}</td>
        <td>{{ six }}</td>
      </tr>
      <tr>
        <td>{{ seven }}</td>
        <td>{{ eight }}</td>
        <td>{{ nine }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
const filter = (arr, num) => {
  return arr.filter((n) => n === num).length
}
export default {
  props: ['numberMatrix'],
  mounted() {},

  computed: {
    one() {
      return filter(this.numberMatrix, 1)
    },
    two() {
      return filter(this.numberMatrix, 2)
    },
    three() {
      return filter(this.numberMatrix, 3)
    },
    four() {
      return filter(this.numberMatrix, 4)
    },
    five() {
      return filter(this.numberMatrix, 5)
    },
    six() {
      return filter(this.numberMatrix, 6)
    },
    seven() {
      return filter(this.numberMatrix, 7)
    },
    eight() {
      return filter(this.numberMatrix, 8)
    },
    nine() {
      return filter(this.numberMatrix, 9)
    },
  },
}
</script>

<style>
table {
  border: 1px solid black;
  width: 600px;
  height: auto;
}

td {
  border: 1px solid black;
  padding: 10px 10px;
  text-align: center;
}
</style>
