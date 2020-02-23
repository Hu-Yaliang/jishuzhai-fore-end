import Vue from 'vue'
import Router from 'vue-router'
// 登录注册路由
import LoginRegister from '@/components/LoginRegister'
import Login from '@/components/sub-components/Login'
import Register from '@/components/sub-components/Register'
// 主页路由
import HomePage from '@/components/HomePage'
import HomePart from '@/components/sub-components/HomePart'
import SortPart from '@/components/sub-components/SortPart'
import AboutMe from '@/components/sub-components/AboutMe'
import UserArticle from '@/components/sub-components/UserArticle'
import UserCenter from '@/components/sub-components/UserCenter'
import NewBlog from '@/components/sub-components/NewBlog'
// 后台路由
import BlogBack from '@/components/BlogBack'
import BlogControl from '@/components/sub-components/BlogControl'
import BlogData from '@/components/sub-components/BlogData'
import UserControl from '@/components/sub-components/UserControl'
import UserData from '@/components/sub-components/UserData'
import ReadBlog from '@/components/sub-components/ReadBlog'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/user',
      name: 'LoginRegister',
      component: LoginRegister,
      children: [{
        path: 'login',
        component: Login
      },{
        path: 'register',
        component: Register
      }]
    },{
      path: '/',
      name: 'HomePage',
      component: HomePage,
      redirect: '/home-part',
      children: [{
        path: 'home-part',
        component: HomePart
      },{
        path: '/sort-part',
        component: SortPart
      },{
        path: '/user-article',
        component: UserArticle
      },{
        path: '/about-me',
        component: AboutMe
      },{
        path: '/user-center',
        component: UserCenter
      },{
        path: '/new-blog',
        component: NewBlog
      },{
        path: '/read-blog',
        component: ReadBlog
      }]
    },{
      path: '/blog-back',
      component: BlogBack,
      redirect: '/user-control',
      children: [{
        path: '/user-control',
        component: UserControl
      },{
        path: '/user-data',
        component: UserData
      },{
        path: '/blog-control',
        component: BlogControl
      },{
        path: '/blog-data',
        component: BlogData
      }]
    }
  ]
})