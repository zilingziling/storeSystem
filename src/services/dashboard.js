import request from '@/utils/request';

export async function getIndex() {
  return request('/api/phone/user/systemIndex', {
    method: 'GET',
  });
}
