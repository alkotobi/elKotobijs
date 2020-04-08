<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    <button @click="testing()">test</button>
    <button @click="logTestAny()">test any</button>
  </q-page>
</template>

<script>
import MNobject from "../classes/core/MNobject";
import MNfield from "../classes/core/MNfield";
export default {
  methods: {
    testing() {
      let obj = new MNobject();
      obj.getSqlFields();
    },
    testAny() {
      
      return  typeof 5
    },
    logTestAny() {
      console.log(this.testAny());
    }
  }
};
</script>
