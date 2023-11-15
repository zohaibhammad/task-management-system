export const isLoggedIn = () => true;

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
