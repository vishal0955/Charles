import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../layout/Layout";
import AdminDashboard from "../components/dashboard/AdminDashboard";
import SuperAdminDashboard from "../pages/Super Admin/SuperAdminDashboard";
import ClientDashboard from "../components/dashboard/ClientDashboard";
import ManagerDashboard from "../components/dashboard/ManagerDashboard";
import EmployeeDashboard from "../components/dashboard/EmployeeDashboard";
import Login from "../authentication/Login";
import NotFound from "../authentication/NotFound";
import Todo from "../components/adminApplication/Todo/Todo";
import High_todo from "../components/adminApplication/Todo/High_todo";
import Medium_todo from "../components/adminApplication/Todo/Medium_todo";
import Low_todo from "../components/adminApplication/Todo/Low_todo";
import SuperAdminLayout from "../layout/SuperAdminLayout";
import Plans from "../pages/Super Admin/Plans";
import UserInfo from "../pages/Super Admin/UserInfo";
import OrderPlan from "../pages/Super Admin/OrderPlan";
import PlanRequest from "../pages/Super Admin/PlanRequest";
import Setting from "../pages/Super Admin/Setting";

const RoleBasedRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/not-found" element={<NotFound />} />

      <Route path="/superadmin" element={<SuperAdminLayout />}>
        <Route index element={<SuperAdminDashboard />} />
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="plans" element={<Plans />} />
        <Route path="user_info" element={<UserInfo />} />
        <Route path="order_plan" element={<OrderPlan />} />
        <Route path="plan_request" element={<PlanRequest />} />
        <Route path="settings" element={<Setting />} />
      </Route>

      <Route element={<Layout />}>
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todo"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <Todo></Todo>
            </ProtectedRoute>
          }
        />
        <Route path="/high" element={<High_todo></High_todo>}></Route>
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["client"]}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/Medium" element={<Medium_todo></Medium_todo>}></Route>
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["client"]}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/Low" element={<Low_todo></Low_todo>}></Route>
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["client"]}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoleBasedRoutes;
