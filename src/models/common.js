import {getGoods, getStoreApply, getStoreData, getUser} from '@/services/common';

export default {
  namespace: 'common',
  state: {
    user: {
      list: [],
      total: '',
      search: '',
    },
    storeData: {
      list: [],
      total: '',
      search: '',
    },
    storeApply: {
      list: [],
      total: '',
      search: '',
    },
    goods: {
      list: [],
      total: '',
      shoeName: '',
    },
  },
  effects: {
    *getUser({ p }, { call, put }) {
      const r = yield call(getUser, p)
      if (r.code === 0) {
        yield put({
          type: 'saveUser',
          payload: r.data,
        });
      }
    },
    *getStoreData({ p }, { call, put }) {
      const r = yield call(getStoreData, p)
      if (r.code === 0) {
        yield put({
          type: 'saveStoreData',
          payload: r.data,
        });
      }
    },
    *getStoreApply({ p }, { call, put }) {
      const r = yield call(getStoreApply, p)
      if (r.code === 0) {
        yield put({
          type: 'saveStoreApply',
          payload: r.data,
        });
      }
    },
    *getGoods({ p }, { call, put }) {
      const r = yield call(getGoods, p)
      if (r.code === 0) {
        yield put({
          type: 'saveGoods',
          payload: r.data,
        });
      }
    },
  },
  reducers: {
    saveUser(state, { payload }) {
      return {
        ...state, user: payload,
      }
    },
    saveStoreData(state, { payload }) {
      return {
        ...state, storeData: payload,
      }
    },
    saveStoreApply(state, { payload }) {
      return {
        ...state, storeApply: payload,
      }
    },
    saveGoods(state, { payload }) {
      return {
        ...state, goods: payload,
      }
    },
  },
}
