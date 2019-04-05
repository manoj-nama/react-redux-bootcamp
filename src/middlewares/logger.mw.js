const logger = store => next => action => {
  console.log(action.type, "fired");
  next(action);
}

export default logger;