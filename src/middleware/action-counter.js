export const actionCounter = store => {
  return next => {
    return action => {
      console.log(`Action qui passe`, action);
    };
  };
};
