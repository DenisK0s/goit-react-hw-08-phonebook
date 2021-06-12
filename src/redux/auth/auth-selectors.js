export const getIsAuthenticated = state => !!state.auth.token;

export const getUserName = ({ auth: { user } }) => user.name;
