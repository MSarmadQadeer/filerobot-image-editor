<template>
  <div id="app">
    <img v-if="!openEditor" :src="url" @click="handleOpenEditor" />
    <FilerobotImageEditor
      v-if="openEditor"
      :src="url"
      @close="handleClose"
      @cmplete="handleComplete"
      @error="handleError"
      @beforeComplete="onBeforeComplete"
    />
  </div>
</template>

<script>
/* eslint-disable */
import FilerobotImageEditor from "./index";
export default {
  name: "App",
  components: {
    FilerobotImageEditor,
  },
  data() {
    return {
      openEditor: false,
      url: "https://picsum.photos/400/600",
    };
  },
  mounted() {},
  methods: {
    handleOpenEditor() {
      this.openEditor = true;
    },
    handleCloseEditor() {
      this.openEditor = false;
    },
    handleClose(status) {
      console.error('Close'+status)
      this.handleCloseEditor();
    },
    onBeforeComplete(element){
      this.url=element.canvas.toDataURL();
      // console.error(element.canvas.toDataURL())
    },
    handleComplete(element, file) {
      // console.log(url )
      this.url=element.canvas.toDataURL();
      
      this.handleCloseEditor();
    },
    handleError(error) {
      this.handleCloseEditor();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
