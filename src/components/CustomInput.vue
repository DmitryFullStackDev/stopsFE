<template>
  <div class="form-floating mx-2 position-relative">
    <input
        type="text"
        class="form-control fs-8"
        id="floatingInput"
        placeholder=" "
        @keydown.enter="handleEnter"
        v-model="inputValue"
    />
    <label for="floatingInput bg-white">
      <p class="fs-8 m-0 text-custom-grey-500 ">Your Label</p>
    </label>

    <svg class="position-absolute" width="16" height="16" viewBox="0 0 16 16" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1.83325 7.33337C1.83325 4.29581 4.29569 1.83337 7.33325 1.83337C10.3708 1.83337 12.8333 4.29581 12.8333 7.33337C12.8333 10.3709 10.3708 12.8334 7.33325 12.8334C4.29569 12.8334 1.83325 10.3709 1.83325 7.33337ZM7.33325 0.833374C3.7434 0.833374 0.833252 3.74352 0.833252 7.33337C0.833252 10.9232 3.7434 13.8334 7.33325 13.8334C8.9482 13.8334 10.4256 13.2444 11.5624 12.2696L13.6464 14.3536C13.8416 14.5489 14.1582 14.5489 14.3535 14.3536C14.5487 14.1583 14.5487 13.8418 14.3535 13.6465L12.2695 11.5625C13.2443 10.4257 13.8333 8.94832 13.8333 7.33337C13.8333 3.74352 10.9231 0.833374 7.33325 0.833374Z"
            fill="#9A9DA4"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, ref, watch} from 'vue'
import {debounce} from '@/helpers/debounce'
import {throttle} from '@/helpers/throttle'

const emit = defineEmits(['handleSearchChange'])
const inputValue = ref('')

const debouncedChangeHandler = debounce((newValue: string) => {
  emit('handleSearchChange', newValue);
}, 500)

const handleEnter = throttle(() => {
  emit('handleSearchChange', inputValue.value);
}, 500);

watch(inputValue, (newValue) => {
  debouncedChangeHandler(newValue)
})
</script>

<style scoped>
.form-floating {
  width: fit-content;
}

.form-floating > label {
  background: white;
  width: fit-content;
  padding: 0 5px;
  margin: 11px 11px;
  height: auto;
}

.form-floating > .form-control {
  width: 288px;
  box-shadow: none;
}

svg {
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.2s ease;
}

.position-relative:has(input:focus) svg {
  opacity: 0;
}
</style>
