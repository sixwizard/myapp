// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取规则列表 GET /api/rule */
export async function getBatch(  id:string,options?: { [key: string]: any }) {
  return request<any>(`/api/batch/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function batch(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request('/api/batch', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/batch */
export async function updateBatch(options?: { [key: string]: any }) {
  return request('/api/batch', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/batch */
export async function addBatch(options?: { [key: string]: any }) {
  return request('/api/batch', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/batch */
export async function removeBatch(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/batch', {
    method: 'DELETE',
    ...(options || {}),
  });
}
