// 导入组件
import Vue from 'vue';
import Router from 'vue-router';
// 登录
import login from '@/views/login';
// 首页
import index from '@/views/index';
/**
 * 基础菜单
 */
// 商品管理
import Goods from '@/views/goods/Goods';
// 机器信息管理
import Machine from '@/views/machine/Machine';
// 货道信息管理
import MachineAisle from '@/views/machine/MachineAisle';

// 案件管理
import LawCase from '../views/lawCase/LawCase';

// 监控查询
import druidLogin from '@/views/druid/login';

// 图表界面
import statistics from '@/views/charts/statistics';

import ProjectIndex from "../views/project/ProjectIndex";
// 启用路由
Vue.use(Router)

// 导出路由
export default new Router({
  routes: [{
    path: '/',
    name: '',
    component: login,
    hidden: true,
    meta: {
      requireAuth: false
    }
  }, {
    path: '/login',
    name: '登录',
    component: login,
    hidden: true,
    meta: {
      requireAuth: false
    }
  }, {
    path: '/index',
    name: '首页',
    component: index,
    iconCls: 'el-icon-tickets',
    children: [{
      path: '/goods/Goods',
      name: '商品管理',
      component: Goods,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/machine/Machine',
      name: '机器信息管理',
      component: Machine,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/machine/MachineAisle',
      name: '货道信息管理',
      component: MachineAisle,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/lawCase/lawCase',
      name: '案件管理',
      component: LawCase,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/project/projectIndex',
      name: '项目管理',
      component: ProjectIndex,
      meta: {
        requireAuth: true
      }
    },{
      path: '/druid/login',
      name: '监控查询',
      component: druidLogin,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/charts/statistics',
      name: '数据可视化',
      component: statistics,
      meta: {
        requireAuth: true
      }
    }]
  }]
})
