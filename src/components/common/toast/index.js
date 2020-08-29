
import Toast from 'components/common/toast/Toast'
import Vue from 'vue'
const obj = {}

obj.install = function () {

  //1.创建构造器
  const toastConstructor = Vue.extend(Toast)

  //2.使用new 构造一个组件对象
  const toast = new toastConstructor()

  //3.将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4.totse.$el 对应的就是div
  document.body.appendChild(toast.$el)


   //把它放在原型链上
   Vue.prototype.$toast = toast

}
export default obj