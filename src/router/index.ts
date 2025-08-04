import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/Home-View.vue';
import JobView from '@/views/Job-View.vue';
import NotFoundView from '@/views/Not-Found-View.vue';
import JobsView from '@/views/Jobs-View.vue';
import AddJobView from '@/views/AddJobView.vue';
import EditJobView from '@/views/Edit-Job-View.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/job/:id',
      name: 'job',
      component: JobView,
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJobView,
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJobView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
