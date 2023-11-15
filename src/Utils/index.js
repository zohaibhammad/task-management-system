export const isLoggedIn = () => !!localStorage.getItem("user");

export const logout = () => localStorage.removeItem("user");

export const getAllowedRoutes = (routes) => {
  const role = "ADMIN";
  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else {
      return _.intersection(permission, [role]).length;
    }
  });
};
