<template>
  <div class="warningbus">
    <div class="col">
      <button type="text" class="button text">
        {{ warningbus.busnumber }} <br />
        {{ warningbus.busline }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WarningBus',
  props: {
    warningbus: {
      type: Array,
      busnumber: '',
      busline: '',
    },
  },
};
</script>

<style scoped>
.button {
  width: 80px;
  height: 50px;
  margin-right: 10px;
  background: #008cba;
  border-radius: 6px;
}
.text {
  color: white;
}
</style>
