// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取规则列表 GET /api/rule */
export async function execution(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request('/api/execution', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/review */
export async function updateExecution(options?: { [key: string]: any }) {
  return request('/api/execution', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/review */
export async function addExecution(options?: { [key: string]: any }) {
  return request('/api/execution', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/review */
export async function removeExecution(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/execution', {
    method: 'DELETE',
    ...(options || {}),
  });
}
