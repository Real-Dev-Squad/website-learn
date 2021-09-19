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
          Real DS - Learn Site
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
  justify-content: space-between;
}
ul li a {
  padding: 14px 16px;
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
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
