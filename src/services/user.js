import request from '@/utils/request';

export async function login(p) {
  return request('/phone/user/adminLogin', {
    method: 'POST',
    data: {
      ...p,
    },
  });
}
