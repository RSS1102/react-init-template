import http from '../http';
// 获取文章列表
export const getUser = (data: any) => {
  return http({
    url: '/User/users',
    method: 'post',
    data,
  });
};
