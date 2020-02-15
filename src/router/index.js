import Vue from 'vue'
import Router from 'vue-router'
import HomePart from '@/components/HomePart'
import AboutMe from '@/components/AboutMe'
import ReadBlog from '@/components/ReadBlog'
import ArticlePart from '@/components/ArticlePart'
import BlogPart from '@/components/BlogPart'
import SortPart from '@/components/SortPart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePart',
      component: HomePart
    },{
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe
    },{
      path: '/read-blog',
      name: 'ReadBlog',
      component: ReadBlog
    },{
      path: '/article-part',
      name: 'ArticlePart',
      component: ArticlePart
    },{
      path: '/blog-part',
      name: 'BlogPart',
      component: BlogPart
    },{
      path: '/sort-part',
      name: 'SortPart',
      component: SortPart
    }
  ]
})
