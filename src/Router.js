import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Forgotpassword } from "./pages/forgotpassword/Forgotpassword";
import { Registration } from "./pages/registration/Registration";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Unauthorized } from "./components/layout/Unauthorized";
import { Authorized } from "./components/layout/Authorized";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { EditProfile } from "./pages/profile/EditProfile";
import { UploadForm } from "./pages/uploadform/UploadForm";

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Unauthorized />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
        <Route element={<Authorized />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/upload-form" element={<UploadForm />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
