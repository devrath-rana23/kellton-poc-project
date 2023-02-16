import { config } from "./config/Config";
import { appStorageService } from "./services/storage/Storage";

export const Logout = (callBack = () => {}) => {
  appStorageService.local.remove(config.appName);
  callBack(null);
  window.location.href = "/";
};
