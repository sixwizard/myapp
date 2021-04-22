// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取规则列表 GET /api/rule */
export async function review(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request('/api/review', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/review */
export async function updateReview(options?: { [key: string]: any }) {
  return request('/api/review', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/review */
export async function addReview(options?: { [key: string]: any }) {
  return request('/api/review', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/review */
export async function removeReview(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/review', {
    method: 'DELETE',
    ...(options || {}),
  });
}
