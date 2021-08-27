<template>
  <header>
    <ul>
      <li>
        <a href="#" class="logo">
          <img
            width="35"
            height="35"
            src="@/../public/images/rds-logo.png"
            alt="Real Dev Squad Logo"
          />
          RDS - Learn Site
        </a>
      </li>
      <li v-for="(item, index) in navItems" :key="item.text" class="nav-item"
        :class="[index === 0 ? 'first': '']">
        <a :href="item.link" target="_blank" :class="[item.current ? 'active' : '']">
          {{ item.text }}
        </a>
      </li>
      <li class="nav-bookmarks">
        <Bookmarks />
      </li>
    </ul>
  </header>
</template>

<script>
import Bookmarks from '@/components/Bookmarks/index.vue';

const DataFn = () => ({
  navItems: [
    {
      text: 'Home',
      link: 'https://www.realdevsquad.com/',
    },
    {
      text: 'Welcome',
      link: 'https://welcome.realdevsquad.com/',
    },
    {
      text: 'Events',
      link: 'https://www.realdevsquad.com/events.html',
    },
    {
      text: 'Members',
      link: 'https://members.realdevsquad.com/',
    },
    {
      text: 'Crypto',
      link: 'https://crypto.realdevsquad.com/',
    },
    {
      text: 'Status',
      link: 'https://status.realdevsquad.com/',
    },
    {
      text: 'Learn',
      link: '/',
      current: true,
    },
  ],
});

export default {
  name: 'Header',
  components: {
    Bookmarks,
  },
  data: DataFn,
};
</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: left;
  background-color: #1d1283;
  padding: 0;
  margin: 0 0 1.5rem 0;
  flex-wrap: wrap;
}
ul li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #1d1283;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1em;
}
ul li a {
  display: block;
  border-radius: 0.5rem;
  color: #ffffff;
  text-align: center;
  padding: 5px 10px;
  text-decoration: none;
}
ul li a img {
  margin-right: 8px;
}
.logo {
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-left: 5px;
}
ul li:hover {
  background-color: #fff3;
}
ul li a.active {
  color: #87d870;
}
li.nav-item {
  margin: 0 8px;
  font-size: 0.97em;
  font-weight: 600;
}
li.nav-item.first {
  margin-left: 20px;
}
li.nav-bookmarks{
  margin-left: auto;
  margin-right: 5px;
}
</style>
