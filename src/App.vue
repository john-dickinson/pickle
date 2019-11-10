<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
      <div class="top-nav" v-if="enterComplete">
        <div class="flex">
          <h1>Pickle Ras</h1>
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
        </div>
      <!-- <h1>Pickle Ras</h1> -->
      </div>
      <!-- Entrance -->
      <Presite
        v-if="!enterComplete"
        :enter="enterSite"
        :entered="siteEntered"
      />

      <!-- <div class="flex" v-if="enterComplete">
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
      </div> 
      </div>-->

    <div v-if="enterComplete" class="main-body">
      <router-view />
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
      topNav: true,
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
  /* padding: 50px; */
}

body {
  margin: 0;
  padding: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  display: flex;
  flex-direction: row;
  padding: 0;
}

li {
  list-style: none;
  margin: 0 8px;
}

a {
  color: #42b983;
}

.flex {
  display: flex;
}

.top-nav .flex {
  align-items: center;
}

.top-nav {
  padding: 10px 50px;
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 999;
  border-bottom: 1px solid #ccc;
}

.side-nav {
  margin-right: 50px;
  margin-left: auto;
}

.main-body {
  display: flex;
  width: 100%;
  padding: 50px;
  margin-top: 75px;
  /* margin: 0 auto; */
}
.main-body > div {
  width: 100%;
}
</style>
