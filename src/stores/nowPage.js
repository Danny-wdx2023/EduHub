import { defineStore } from "pinia";

export const useNowPageStore = defineStore("nowPage", {
    state: () => ({
        nowPage: ""
    }),
    actions: {
        // gotoRoute(page) {
        //     this.nowPage = page;
        // }
        /*
        functionName(param){
            this.varName = val;
        }
        */
    },
    persist: {
        storage: sessionStorage
    }
})