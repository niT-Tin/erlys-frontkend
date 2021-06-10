import Vue from 'vue'
import Router from 'vue-router'
import vueRsource from 'vue-resource'

Vue.use(vueRsource);
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: login => require(['@/components/Login'], login)
    },
    {
      path: '/aadapter',
      name: 'AAdapter',
      component: Addapter => require(['@/components/admin/AAdapter'],Addapter),
      children:[
          {
            path: '/aarangement',
            name: 'Aarangement',
            component: aarangement => require(['@/components/admin/Arrangement'], aarangement)
          },
          {
            path: '/playerinfo',
            name: 'PlayerInfo',
            component: playinfos => require(['@/components/admin/PlayerInfo'], playinfos)
          },
          {
            path: '/refereeinfo',
            name: 'RefereeInfo',
            component: RefereeInfos => require(['@/components/admin/PlayerInfo'], RefereeInfos)
          }
      ]
    },
    {
      path: '/radapter',
      name: 'Radapter',
      component: Radapters => require(['@/components/referee/RAdapter'],Radapters),
      children:[
        {
          path: '/rarangement',
          name: 'Rarangement',
          component: rarangement => require(['@/components/referee/Arrangement'], rarangement)
        },
        {
          path: '/rplayerinfo',
          name: 'rPlayerInfo',
          component: rplayinfos => require(['@/components/referee/PlayerInfo'], rplayinfos)
        },
        {
          path: '/importgrade',
          name: 'ImportGrade',
          component: ImportGrade => require(['@/components/referee/ImportGrade'], ImportGrade)
        }
      ]
    },
    {
      path: '/error',
      name: 'Error',
      component: Errors => require(['@/components/Error'], Errors)
    }
  ]
})
