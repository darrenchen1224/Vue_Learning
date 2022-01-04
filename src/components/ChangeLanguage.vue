<template>
  <div class="changelanguage">
    <div class="col">
      <button type="text" class="button text">{{ language }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeLanguage',
  props: {
    language: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.button {
  width: 80px;
  height: 40px;
  margin-right: 10px;
  background: #008cba;
  border-radius: 6px;
}
.text {
  color: white;
}
</style>
