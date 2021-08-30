/* eslint-disable indent */
import { USER_INFO } from './user';

const defaultState = {
  userInfo: {},
};

export default (state = defaultState, action) => {
  // 就是一个方法函数
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: action.value,
      };
    default:
      return state;
  }
};
