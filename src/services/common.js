import request from '@/utils/request';

export async function getUser(p) {
  return request('/api/phone/user/pageUser', {
    method: 'GET',
    params: {
      ...p,
    },
  });
}
