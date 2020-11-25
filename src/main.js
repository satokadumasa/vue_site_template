import Vue from 'vue';
import App from './App.vue';
import router from './route'; /*routes.jsをインポート(ルート情報を書き込むファイル)*/

Vue.config.productionTip = false;

new Vue({
  router,   /*Vueをインスタンス化する際にrouterを渡す*/
  render: h => h(App),
}).$mount('#app');
