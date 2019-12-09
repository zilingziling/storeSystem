import request from '@/utils/request';

export async function getRecords(p) {
  return request('/api/changes/records', {
    method: 'GET',
    params: {
      ...p,
    },
  });
}
export async function getReason(p) {
  return request(`/api/changes/records/${p}`, {
    method: 'GET',
  });
}
export async function oneBundle(p) {
  return request(`/api/products/${p.productId}`, {
    method: 'PUT',
    data: p,
  });
}
export async function oneRelease(id) {
  return request(`/api/products/${id}/skus`, {
    method: 'DELETE',
  });
}
export async function expExcel(p) {
  return request('/api/changes/records/export-excel', {
    method: 'GET',
    params: {
      ...p,
    },
    responseType: 'blob'
  });
}
