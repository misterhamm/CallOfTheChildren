<template>
  <button
    :class="$style.button"
    v-on="$listeners"
  >
    <slot/>
  </button>
</template>
