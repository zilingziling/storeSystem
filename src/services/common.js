import request from '@/utils/request';

export async function getUser(p) {
  return request('/api/phone/user/pageUser', {
    method: 'GET',
    params: {
      ...p,
    },
  });
}
export async function delUser(id) {
  return request(`/api/phone/user/delete/${id}`, {
    method: 'DELETE',

  });
}

export async function getStoreData(p) {
  return request('/api/phone/user/pageInventory', {
    method: 'GET',
    params: {
      ...p,
    },
  });
}
export async function pushM(p) {
  return request('/api/phone/user/push', {
    method: 'POST',
    data: {
      ...p,
    },
  });
}

export async function getStoreApply(p) {
  return request('/api/phone/user/pageWeb', {
    method: 'GET',
    params: {
      ...p,
    },
  });
}
export async function openStore(p) {
  return request('/api/phone/user/webCheck', {
    method: 'POST',
    data: {
      ...p,
    },
  });
}
export async function getGoods(p) {
  return request('/api/shoe/shoe', {
    method: 'GET',
    params: {
      ...p,
    },
  });
}
export async function delGoods(shoeNum) {
  return request(`/api/shoe/shoe/delete/${shoeNum}`, {
    method: 'DELETE',
  });
}
export async function switchHot (p) {
  return request('/api/shoe/shoe/isHot', {
    method: 'GET',
    params: {
      ...p,
    },
  });
}
export async function getModal (p) {
  return request('/api/phone/user/pageBackInventory', {
    method: 'GET',
    params: {
      ...p,
    },
  });
}
