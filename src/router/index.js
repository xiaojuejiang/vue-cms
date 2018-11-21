import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import homeComponent from '../pages/home/'
import memberComponent from '../pages/member/'
import shopcarComponent from '../pages/shopcar/'
import searchComponent from '../pages/search/'
import newsListConponent from '../pages/newsList/'
import newsInfoConponent from '../pages/newsinfo/'


var router= new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeComponent},
    {path:'/member',component:memberComponent},
    {path:'/shopcar',component:shopcarComponent},
    {path:'/search',component:searchComponent},
    {path:'/home/newsList',component:newsListConponent},
    {path:'/home/newsinfo/:id',component:newsInfoConponent},
  ],
  linkActiveClass:'mui-active'
})

export default router
