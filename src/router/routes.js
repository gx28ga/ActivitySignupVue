export default [
  {
    path: "/",
    component: () => import("@/views/IndexPage"),
    meta: { keepAlive: true },
    children: [
      {
        path: "",
        name: "activity",
        component: () => import("@/views/ActivityPage"),
        meta: { keepAlive: true }
      },
      {
        path: "mySignup",
        name: "mySignup",
        component: () => import("@/views/MySignupPage"),
        meta: { keepAlive: true }
      },
      {
        path: "my",
        name: "my",
        component: () => import("@/views/MyPage"),
        meta: { keepAlive: true }
      }
    ]
  },
  {
    path: "/activityDetail",
    name: "activityDetail",
    component: () => import("@/views/ActivityDetailPage")
  },
  {
    path: "/signupDetail",
    name: "signupDetail",
    component: () => import("@/views/SignupDetailPage")
  },
  {
    path: "/ticketPage",
    name: "ticketPage",
    component: () => import("@/views/TicketPage")
  }
];
