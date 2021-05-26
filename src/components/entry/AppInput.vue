<template>
  <div :class="className" class="inp">
    <label :for="id">
      <slot />
    </label>
    <input
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      :id="id"
      :type="type"
    />
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";

export default {
  name: "AppInput",
  emits: ["update:value"],
  setup() {
    return { v$: useVuelidate() };
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.invalid {
  border: #f44336;
  //color: #f44336;
}
.inp {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: rgba(51, 70, 99, 0.46);

  input {
    margin-top: 4px;
    width: 100%;
    height: 36px;
    border: 1px solid rgba(51, 70, 99, 0.2);
    border-radius: 5px;
  }
}
</style>
