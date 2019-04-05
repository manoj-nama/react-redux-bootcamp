const handleFnMiddleware = store => next => action => {
  if(typeof action === "function") {
    action(store, 10, 20);
  } else {
    next(action);
  }
}

export default handleFnMiddleware;