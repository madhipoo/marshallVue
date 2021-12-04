<template>
  <div>
    <Earcanal/>
    <Overear/>
    <Noise/>
    <Earmuff/>
    <Earbud/>
    <Wireless/>
  </div>
</template>

<script>
import Earcanal from '@/components/headphone/Earcanal'
import Overear from '@/components/headphone/Overear'
import Noise from '@/components/headphone/Noise'
import Earmuff from '@/components/headphone/Earmuff'
import Earbud from '@/components/headphone/Earbud'
import Wireless from '@/components/headphone/Wireless'
export default {
  name: "All",
  data() {
    return {
      
    };
  },
  components:{
    Earcanal,
    Overear,
    Noise,
    Earmuff,
    Earbud,
    Wireless,
  },
};
</script>

<style lang="scss">
</style>
