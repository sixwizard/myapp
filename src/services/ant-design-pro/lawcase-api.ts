// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取规则列表 GET /api/rule */
export async function lawcase(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request('/api/lawcase', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/lawcase */
export async function updateLawcase(options?: { [key: string]: any }) {
  return request('/api/lawcase', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/lawcase */
export async function addLawcase(options?: { [key: string]: any }) {
  return request('/api/lawcase', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/lawcase */
export async function removeLawcase(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/lawcase', {
    method: 'DELETE',
    ...(options || {}),
  });
}
