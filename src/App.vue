<template>
  <div id="app">
    <Top></Top>
    <Space></Space>
    <Middle></Middle>
  </div>
</template>

<script>
import Top from 'components/top'
import Space from 'base/space'
import Middle from 'components/middle'
export default {
  components: {
    Top,Space,Middle
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
