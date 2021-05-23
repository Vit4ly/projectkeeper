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
export default {
  name: "AppInput",
  emits: ["update:value"],
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
