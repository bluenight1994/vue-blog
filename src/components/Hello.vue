<template>
  <div class="hello">

    <img src="../assets/Manhattan_Skyline_night.jpg">

    <h1>{{ msg }}</h1>

    <h2>{{ intro }}</h2>

    <h3>Master of Engineer in Computer Science @ Cornell</h3>

    <h3>Software Development Engineer @ Amazon</h3>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'I am Hong, I code my life from scratch',
      intro: '{Seattle, New York, Shanghai}'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
