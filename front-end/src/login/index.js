let store = null;

const isLoggedIn = !!store.getState().getIn(['admin', 'regular']);

const getCurrentUser = () => store.getIn(['admin', 'regular'])

const updateStore = (nextStore) => {
  store = nextStore;
}

export default {
  isLoggedIn,
  getState,
  setState
}
