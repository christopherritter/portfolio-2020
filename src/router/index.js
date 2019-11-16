import Vue from "vue";
import VueRouter from "vue-router";
import Work from "../views/Work.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "work",
    component: Work
  },
  {
    path: "/projects/:project_slug",
    name: "project",
    component: () =>
      import(/* webpackChunkName: "project" */ "../views/Project.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/resume",
    name: "resume",
    component: () =>
      import(/* webpackChunkName: "resume" */ "../views/Resume.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to) => {
  gtag('config', 'UA-139579603-1', {
    page_path: to.fullPath,
    app_name: 'Web Portfolio 2020',
    send_page_view: true,
  });
});

export default router;
