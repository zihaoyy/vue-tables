<template>
  <div id="table"></div>
</template>

<script>
export default {
  methods: {
    renderTable() {
      this.$table({
        data: [
          { name: "小明", age: 20, sex: "男" },
          { name: "小黄", age: 18, sex: "女"  },
          { name: "小红", age: 16 , sex: "女" },
          { name: "小蓝", age: 10, sex: "保密"  },
          { name: "小白", age: 9 , sex: "男" },
          { name: "小黑", age: 24, sex: "男"  },
          { name: "tom", age: 19 , sex: "男" },
          { name: "alex", age: 20, sex: "保密"  },
          { name: "smith", age: 22, sex: "男"  },
          { name: "jack", age: 32, sex: "男"  },
          { name: "ash", age: 30, sex: "女"  },
          { name: "king", age: 29, sex: "男"  },
          { name: "大白", age: 16, sex: "男"  },
          { name: "阿兰", age: 17 , sex: "保密" },
          { name: "阿莱", age: 30 , sex: "男" },
        ],
        pagination: {
          pageSize: [5, 10, 15],
        },
        columns: [
          {
            prop: "name",
            title: "姓名",
          },
          {
            prop: "age",
            title: "年龄",
          },
          {
            prop: "sex",
            title: "性别",
          },
        ],
      });
    },
  },
  mounted() {
    this.renderTable();
  },
};
</script>

<style lang="scss">
.tableCom {
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
table {
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin: 0 auto;
  thead {
    background: #eee;
  }
  td {
    text-align: center;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ccc;
  }
}
.pagination {
  margin: 15px auto 0;
  display: flex;
  justify-content: center;
  .selectPageSize {
    position: relative;
    .pageSizeModal {
      width: 60px;
      position: absolute;
      background: #eee;
      top: 22px;
      left: 0;
      li {
        height: 20px;
        cursor: pointer;
        text-align: center;
        &.on,
        &:hover {
          color: tomato;
        }
      }
    }
  }
}
.paginate {
  display: flex;
  button {
    width: 22px;
    height: 22px;
    cursor: pointer;
    outline: none;
    border: 1px solid #eee;
  }
  ul {
    display: flex;
    li {
      width: 20px;
      height: 20px;
      line-height: 20px;
      cursor: pointer;
      text-align: center;
      border: 1px solid #eee;
      margin-right: 3px;
      &.on {
        color: tomato;
      }
    }
  }
}
.showPageSizeModal {
  cursor: pointer;
}
</style>