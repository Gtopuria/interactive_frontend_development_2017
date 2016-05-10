let actionCount = 0;
const ActionsPerMinuteLogger = () => next => action => {
  const result = next(action);
  const startCount = ++actionCount;
  setTimeout(() => {
    console.log(`Actions per minute: ${(actionCount - startCount) * 12}`);
  }, 5000);
  return result;
};

export default ActionsPerMinuteLogger;
