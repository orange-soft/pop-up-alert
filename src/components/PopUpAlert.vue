<template>
  <div v-show="isShowing" class="fixed z-40 top-0 left-0 h-screen w-screen bg-black opacity-25"
    @click.prevent="closeModal"></div>

  <div v-show="isShowing" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
    <Transition name="pop-up-transition">
      <div v-if="isShowing"
        class="w-[95vw] md:w-[400px] min-h-[300px] bg-white rounded-lg shadow-lg p-4 relative">

        <div class="absolute right-4 top-4">
          <div class="text-center cursor-pointer z-40 active:scale-90" @click.prevent="closeModal">
            <i class="fa fa-xmark fa-2xl text-stone-400"></i>
          </div>
        </div>

        <div class="text-center py-8">
          <i class="fa fa-5x" :class="`${logoTextColor} ${logoIcon}`"></i>
        </div>

        <div class="text-center font-medium text-lg">
          {{ alertTitleText }}
        </div>

        <div class="text-center py-4">
          {{ message }}
        </div>

        <div class="flex justify-center gap-x-4">
          <!--        <button v-if="showCancel" class="min-w-[120px] bg-red-500 text-white px-4 py-2 rounded-lg">-->
          <!--          Cancel-->
          <!--        </button>-->
          <button
            class="min-w-[120px] bg-green-500 text-white px-4 py-2 rounded-lg active:bg-green-700"
            @click.prevent="closeModal">
            OK
          </button>
        </div>

      </div>
    </Transition>
  </div>
</template>

<script setup>
import {computed} from 'vue';

const emit = defineEmits(['update:is-showing']);
const props = defineProps({
  type: {
    type: String,
    default: 'success',
  },
  title: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  isShowing: {
    type: Boolean,
    default: false,
  },
  showCancel: {
    type: Boolean,
  },
});

const logoTextColor = computed(() => {
  if (props.type === 'success') {
    return 'text-green-500';
  } else if (props.type === 'error') {
    return 'text-red-500';
  } else if (props.type === 'warning') {
    return 'text-yellow-500';
  } else {
    return 'text-blue-500';
  }
});

const logoIcon = computed(() => {
  if (props.type === 'success') {
    return 'fa-check-circle';
  } else if (props.type === 'error') {
    return 'fa-times-circle';
  } else if (props.type === 'warning') {
    return 'fa-exclamation-circle';
  } else {
    return 'fa-info-circle';
  }
});

const alertTitleText = computed(() => {
  if (props.title) {
    return props.title;
  }
  if (props.type === 'success') {
    return 'Success';
  } else if (props.type === 'error') {
    return 'Error';
  } else if (props.type === 'warning') {
    return 'Warning';
  } else {
    return 'Alert';
  }
});

const closeModal = () => {
  emit('update:is-showing', false);
};
</script>

<style scoped>
.pop-up-transition-enter-active {
  animation: bounce-in 0.3s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
