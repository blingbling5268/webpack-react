// import { createStore } from 'redux'
// import reducer from './reducer'
// const store = createStore(reducer)

// export default store

import { createStore } from 'redux'; // 引入createStore方法
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
};

const myPersistReducer = persistReducer(persistConfig, reducer);

const store = createStore(myPersistReducer); // 创建数据存储仓库

export const persistor = persistStore(store);
export default store; // 创建数据存储仓库
