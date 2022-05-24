<template>
  <teleport to="body">
    <transition name="fade">
      <div class="fixed top-4 right-4 z-30">
        <div class="container">
          <div class="toast">
            <div
              :class="['toast-' + type]"
              class="flex items-center justify-center w-12"
            >
              <app-icon :icon="icon" class="h-6 w-6 text-white" />
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span
                  :class="['toast-title-' + type]"
                  class="font-semibold"
                  v-text="$t(title)"
                ></span>
                <p v-text="message"></p>
              </div>
            </div>
            <app-button-close @click="close" class="mr-2 mt-2" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { computed } from "vue";

export default {
  name: "AppToast",
  emits: ["close"],
  props: {
    type: {
      type: String,
      required: true,
      validate(value) {
        return ["success", "error", "info", "warning"].includes(value);
      },
    },
    message: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const toastMap = {
      error: {
        title: "alert label error",
        icon: "exclamation-circle",
      },
      success: {
        title: "alert label success",
        icon: "check",
      },
      info: {
        title: "alert label info",
        icon: "information-circle",
      },
      warning: {
        title: "alert label warning",
        icon: "information-circle",
      },
    };
    const title = computed(() => toastMap[props.type].title);
    const icon = computed(() => toastMap[props.type].icon);

    const close = () => {
      emit("close");
    };
    return {
      close,
      title,
      icon,
    };
  },
};
</script>
