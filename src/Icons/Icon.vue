<template>
  <div id="Icon">
    <p>Icon: {{ name }}</p>
    <!-- <div v-bind-:is="github"/>     -->
    <github/>
    <component :is="name" ></component>
    <!-- <p>icon</p> -->
    <!-- {{ icon }} -->
    <!-- <img :xlink:href="`../../assets/svg/${icon}.svg`"> -->
    <!-- <img :src="`../../assets/svg/${icon}.svg`" width="50" height="50" > -->
  </div>
</template>

<script>
const PATH = './GeneratedIcons' 
import github from './GeneratedIcons/github';
import linkedin from './GeneratedIcons/linkedin';

export default {
  name: 'Icon',
  props: ['name'],
  components: {
    github,
    linkedin
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#Icon {
  .img {
    height: 40px;
    width: 40px;
  }
}
</style>
