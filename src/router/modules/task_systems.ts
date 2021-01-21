export default {
    path: '/taskSystems',
    name: 'taskSystems',
    component: () => import('@/page/task_systems/index.vue'),
    meta:{requireAuth:true},
    children: [
        {
            path: "project", name:"project", component: () => import('@/page/task_systems/taskDetail/project.vue')
        },
        {
            path:"progresses",name: "progresses", component: () => import('@/page/task_systems/taskDetail/progresses.vue')
        },
        {
            path:"group", name: "group", component: () => import('@/page/task_systems/taskDetail/group.vue')
        },
        {
            path:"projectDetail", name: "projectDetail", component: () => import('@/page/task_systems/taskDetail/projectDetail.vue')
        }
    ]
}