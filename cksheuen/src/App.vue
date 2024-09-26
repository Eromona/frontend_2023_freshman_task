<template>
    <div class="body">
        <div class="title">title</div>
        <Table></Table>
        <Detail></Detail>
    </div>
</template>
  
<script lang="ts" setup>
import Table from '@/components/Table.vue';
import Detail from '@/components/Detail.vue';
</script>
  


<style scoped lang='less'>
.title {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: (-50%);
}
</style>
<style>
* {
    padding: 0;
    margin: 0;
}

html,
body,
#app {
    height: 100vh;
    background-color: rgb(245, 245, 245);
}
</style>
