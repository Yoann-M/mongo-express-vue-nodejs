import Vue from 'vue'
import Router from 'vue-router'
// Components
import Home from '@/components/Home'
import Posts from '@/components/Posts/All'
import NewPost from '@/components/Posts/New'
import EditPost from '@/components/Posts/Edit'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/posts',
            name: 'Posts',
            component: Posts
        },
        {
            path: '/posts/new',
            name: 'NewPost',
            component: NewPost
        },
        {
            path: '/posts/:id',
            name: 'EditPost',
            component: EditPost
        }
    ]
})