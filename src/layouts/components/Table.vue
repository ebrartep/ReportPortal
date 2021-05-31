<template>
  <div class="awesome-table">
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="(obj, ind) in config" :key="ind">{{ obj.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in theData" :key="index">
          <!--<td> {{ index.name }} </td>-->
          <td v-for="(obj, ind) in config" :key="ind">{{ row[obj.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Table',
  props: ['theData', 'config'],
}
</script>
<style lang="scss">
.awesome-table {
border : 1px solid #999;
border-radius: 4px;
overflow: auto;
}
</style>
