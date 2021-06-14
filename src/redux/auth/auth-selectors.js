export const getIsAuthenticated = state => state.auth.isAuthenticated;

export const getUserName = ({ auth: { user } }) => user.name;
