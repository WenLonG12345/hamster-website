import { Models } from "@rematch/core";
import { coverModel } from "./cover";

export interface RootModel extends Models<RootModel> {
  coverModel: typeof coverModel
}

export const models: RootModel = { coverModel };
