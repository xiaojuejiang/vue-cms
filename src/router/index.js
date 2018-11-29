import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import homeComponent from '../pages/home/'
import memberComponent from '../pages/member/'
import shopcarComponent from '../pages/shopcar/'
import searchComponent from '../pages/search/'
import newsListConponent from '../pages/newsList/'
import newsInfoConponent from '../pages/newsInfo/'
import photoListConponent from '../pages/photoList/'
import photoInfoConponent from '../pages/photoInfo/'
import goodsListConponent from '../pages/goodsList/'
import goodsInfoConponent from '../pages/goodsInfo/'
import goodsDetailConponent from '../pages/goodsDetail/'
import goodsCommentConponent from '../pages/goodsComment/'


var router= new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeComponent},
    {path:'/member',component:memberComponent},
    {path:'/shopcar',component:shopcarComponent},
    {path:'/search',component:searchComponent},
    {path:'/home/newsList',component:newsListConponent},
    {path:'/home/newsInfo/:id',component:newsInfoConponent},
    {path:'/home/photoList',component:photoListConponent},
    {path:'/home/photoInfo/:id',component:photoInfoConponent},
    {path:'/home/goodsList',component:goodsListConponent},
    {path:'/home/goodsInfo/:id',component:goodsInfoConponent,name:'home/goodsInfo'},
    {path:'/home/goodsDetail/:id',component:goodsDetailConponent,name:'home/goodsDetail'},
    {path:'/home/goodsComment/:id',component:goodsCommentConponent,name:'home/goodsComment'}

  ],
  linkActiveClass:'mui-active',
  // mode:'history'
})

export default router
