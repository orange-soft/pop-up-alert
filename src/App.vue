<template>
  <PopUpAlert :type="alertType" :message="alertMessage" v-model:is-showing="showPopup"/>

  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

    <div class="wrapper progress-bar">
      <HelloWorld msg="You did it!"/>
    </div>
  </header>

  <main>
    <TheWelcome/>
  </main>
</template>

<script setup>
import PopUpAlert from '@/components/PopUpAlert.vue';
import {onMounted, ref, watch} from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

const showPopup = ref(false);
const alertType = ref('success');
const alertMessage = ref('Hello World!');

// watch(showPopup, (value) => {
//   console.log('showPopup', value);
//   if (value === false) {
//     setTimeout(() => {
//       showPopup.value = true;
//     }, 3000);
//   }
// });

onMounted(() => {
  setTimeout(() => {
    alertType.value = 'warning';
    alertMessage.value = 'This is a warning message!';
    showPopup.value = true;
  }, 3000);
});
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
