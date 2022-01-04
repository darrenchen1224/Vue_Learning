<template>
  <div class="container background">
    <div class="row">
      <div class="col">
        <div class="row text">
          <h2>Change Language</h2>
        </div>
        <div class="row">
          <ChangeLanguage :language="ch"></ChangeLanguage>
          <ChangeLanguage :language="en"></ChangeLanguage>
        </div>
        <div class="row">
          <v-divider class="white"></v-divider>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="row text">
          <h2>Filter Status</h2>
        </div>
        <div class="row">
          <FilterStatus :status="onduty"></FilterStatus>
          <FilterStatus :status="delay"></FilterStatus>
          <FilterStatus :status="ahead"></FilterStatus>
          <FilterStatus :status="ontime"></FilterStatus>
        </div>
        <div class="row">
          <v-divider class="white"></v-divider>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-3 text">
            <h2>Pick WarningBus</h2>
          </div>
          <div class="col-9">
            <button type="text" class="button2 text">Map Overview</button>
          </div>
        </div>
        <div class="row">
          <WarningBus
            v-for="(item, index) in warningbus"
            :key="index"
            :warningbus="item"
          ></WarningBus>
        </div>
        <div class="row"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ChangeLanguage from '../components/ChangeLanguage.vue';
import FilterStatus from '../components/FilterStatus.vue';
import WarningBus from '../components/WarningBus.vue';
export default {
  name: 'Controller',
  components: { ChangeLanguage, FilterStatus, WarningBus },
  data() {
    return {
      ch: 'CH',
      en: 'EN',
      onduty: 'Onduty',
      delay: 'Delay',
      ahead: 'Ahead',
      ontime: 'Ontime',
      warningbus: [
        {
          busnumber: '502',
          busline: 'FD-1223',
        },
        {
          busnumber: '503',
          busline: 'FD-1224',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .row {
  border: solid 3px;
}
.col {
  border: solid 1px red;
} */
.button1 {
  width: 80px;
  height: 40px;
  margin-right: 10px;
  background: #008cba;
  border-radius: 6px;
}
.text {
  color: white;
}
.button2 {
  width: 150px;
  height: 25px;
  background: #bcbcbc;
  border-radius: 6px;
  margin-right: 30px;
  position: relative;
  right: 40px;
  top: 5px;
}
.background {
  background: black;
  width: max-content;
}
</style>
