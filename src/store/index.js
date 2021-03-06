import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// http request support (Product List , Category List)
import Axios from "axios";
const baseUrl = "http://localhost:3500";
const productsUrl = `${baseUrl}/products`;
const categoriesUrl = `${baseUrl}/categories`

import CartModule from "./cart";




// const testData = [];
// for (let i = 1; i <= 20; i++) {
//     testData.push({
//         id: i, name: `Product #${i}`, category: `Category ${i % 3}`,
//         description: `This is Product #${i}`, price: i * 50
//     })
// }
export default new Vuex.Store({
    strict: true,
    modules:{cart:CartModule},
    state: {
        categoriesData: [],
        //products: testData,
        //productsTotal: testData.length,
        products: [],
        productsTotal: 0,
        currentPage: 1,
        pageSize: 4,
        currentCategory: "전체"
    },
    getters: {
        productsFilteredByCategory: state => state.products
            .filter(p => state.currentCategory == "전체"
                || p.category == state.currentCategory),
        processedProducts: (state, getters) => {
            let index = (state.currentPage -1) * state.pageSize;
            return getters.productsFilteredByCategory
                .slice(index, index + state.pageSize);
        },
        pageCount: (state, getters) =>
            Math.ceil(getters.productsFilteredByCategory.length / state.pageSize),
        // categories: state => ["All",
        //     ...new Set(state.products.map(p => p.category).sort())]
        categories: state => ["전체", ...state.categoriesData]
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        },
        setCurrentCategory(state, category) {
            state.currentCategory = category;
            state.currentPage = 1;
        },
        setData(state, data) {
            state.products = data.pdata;
            state.productsTotal = data.pdata.length;
            state.categoriesData = data.cdata.sort();
        }
    },
    actions: {
        async getData(context) {
            let pdata = (await Axios.get(productsUrl)).data;
            let cdata = (await Axios.get(categoriesUrl)).data;
            context.commit("setData", { pdata, cdata} );
        }
    }
})