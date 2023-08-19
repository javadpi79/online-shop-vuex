import { createStore } from "vuex";
import productModule from "./modules/product";
import shopCart from "./modules/shopCart";
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        product: productModule,
        shopCart
    },
});