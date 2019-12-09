import request from '@/utils/request';

export async function getGoods(p) {
  return request('/api/products', {
    method: 'GET',
    params: {
      ...p,
    },
  });
}
export async function syncSingle(id) {
  return request(`/api/products/${id}/sync`, {
    method: 'PUT',
  });
}
export async function clean(id) {
  return request(`/api/products/${id}/skus`, {
    method: 'DELETE',
  });
}
export async function cleanSku(id, skuId) {
  return request(`/api/products/${id}/skus/${skuId}`, {
    method: 'DELETE',
  });
}
export async function beginChangeP(p) {
  return request('/api/products/start-change-price', {
    method: 'PUT',
    data: {
      ...p,
    },
  });
}
export async function changeRule(p) {
  return request('/api/products/change-price-rule', {
    method: 'PUT',
    data: {
      ...p,
    },
  });
}
export async function changeToNine(p) {
  return request('/api/products/change-t-f-n', {
    method: 'PUT',
    data: {
      ...p,
    },
  });
}
export async function batchChange(p) {
  return request('/api/products/change-price', {
    method: 'PUT',
    data: {
      ...p,
    },
  });
}
export async function batchSync() {
  return request('/api/products/sync', {
    method: 'PUT',
  });
}
