<template>
  <h1>Starting Monday with a little be of humor </h1>
  <section class="content-wrapper">
    <img alt="flying cat" src="https://www.bitcoinmarketjournal.com/wp-content/uploads/2021/03/Picture1.gif">
    <button class="x" @click="getGitHubRepos">
      Click to see data
    </button>
  </section>
  <ChildComponent :repos="repos" v-if="repos.length>0"></ChildComponent>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .content-wrapper {
    position: relative;
    width: fit-content;
    margin: 0 auto;
  }

  button {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>

<script>
  import ChildComponent from './components/ChildComponent.vue'

  export default {
    name: 'App',
    components: {
      ChildComponent
    },
    computed: {
      repos() {
        return this.$store.state.repos
      }
    },
    methods: {
      getGitHubRepos() {
        this.$store.dispatch('getRepos');
      }
    }
  }

</script>
