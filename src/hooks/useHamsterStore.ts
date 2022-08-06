import { Hamster } from "@prisma/client";
import create from "zustand";

type HamsterState = {
  hamsters: Hamster[];
  addHamsters: (payload: Hamster[]) => void;
  updateHamster: (hamster: Hamster) => void;
}

export const useHamsterStore = create<HamsterState>((set) => ({
  hamsters: [],
  addHamsters: (payload) => set((state) => ({
    hamsters: payload
  })),
  updateHamster: (hamster) => set((state) => ({
    hamsters: state.hamsters.map(item => {
      if(item.id === hamster.id) {
        return hamster
      } 
      return item;
    })
  }))
}))