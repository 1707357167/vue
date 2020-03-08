import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import("@/components/common/Home.vue");
const Dashboard = () => import("@/components/page/Dashboard.vue");
// const Icon = () => import("@/components/page/Icon.vue");
const BaseTable = () => import("@/components/page/BaseTable.vue")
const BaseForm = () => import("@/components/page/BaseForm.vue")
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: Home,
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: Dashboard,
                    meta: { title: '系统首页' }
                },
                // {
                //     path: '/icon',
                //     component: Icon,
                //     meta: { title: '自定义图标' }
                // },
                {
                    path: '/table',
                    component: BaseTable,
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: BaseForm,
                    meta: { title: '基本表单' }
                },
               
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                // {
                //     // 拖拽列表组件
                //     path: '/drag',
                //     component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                //     meta: { title: '拖拽列表' }
                // },
                // {
                //     // 拖拽Dialog组件
                //     path: '/dialog',
                //     component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                //     meta: { title: '拖拽弹框' }
                // },
                // {
                //     // 国际化组件
                //     path: '/i18n',
                //     component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                //     meta: { title: '国际化' }
                // },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
