<template>
  <div>
    <div :class="inputBorderState" class="border-b-2 relative my-4">
      <textarea
        :id="name"
        class="float-input block w-full appearance-none focus:outline-none bg-transparent resize-none"
        :name="name"
        :value="modelValue"
        :class="{ 'is-invalid': errorMessage }"
        placeholder=" "
        row="1"
        @input="change"
      ></textarea>
      <label
        :class="{ 'is-invalid': errorMessage }"
        class="float-label -z-1 text-gray-500 absolute top-0 duration-300 origin-0"
        v-text="$t(label)"
      ></label>
    </div>
    <div
      v-if="errorMessage"
      class="-mt-3 text-xs text-red-500"
      v-text="errorMessage"
    ></div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "AppTextarea",
  props: {
    errorMessage: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const change = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const inputBorderState = computed(() =>
      props.errorMessage
        ? "border-red-300 focus-within:border-red-500"
        : "border-gray-300 focus-within:border-blue-500"
    );
    return { change, inputBorderState };
  },
};
</script>
