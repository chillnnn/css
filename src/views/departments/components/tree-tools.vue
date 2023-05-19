<template>
  <el-row style="width:100%">
    <el-col :span="20">
      <span>{{ nodeData.name }}</span>
    </el-col>
    <el-col :span="4">
      <el-row>
        <el-col :span="12">{{ nodeData.manager }}</el-col>
        <el-col :span="12">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">操作
              <i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="新增">增加子部门</el-dropdown-item>
              <el-dropdown-item v-if="!isroot" command="删除">删除子部门</el-dropdown-item>
              <el-dropdown-item v-if="!isroot" command="修改">修改子部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import { delDepartmentsApi } from '@/api/departments'
export default {
  props: {
    nodeData: {
      type: Object,
      required: true,
      default: () => {}
    },
    isroot: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    }

  },
  methods: {
    async handleCommand(command) {
      // console.log(command)
      const res = await delDepartmentsApi(this.id)
      console.log(res)
    }
  }
}
</script>
