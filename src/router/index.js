import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/CreateComponent')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../components/test')
    },
    {
        path: '/Teacher',
        name: 'Teacher',
        component: () => import('../components/CreateTeacherComponent')
    },
    {
        path: '/viewStudents',
        name: 'viewStudents',
        component: () => import('../components/ListComponent')
    },
    {
        path: '/viewTeachers',
        name: 'viewTeachers',
        component: () => import('../components/TeacherListComponent')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../components/EditComponent')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
