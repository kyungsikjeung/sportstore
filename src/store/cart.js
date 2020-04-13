export default {
    namespaced: true, // data.js 와 merge 된는것 방지
    state:{
        lines:[]
    },
    getters:{
        itemCount : state => state.lines.reduce((total,line)=>total+line.quantity,0),
        totalPrice: state => state.lines.reduce((total,line)=>total+(line.quality*line.product.price),0),
    },
    mutations:{
        addProduct(state,product){
            let line = state.lines.find(line=>line.product.id==product.id)
            if(line != null){// 기존에 상품에 담은 리스트가 있다면
                line.quantity++;
            }else{ // 없다면 quality 1로 설정
                state.lines.push({product:product, quality:1});
            }
        },
        changeQuality(state,update){
            update.line.quality = update.quality;
        },
        removeProduct(state,lineToRemove){
            let index = state.lines.findIndex(line=>line == lineToRemove);
            if(index>-1){
                state.lines.splice(index,1);
            }
        },
        setCartData(state,data){
            state.lines = data
        }
    },
    actions:{
        loadCartData(context){
            let data = localStorage.getItem("cart");
            if(data != null){
                context.commit("setCartData", JSON.parse(data))
            }
        },
        storeCartData(context){
            context.commit("setCartData", JSON.stringify(context.state.lines))
        },
        clearCartData(context){
            context.commit("setCartData",[])
        },
        initializeCart(context,store){
            context.dispatch("loadCartData");
            store.watch(state=>state.cart.lines, ()=>context.dispatch("storeCartData"),{deep:true});
        }
    }
}