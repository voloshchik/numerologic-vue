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
export default {
  mounted() {
    console.log(this.nums)
  },
  data() {
    return {
      nums: 1112345326678,
    }
  },
  computed: {
    one() {
      const num = this.nums
        .toString()
        .split('')
        .map(Number)
        .filter((n) => n == 1).length
      return 111
    },
    two() {
      return 2
    },
    three() {
      return 3
    },
    four() {
      return 4
    },
    five() {
      return 5
    },
    six() {
      return 6
    },
    seven() {
      return 7
    },
    eight() {
      return 8
    },
    nine() {
      return 9
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
