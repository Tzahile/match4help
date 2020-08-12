<template>
  <div class="home">
    <main-content />
  </div>
</template>

<script>
// @ is an alias to /src
import mainContent from "@/components/mainContent.vue";

export default {
  name: "Home",
  components: {
    mainContent,
  },
};
</script>
