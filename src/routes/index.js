/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  {
    path: '/meal',
    name: 'meal.index',
    component: () => import('@/views/Meal/Index.vue'),
  },
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/views/Home/Index.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
];
