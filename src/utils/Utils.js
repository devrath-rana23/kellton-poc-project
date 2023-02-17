import { config } from "./config/Config";
import { appStorageService } from "./services/storage/Storage";
import { constantText } from "./constants/ConstantText";
import { omit } from "lodash";

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
  return false;
};

export const trimString = (str) => {
  if (isValidInput(str, constantText.STRING)) {
    return str.trim();
  }
  return false;
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
  return false;
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
          `[object ${constantText.NUMBER}]` && !isNaN(input)
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

export const validateInput = (ev, field, error, setError = () => {}) => {
  const inputElement = ev.target.value;
  let validationObj = {};
  let newObj = {};
  switch (field) {
    case "name":
      validationObj = {
        isValid: stringCount(inputElement).charactersNoSpaces > 8,
        errorMessage: "Name should be of minimum length 8 characters",
      };
      if (!validationObj.isValid) {
        setError({ ...error, name: false });
      } else {
        newObj = omit(error, "name");
        setError({ ...newObj, default: true });
      }
      return validationObj;
    case "email":
      validationObj = {
        isValid:
          isValidInput(inputElement, constantText.STRING) &&
          /^[a-zA-Z.]{1,20}\@{1}[a-zA-Z]{0,10}\.[a-zA-Z]{2,3}$/.test(
            inputElement
          ),
        errorMessage: "Enter valid email",
      };
      if (!validationObj.isValid) {
        setError({ ...error, email: false });
      } else {
        newObj = omit(error, "email");
        setError({ ...newObj, default: true });
      }
      return validationObj;
    case "password":
      validationObj = {
        isValid:
          stringCount(inputElement).charactersNoSpaces > 8 &&
          stringCount(inputElement).charactersNoSpaces < 16 &&
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
            inputElement
          ),
        errorMessage:
          "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long",
      };
      if (!validationObj.isValid) {
        setError({ ...error, password: false });
      } else {
        newObj = omit(error, "password");
        setError({ ...newObj, default: true });
      }
      return validationObj;
    default:
      setError({ ...error, default: false });
      return {
        isValid: false,
        errorMessage: "Invalid input",
      };
  }
};
