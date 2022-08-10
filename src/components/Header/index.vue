<template>
  <header>
    <ul>
      <li>
        <a
          href="#"
          class="logo"
        >
          <img
            width="35"
            height="35"
            src="@/../public/images/rds-logo.png"
            alt="Real Dev Squad Logo"
          >
        </a>
      </li>
      <li>
        <a href="https://www.realdevsquad.com">Home</a>
      </li>
      <li>
        <a href="https://welcome.realdevsquad.com/">Welcome</a>
      </li>
      <li>
        <a href="https://www.realdevsquad.com/events.html">Events</a>
      </li>
      <li>
        <router-link
          class="active"
          to="/"
        >
          Learn
        </router-link>
      </li>
      <li>
        <a href="https://members.realdevsquad.com/">Members</a>
      </li>
      <li>
        <a href="https://crypto.realdevsquad.com/">Crypto</a>
      </li>
      <li>
        <a href="https://status.realdevsquad.com/">Status</a>
      </li>
      <li>
        <button @click="openGithubConsentScreen">
          {{ buttonText }}
        </button>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import httpClient from '../../api/index';

// Reactive state
const buttonText = ref('Login With Github');

function openGithubConsentScreen() {
  window.location.replace('https://github.com/login/oauth/authorize?client_id=dd94eeb9c1e0420c026c');
}

onMounted(() => {
  httpClient.get('/users/self').then((res) => {
    buttonText.value = `Welcome ${res.data.github_display_name}`;
  }).catch((err) => {
    console.log(err);
  });
});

</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: left;
  background-color: #1d1283;
  padding: 0;
  margin: 0 0 1.5rem 0;
}
ul li a {
  padding: 14px 16px;
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  min-height: 35px;
}
ul:last-child {
  align-items:center;
}
ul li a img{
  margin-right: 8px;
}
.logo {
    font-weight: 600;
}
ul li a:hover {
  background-color: #fff3;
}
ul li a.active {
  color: #87d870;
}
</style>
