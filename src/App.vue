<template>
  <div class="container">
    <form class="card">
      <h1>Анкета на Vue разработчика!</h1>
      <!--      <div class="form-control" :class="{invalid: errors.name}">-->
      <!--        <label for="name">Как тебя зовут?</label>-->
      <!--        <input-->
      <!--            type="text"-->
      <!--            id="name"-->
      <!--            placeholder="Введи имя"-->
      <!--            v-model.trim="name"-->
      <!--        >-->
      <!--        <small v-if="errors.name">{{ errors.name }}</small>-->
      <!--      </div>-->

      <app-input placeholder="Введи имя" label="Как тебя зовут?"></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" max="70" v-model.number="age" />
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip" value="yes" /> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" name="trip" value="no" /> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" value="vuex" /> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" value="cli" /> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" value="router" /> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила нашей компании</span>
        <div class="checkbox">
          <label><input type="checkbox" /> С правилами согласен</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style>
.form-control small {
  color: #e53935;
}

.form-control.invalid input {
  border-color: #e53935;
}
</style>
