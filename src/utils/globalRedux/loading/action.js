const loading = (scope, isLoading) => ({
  type: `${scope}/SET_LOADING`,
  payload: {
    scope,
    loading: isLoading
  }
});
export default loading;
