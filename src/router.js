import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

/**
 * ルーティングの設定
 */
export default new Router({
  mode: 'history',            //パスをhistoryで保持
  base: process.env.BASE_URL, //デフォルトは [/] から始まるパス。
  /**
   * 書くページへのルートを設定
   */
  routes: [
    {
      path: '/',    
      name: 'home',   // 名前で遷移先を指定できる
      component: Home // 上で読み込んだコンポーネント
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //
      // 引数のコメントは、コメントじゃないよ。webppackの設定だよ。
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
