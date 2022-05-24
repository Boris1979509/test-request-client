<template>
  <app-toast
    v-if="responseData"
    :type="responseData.status"
    :message="responseData.message"
    @close="close"
  />
  <div class="flex flex-col justify-center">
    <div class="container mx-auto">
      <div class="flex justify-center items-center min-h-screen">
        <div
          class="p-5 w-full z-10 bg-white lg:w-1/2 overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-300 ring-inset"
        >
          <h1 class="pb-3">{{ $t("requst form") }}</h1>
          <form class="space-y-8" @submit.prevent="onSubmit">
            <app-input
              v-model.trim="name"
              :is-active-focus="isActiveFocus"
              label="name"
              name="name"
              :error-message="errors.name"
            />
            <app-input
              v-model.trim="email"
              label="email"
              type="email"
              name="email"
              :error-message="errors.email"
            />
            <app-textarea
              v-model="message"
              label="message"
              name="message"
              :error-message="errors.message"
            />
            <app-button :is-button-loading="isButtonLoading">{{
              $t("send")
            }}</app-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRequest } from "@/use/request";
export default {
  name: "App",
  setup() {
    return { ...useRequest() };
  },
};
</script>
