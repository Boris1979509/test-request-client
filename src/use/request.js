import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useI18n } from "vue-i18n";
import api from "@/api";
import { useClearNotify } from "@/use/clearNotify";

export const useRequest = () => {
  const { t } = useI18n(); // translate
  const MIN_LENGTH = 3;
  const isButtonLoading = ref(false);
  const isActiveFocus = ref(true);
  const responseData = ref(null);

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(MIN_LENGTH, t("min", { name: t("name"), min: MIN_LENGTH }))
      .required(t("required", { name: t("name") })),
    email: yup
      .string()
      .required(t("required", { name: t("email") }))
      .email(t("valid email")),
    message: yup
      .string()
      .min(MIN_LENGTH, t("min", { name: t("message"), min: MIN_LENGTH }))
      .required(t("required", { name: t("message") })),
  });

  const { errors, handleSubmit, resetForm } = useForm({
    validationSchema,
  });

  const { value: name } = useField("name");
  const { value: email } = useField("email");
  const { value: message } = useField("message");

  const close = () => {
    useClearNotify(() => (responseData.value = null), 0);
  };

  const onSubmit = handleSubmit(async (data, actions) => {
    try {
      isButtonLoading.value = true;
      responseData.value = await api.requests(data);
      useClearNotify(() => (responseData.value = null));
      resetForm();
    } catch ({ errors }) {
      actions.setErrors(errors);
    } finally {
      isButtonLoading.value = false;
    }
  });

  return {
    onSubmit,
    name,
    email,
    message,
    errors,
    isActiveFocus,
    isButtonLoading,
    responseData,
    close,
  };
};
