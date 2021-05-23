<template>
  <button
    :type="type"
    :class="['button', `button_${className}`, { button_disabled: disabled }]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: "primary",
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/app.scss";

.button {
  padding: 8px 16px;
  border-radius: 28px;
  line-height: 20px;
  transition: 0.1s background-color ease-out;
  &_primary {
    background-color: $blue;
    color: #ffffff;
  }
  &_disabled {
    background-color: lighten($blue, 5%);
    cursor: not-allowed;
  }
  &:hover {
    background-color: lighten($blue, 5%);
    transition: 0.1s background-color ease-out;
  }
  &:focus {
    outline: none;
  }
}
</style>
