import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Dashboard1 from "@/pages/Dashboard1.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import TableList1 from "@/pages/TableList1.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import RecommendationTableList from "@/pages/RecommendationTableList.vue";
import PartnerProfile from "@/pages/PartnerProfile.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard1",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "dashboard1",
        name: "总览",
        component: Dashboard1
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "table1",
        name: "伙伴管理",
        component: TableList1
      },
      {
        path: "recommend-table-page",
        name: "伙伴推荐",
        component: RecommendationTableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "通知",
        component: Notifications
      },
      {
        path: "partner-profile/:id",
        name: "伙伴详细资料",
        component: PartnerProfile
      }
    ]
  }
];

export default routes;
