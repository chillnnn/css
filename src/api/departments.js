import request from '@/utils/request'
export function getDepartmentsApi() {
  return request({
    url: '/company/department',
    methods: 'GET'
  })
}

// 删除
export function delDepartmentsApi() {
  return request({
    url: `/company/department/{id}`,
    methods: 'DELETE'
  })
}
