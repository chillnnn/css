<template>
  <div>
    <el-card>
      <tree-tools :node-data="company" :isroot="true" />
      <el-tree :data="departs" :props="defaultProps">
        <template #default="{data}">
          <treeTools :id="id" :node-data="data" />
        </template>
      </el-tree>
    </el-card>
  </div>
</template>
<script>
import treeTools from './components/tree-tools.vue'
import { getDepartmentsApi } from '@/api/departments'
import { transListToTreeData } from '@/utils/index'
export default {
  components: {
    treeTools
  },
  data() {
    return {
      departs: [
        {
          name: '总裁办',
          manager: '曹操',
          children: [{ name: '董事会', manager: '曹丕' }]
        },
        { name: '行政部', manager: '刘备' },
        { name: '人事部', manager: '孙权' }
      ],
      defaultProps: {
        label: 'name',
        children: 'children'
      },
      company: { name: '江苏传智播客教育科技股份有限公司', manager: '负责人' },
      id: ''
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      const { data } = await getDepartmentsApi()
      console.log(data)
      this.departs = transListToTreeData(data.data.depts, '')
      this.company.name = data.data.companyName
      this.id = data.depts.id
      // console.log(data)
    }
    // transListToTreeData(list, searchVali) {
    //   const arr = []
    //   list.forEach(item => {
    //     if (item.pid === searchVali) {
    //       arr.push(item)
    //     }
    //   })
    //   arr.forEach(item => {
    //     const children = list.filter(obj =>
    //       obj.pid === item.id
    //     ) || []
    //     item.children = children
    //   })
    //   return arr
    // }

  }
}
</script>
