import { createModel } from "@rematch/core";
import { RootModel } from ".";
import request from "../../utils/request";
import uploadImage from "../../utils/upload";

type HamsterCoverState = {
  id: string;
  coverImg: string;
  title: string;
  description: string;
};

export const coverModel = createModel<RootModel>()({
  state: {
    id: "",
    coverImg: "",
    title: "",
    description: "",
  } as HamsterCoverState,

  reducers: {
    SET_COVER: (state: HamsterCoverState, payload) => {
      return { ...state, ...payload };
    },

    SET_COVER_DETAIL: (state: HamsterCoverState, payload) => {
      const { key, value } = payload;
      return { ...state, [key]: value };
    },
  },

  effects: (dispatch) => ({
    async getCover() {
      const res = await request("/api/hamster/cover");
      if (res.status === 200) {
        this.SET_COVER(res.data);
      }
    },

    async updateCover(payload, state) {
      const { file } = payload || {};
      const {coverModel} = state;

      const prevState = coverModel;

      if (file) {
        const uploadRes = await uploadImage(file);

        const {data, status} = uploadRes;

        if(status === 200) {
          const {secure_url} = data;
          prevState.coverImg = secure_url;
        }
      }

      
    },
  }),
});
