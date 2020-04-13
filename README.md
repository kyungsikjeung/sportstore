# chapter5 : Pro Vue js 2 
## link https://link.springer.com/book/10.1007/978-1-4842-3805-9

# 내용
- 페이지당 필터 추가
- 카테고리 필터 추가

vue create freeboard  --default
cd freeboard
npm install axios@0.18.0
npm install vue-router@3.0.1
npm install vuex@3.0.1
npm install vuelidate@0.7.4
npm install bootstrap@4.0.0
npm install font-awesome@4.7.0
npm install --save-dev json-server@0.12.1
npm install --save-dev jsonwebtoken@8.1.1
npm install --save-dev faker@4.1.0

1. JSON SERVER 설치 
- data.js , authMiddleWare.js
-package.json(Script) 부분 변경
- npm run serve

2. 엔트리 포인트 선언
-라이브러리(bootstrap , fontAweSome) Import
-엔트리 Vue 파일 가지고 오기(Store.vue)

3. 컴포넌트  
Store.Vue (메인화면 ex-> index.html)
ProductList.vue 상품 리스트항목,
pageControls.vue - 리스트 페이징 처리
ShoppingCartLine.vue -  사용자가 담은 아이템 목록

src>store>index.js (리스트 VueStore 구현)
src>router>index.js (라우터 구현)
cart.js 모듈 구현

4. 게시판 기능
- 페이지당 (4,10,20) 건 에 대한 필터 추가.
- 카테고리별로 검색 기능 추가 
- 카테고리를 추가하면 1페이지로 다시 돌아간다.
- 페이지 버튼을 누르면 해당 페이지 데이터를 보여준다.
필터 -> 데이터 -> 해당 페이지 데이터 연산 
버튼을 누르는 순간 해당 페이지 숫자의 변경이벤트를 감지


6.라우터 설정
- src > router>index.js 에서 vue,vue-router import 후 Vue.use 후 export default new xxx({})
- main.js 에 Rendering 을 해줘야함. ex) new Vue(render:h=>h(app),router)
-App.vue 에 <router-view> 추가 , 기존의 Store.vue 제거.

7.카트(src>store>cart.js)
- namespaced: true 추가 (모듈화)
- 기능 : 추가 , 삭제 , 변경 (아이템항목, 혹은 수량)
- 총 아이템 수 , 총 가격 

8. ProductList에 담기 버튼 추가
-(index.js 리스트 구현에 모듈 추가),
- 모듈에 등록된 addProduct를 vuex mutations로 사용..
 ...mapMutations({ addProduct: "cart/addProduct" }),
-라우터 URL 변경

9. 사용자가 담은 아이템 목록 (Shopping)
PROP 으로 데이터로 받아 처리 
데이터 변경은 이벤트 ("quantity", "remove") emit











