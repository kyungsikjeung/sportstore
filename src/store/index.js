import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


// 테스트 데이터 리스트 삽입
const testData = [];

for(let i=1; i<=100;i++){
    testData.push({id:i,name:`product #${i}`,category:`category${i%3}`,description:`this is Product #${i}`,price:i*50})
}

// Vuex Store 페이징 처리 예제
export default new Vuex.Store({
    strict: true,
    state: {
        // 스테이트 - 현상태 표시(상품 리스트 , 상품의 수 , 현재 페이지, 페이지 사이즈)
        products: testData,
        productTotal: testData.length,
        currentPage : 1,
        pageSize : 4
    },
    getters:{
        // getters - 필터된 데이터 가지고옴
        // processedProducts - 현재 페이지의 제품들 가지고옴
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

