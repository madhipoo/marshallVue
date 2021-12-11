<template>
  <div class="tab_pane">
    <div class="iframe-rwd d-none">
      <iframe
        src="https://forms.gle/jnKZS68ibonSnRPz8"
        width="100%"
        height=""
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Loading...</iframe>
    </div>
    <div class="mobile_link">
      <a
        href="https://forms.gle/jnKZS68ibonSnRPz8"
        target="_blank"
      >
        <p style="color: black;border: 1px solid black;padding: 5px;display: inline-block;">請按此連結填寫表單</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form3",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tab_content > .tab-pane {
  display: none;
}

.tab_content > .active {
  display: block;
}

.iframe-rwd {
  position: relative;
  height: 80vh;
  overflow: auto;
}

.iframe-rwd iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.mobile_link {
  display: none;
}

@media screen and (max-width: 767px) {
  .mobile_link {
    display: block;
  }
  .d-none {
    display: none;
  }
}
</style>
