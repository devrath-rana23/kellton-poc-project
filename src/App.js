import { useMemo, useState } from "react";
import { Router } from "./Router";
import { appStorageService } from "./utils/services/storage/Storage";
import { config } from "./utils/config/Config";
import { CommonLoader } from "./components/common/Loader/Loader";
import { AuthContext } from "./context";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const userDetails = appStorageService.local.get(config.appName);
  const [user, setUser] = useState(
    userDetails.access_token ? userDetails : null
  );
  const authContextValue = useMemo(() => ({ user, setUser }), [user]);
  return (
    <AuthContext.Provider value={authContextValue}>
      <CommonLoader.Component />
      <Router />
      <ToastContainer />
    </AuthContext.Provider>
  );
};
