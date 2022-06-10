<script setup lang="ts">
import {reactive} from "vue";
import Popover from "@components/popover.vue";

const state = reactive({popover: false});

function togglePopover(event: MouseEvent) {
  event.stopPropagation();
  state.popover = !state.popover;
}

function closePopover() {
  state.popover = false;
}
</script>

<template>
  <main class="relative w-full max-w-card mx-auto bg-white rounded-card overflow-hidden shadow-xl text-center sm:text-left lg:max-w-card-lg lg:flex lg:flex-row lg:overflow-visible">
    <h1 class="sr-only">Article preview component</h1>
    <img aria-hidden="true" draggable="false" class="flex-grow-0 flex-shrink-0 basis-auto lg:w-285 lg:object-cover lg:object-left lg:rounded-r-none lg:rounded-l-card" src="/src/images/drawers.jpg" alt="">
    <div class="pt-36 px-32 pb-20 lg:flex-1 lg:px-40 lg:py-32">
      <h2 class="text-16 font-bold text-very-dark-grayish-blue tracking-02 mb-16 lg:text-20">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
      <p class="text-13 font-medium text-desaturated-dark-blue tracking-01 mb-32">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
      <div class="flex flex-col items-center space-y-16 sm:space-y-0 sm:flex-row">
        <img draggable="false" class="flex-grow-0 flex-shrink-0 basis-auto w-40 h-40 rounded-full sm:mr-16" src="/src/images/avatar-michelle.jpg" alt="">
        <div class="flex-1">
          <h3 class="text-13 font-bold text-very-dark-grayish-blue tracking-01">Michelle Appleton</h3>
          <p class="text-13 font-medium text-grayish-blue tracking-01">28 Jun 2020</p>
        </div>
        <button
            aria-label="share"
            @click="togglePopover"
            class="flex-grow-0 flex-shrink-0 basis-auto flex justify-center items-center w-32 h-32 rounded-full transition-colors duration-300"
            :class="[state.popover ? 'bg-desaturated-dark-blue text-white' : 'bg-light-grayish-blue text-very-dark-grayish-blue',]"
        >
          <svg class="w-15 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13">
            <path fill="currentColor" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
          </svg>
        </button>
      </div>
    </div>
    <Transition>
      <Popover @close-popover="closePopover" v-if="state.popover" />
    </Transition>
  </main>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition-property: transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(50%);
}
</style>