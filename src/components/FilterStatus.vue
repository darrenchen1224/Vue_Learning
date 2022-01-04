<template>
  <div class="filterstatus">
    <div class="col">
      <button type="text" class="button text">{{ status }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterStatus',
  props: {
    status: {
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
