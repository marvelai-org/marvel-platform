import toolHistorySlice from './toolHistorySlice';
import toolsSlice from './toolsSlice';

const actions = {
  ...toolsSlice.actions,
  ...toolHistorySlice.actions,
};

const reducers = {
  toolsReducer: toolsSlice.reducer,
  toolHistoryReducer: toolHistorySlice.reducer,
};

export { actions, reducers };
