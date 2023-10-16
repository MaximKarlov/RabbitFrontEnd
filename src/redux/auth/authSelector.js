export const getLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;

// export const getIsLoading = state => state.contacts.isLoading;
// export const getError = state => state.contacts.error;
export const authSelectors = {
  getLoggedIn,
  getUserName,
};
