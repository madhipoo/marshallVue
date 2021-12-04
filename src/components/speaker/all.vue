<template>
  <div>
    <Smart/>
    <Bluetooth/>
    <Portable/>
  </div>
</template>

<script>
import Bluetooth from '@/components/speaker/Bluetooth'
import Smart from '@/components/speaker/Smart'
import Portable from '@/components/speaker/Portable'
export default {
  name: "All",
  data() {
    return {
      
    };
  },
  components:{
    Bluetooth,
    Smart,
    Portable
  },
};
</script>

<style lang="scss">
</style>
