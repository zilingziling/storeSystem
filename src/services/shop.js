import request from '@/utils/request';

export async function getShop(id = '') {
  return request(`/api/products/${id}`, {
    method: 'GET',
  });
}
export async function getGoodsNum(p) {
  return request('/api/tb-shoes', {
    method: 'GET',
    params: {
      ...p,
    },
  });
}
export async function getSize(shoeNum) {
  return request(`/api/tb-shoes/${shoeNum}/sizes`, {
    method: 'GET',
  });
}
