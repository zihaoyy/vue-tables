import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use({
  install(Vue) {
    Vue.prototype.$table = function ({ columns, data, pagination }) {
      let Com = Vue.extend({
        data() {
          return {
            columns,
            data,
            pageList: pagination.pageSize,
            dataList: [],
            currentPage: 1,
            total: 0,
            pageSize: 5,
            pageNum: 0,
            showPageSizeModal: false
          }
        },
        template: `
        <div class="tableCom">
          <table border="1">
            <thead>
              <tr>
                <td v-for="(item, index) in columns" :key="index" :prop="item.prop">{{item.title}}</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in dataList" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>{{item.sex}}</td>
              </tr>
            </tbody>
          </table>
          <div class="pagination">
            <span>共{{total}}条，</span>
            <div class="selectPageSize">
              <ul class="pageSizeModal" v-if="showPageSizeModal">
                <li v-for="(item, index) in pageList" :key="index" :class="pageSize===item?'on':''" @click="setPageSize(item)">{{item}}</li>
              </ul>
              <div
                class="showPageSizeModal"
                @click="setPageSizeModal" 
                >
                每页{{pageSize}}条，
              </div>
            </div>
            <div class="paginate">
              <button @click="changePage('dec')" :disabled="currentPage<=1">&lt;</button>
              <ul>
                <li v-for="(item, index) in pageNum" :key="index" :class="currentPage==index+1?'on':''" @click="changePage(item)">{{item}}</li>
              </ul>
              <button @click="changePage('inc')" :disabled="currentPage>=pageNum">&gt;</button>
            </div>
          </div>
        </div>
        `,
        methods: {
          // 获取数据总长度
          getTotal() {
            this.total = this.data.length
          },
          // 分页
          getPagination() {
            this.dataList = this.data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
            this.pageNum = Math.ceil(this.total / this.pageSize)
          },
          // 设置分页条数模态框
          setPageSizeModal() {
            this.showPageSizeModal = true
          },
          // 设置分页条数
          setPageSize(item) {
            this.pageSize = item
            this.showPageSizeModal = false
            this.getPagination()
          },
          changePage(type) {
            // 递减
            if (type === 'dec') {
              this.currentPage--
            } else if (type === 'inc') {
              // 递增
              this.currentPage++
            } else {
              // 点击页码切换
              this.currentPage = type
            }
            // 调用设置分页数据
            this.getPagination()
          }
        },
        mounted() {
          // 默认加载获取数据总长度
          this.getTotal()
          // 默认加载获取分页数据
          this.getPagination()
        },
      })
      new Com().$mount(document.getElementById('table'));
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
