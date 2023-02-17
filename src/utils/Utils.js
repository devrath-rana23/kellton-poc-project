import { config } from "./config/Config";
import { appStorageService } from "./services/storage/Storage";
import { constantText } from "./constants/ConstantText";

export const Logout = (callBack = () => {}) => {
  appStorageService.local.remove(config.appName);
  callBack(null);
  window.location.href = "/";
};

export const stringCount = (str) => {
  const wom = str.match(/\S+/g);
  if (isValidInput(str, constantText.STRING)) {
    return {
      charactersNoSpaces: str.replace(/\s+/g, "").length,
      characters: str.length,
      words: wom ? wom.length : 0,
      lines: str.split(/\r*\n/).length,
    };
  }
  return constantText.NOT_A_STRING;
};

export const trimString = (str) => {
  if (isValidInput(str, constantText.STRING)) {
    return str.trim();
  }
  return constantText.NOT_A_STRING;
};

export const transformString = (str, operation) => {
  if (isValidInput(str, constantText.STRING)) {
    switch (operation) {
      case constantText.CAPITALIZE:
        return trimString(str).toUpperCase();
      case constantText.LOWERCASE:
        return trimString(str).toLowerCase();
      default:
        return str;
    }
  }
  return constantText.NOT_A_STRING;
};

export const isValidInput = (input, inputType) => {
  switch (inputType) {
    case constantText.STRING:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.STRING}]`
      );
    case constantText.NUMBER:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.NUMBER}]`
      );
    case constantText.BOOLEAN:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.BOOLEAN}]`
      );
    case constantText.OBJECT:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.OBJECT}]`
      );
    case constantText.FUNCTION:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.FUNCTION}]`
      );
    case constantText.DATE:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.DATE}]`
      );
    case constantText.REGEXP:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.REGEXP}]`
      );
    case constantText.ARRAY:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.ARRAY}]`
      );
    case constantText.NULL:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.NULL}]`
      );
    case constantText.UNDEFINED:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.UNDEFINED}]`
      );
    case constantText.ERROR:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.ERROR}]`
      );
    default:
      return false;
  }
};
