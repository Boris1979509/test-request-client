import axios from "@/plugins/axios";

export default {
  async requests(params) {
    return await axios.post("requests", params);
  },
};
