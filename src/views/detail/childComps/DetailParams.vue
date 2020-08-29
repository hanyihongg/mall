<template>
  <div class="params">
    <ul class="size-table">
      <li class="set" v-for="(item, index) in params.set" :key="index">
        <span class="key">{{item.key}}</span>
        <span class="value">{{item.value}}</span>
      </li>
    </ul>

    <div class="sizetheme">{{params.key}}：</div>

    <div v-if="params.table">
      <div v-if="params.table.length>1">
        <table class="table" v-for="index in params.table.length-1" :key="index">
          <tr class="minitem" v-for="(minitem,index) in params.table[index-1]" :key="index">
            <td class="bminitem" v-for="(bminitem,index) in minitem" :key="index">
              {{bminitem}}
              <span
                v-for="(otheritem,index) in params.table[params.table.length-1]"
                :key="index"
              >
                <span v-for="(ominitem,index) in otheritem" :key="index">{{ominitem.value}}</span>
              </span>
            </td>
          </tr>
        </table>
      </div>

      <div v-else>
        <table class="table" v-for="(otheritem,index) in params.table" :key="index">
          <tr class="minitem" v-for="(ominitem,index) in otheritem" :key="index">
            <td class="bminitem" v-for="(bominitem, index) in ominitem" :key="index">{{bominitem}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params {
  
  margin-top: 15px;
  font-size: 11px;
  padding: 2px;
  border-bottom: 2px solid #eee;
}
.params span {
  display: inline-block;
}
.params .set {
  padding: 10px 10px;
  border-top: 1px solid #eee;
}
.params .set span {
  display: inline-block;
}
.size-table {
  margin: 10px 0px;
}
.sizetheme {
  margin-top: 20px;
}
.key {
  margin-right: 30px;
}
.value {
  color: var(--color-high-text);
}

.table {
  color: var(--color-high-text);
  text-align: center;

}
.minitem {
  list-style: none;
  height: 35px;
  /* border: 1px solid #f00; */
}
.bminitem {
  float: left;
  margin: 10px 10px;
}
.bminitem:nth-child(1) {
  color: var(--color-text);
}
.ruleitem {
  height: 15px;
}
</style>