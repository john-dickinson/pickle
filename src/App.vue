<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="top-nav" v-if="enterComplete">
      <div class="flex">
        <div class="flex" @mouseenter="() => ( secretHover = true )" @mouseleave="() => ( secretHover = false )">
          <router-link to="/" class="heading">Nicole Ras</router-link>
          <img v-show="secretHover" class="hidden-img" src="https://pro2-bar-s3-cdn-cf5.myportfolio.com/16048c3b64ba2e50122e3fc333c2df96/6f3817b3-54fa-4d21-9e3b-4b90af4c0653_rwc_0x0x217x217x4096.png?h=03d63e839805e50d53fae8e9f4798371" alt="">
        </div>
        <div class="side-nav">
          <ul>
            <li v-for="(item, idx) in navItems" :key="idx" @mouseenter="(e) => setUnderline(e, idx)">
              <router-link :to="item.reference">{{ item.name }}</router-link>
            </li>
          </ul>
          <div class="underline" :style="`width: ${activeWidth}px; left: ${activeTranslation}px`"></div>
        </div>
      </div>
    </div>

    <!-- Entrance -->
    <Presite v-if="!enterComplete" :enter="enterSite" :entered="siteEntered" />

    <div v-if="enterComplete" class="main-body">
      <router-view />
    </div>
  </div>
</template>

<script>
import Presite from "@/components/Presite";
export default {
  name: "App",
  components: { Presite },
  data() {
    return {
      siteEntered: false,
      enterComplete: false,
      topNav: true,
      secretHover: false,
      activeWidth: 0,
      activeTranslation: 0,
      navItems: [
        {
          name: 'Home',
          reference: '/',
        },
        {
          name: 'Design',
          reference: '/design',
        },
        {
          name: 'Illustration',
          reference: '/illustrations',
        },
        {
          name: 'Prints',
          reference: '/prints',
        },
        {
          name: 'About',
          reference: '/about',
        },
        {
          name: 'Contact',
          reference: '/contact',
        },
      ]
    };
  },
  methods: {
    enterSite() {
      this.siteEntered = true;
      setTimeout(() => {
        this.enterComplete = true;
      }, 400);
    },
    setUnderline(e, idx) {
      const totalWidth = document.querySelector('.side-nav').offsetWidth;
      const items = [].slice.call(document.querySelectorAll('.side-nav li'));
      const passedValues = items.filter((width, index) => index < idx);

      this.activeTranslation = passedValues.reduce((total, current) =>
        (total + current.offsetWidth + 20), 0,
      );

      this.activeWidth = e.target.offsetWidth;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* padding: 50px; */
}

body {
  margin: 0;
  padding: 0;
}

h1,
h2 {
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

.underline {
  height: 4px;
  position: absolute;
  bottom: -18px;
  background: black;
  transition: all 200ms ease;
}

.hidden-img {
  position: absolute;
  width: 80px;
  left: 260px;
}

.heading {
  font-size: 58px;
  margin: 5px 0;
  /* font-weight: bold; */
}

a {
  /* color: red; */
  text-decoration: none;
  margin: 0;
  font-size: 28px;
  /* transition: all 300ms ease; */
}

a:visited {
  color: #2c3e50;
}

/* a:hover {
  transform: scale(0.9);
} */

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
  box-shadow: 0px 1px 5px rgba(0, 0, 0, .10);
}


.side-nav {
  margin-right: 100px;
  margin-left: auto;
  position: relative;
}

.main-body {
  display: flex;
  width: 100%;
  /* padding: 50px; */
  margin-top: 75px;
  /* margin: 0 auto; */
}
.main-body > div {
  width: 100%;
  padding: 20px 50px;
}
</style>
