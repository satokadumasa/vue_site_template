<template>
  <div>
    <h3>Avalon</h3>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/users">Users</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
