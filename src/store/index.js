import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const testData = [];

for(let i=1; i<=10;i++){
    testData.push({id:i,name:`product #${i}`,category:`category${i%3}`,description:`this is Product #${i}`,price:i*50})
}

export default new Vuex.Store({
    strict: true,
    state: {
        products: testData,
        // 현재 번호 , 페이지사이즈, 
        productTotal: testData.length,
        currentPage : 1,
        pageSize : 4
    },
    getters:{
        // 데이터 한번에 가지고 옴.
        processedProducts : state=>{
            let index = (state.currentPage - 1)* state.pageSize;
            return state.products.slice(index,index+state.pageSize);
        },
        // 전체 페이지수
        pageCount: state => Math.ceil(state.productTotal/state.pageSize)
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
    }
})

