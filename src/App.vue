<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <h1>Pickle Ras</h1>

      <!-- Entrance -->
      <Presite
        v-if="!enterComplete"
        :enter="enterSite"
        :entered="siteEntered"
      />

      <div class="flex" v-if="enterComplete">
        <div class="side-nav">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/illustrations">Illustrations</router-link></li>
            <li><router-link to="/design">Design</router-link></li>
            <li><router-link to="/prints">Prints</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <div class="main-body">
          <router-view />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Presite from '@/components/Presite';
export default {
  name: 'App',
  components: { Presite },
  data() {
    return {
      siteEntered: false,
      enterComplete: false,
    };
  },
  methods: {
    enterSite() {
      this.siteEntered = true;
      setTimeout(() => { this.enterComplete = true; }, 400);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 50px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  display: flex;
  flex-direction: column;
  padding: 0;
}

li {
  list-style: none;
}

a {
  color: #42b983;
}

.flex {
  display: flex;
}

.side-nav {
  margin-right: 150px;
}

.main-body {
  display: flex;
  width: 100%;
  /* margin: 0 auto; */
}
.main-body > div {
  width: 100%;
}
</style>
