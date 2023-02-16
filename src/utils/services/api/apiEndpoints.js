export const apiEndpoints = {
  // Authentication APIs
  login: {
    url: "/login",
    method: "get",
  },
};

export const apiConstants = Object.keys(apiEndpoints).reduce((cb, iv) => {
  return { ...cb, [iv]: iv };
}, {});
