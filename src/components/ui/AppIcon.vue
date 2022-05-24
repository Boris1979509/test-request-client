<template>
  <component :is="icon + '-icon'" />
</template>

<script>
import {
  ExclamationCircleIcon,
  CheckIcon,
  InformationCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";

export default {
  name: "AppIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  components: {
    ExclamationCircleIcon,
    CheckIcon,
    InformationCircleIcon,
    XIcon,
  },
};
</script>
