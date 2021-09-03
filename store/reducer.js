/* eslint-disable indent */
import { USER_INFO, FORM_LIST } from './user';

const defaultState = {
  userInfo: {},
  formList: [],
};

export default (state = defaultState, action) => {
  // 就是一个方法函数
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: action.value,
      };
    case FORM_LIST:
      return {
        ...state,
        formList: action.formList,
      };
    default:
      return state;
  }
};
