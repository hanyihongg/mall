<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的</div>
    </nav-bar>

    <profile-info></profile-info>

    <order-act></order-act>
    <profile-core-entry></profile-core-entry>
    
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import ProfileInfo from "./childComps/ProfileInfo";
import OrderAct from './childComps/OrderAct';
import ProfileCoreEntry  from './childComps/ProfileCoreEntry'
export default {
  name: "Mine",
  components: {
    NavBar,
    ProfileInfo,
    OrderAct,
    ProfileCoreEntry
  },
};
</script>
<style scoped>
.nav-bar {
  color: #fff;
  background: var(--color-tint);
}
</style>