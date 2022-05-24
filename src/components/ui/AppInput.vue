<template>
  <div>
    <div :class="inputBorderState" class="border-b-2 relative my-4">
      <input
        ref="input"
        class="float-input block w-full appearance-none focus:outline-none bg-transparent"
        :type="type"
        :name="name"
        :value="modelValue"
        placeholder=" "
        :autocomplete="name"
        @input="change"
      />
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
import { onMounted, ref, computed, toRefs } from "vue";
export default {
  name: "AppInput",
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
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
    },
    isActiveFocus: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const input = ref(null);
    const { errorMessage, isActiveFocus } = toRefs(props);
    const change = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const inputBorderState = computed(() =>
      errorMessage.value
        ? "border-red-300 focus-within:border-red-500"
        : "border-gray-300 focus-within:border-blue-500"
    );
    onMounted(() => {
      if (isActiveFocus.value) input.value.focus();
    });
    return {
      change,
      input,
      inputBorderState,
    };
  },
};
</script>
