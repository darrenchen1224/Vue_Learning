<template>
  <div>
    <p
      class="d-flex justify-center"
      v-bind:class="[{ 'green-smFont': count === 0, 'red-bigFont': count === 10 }]"
    >
      {{ count }}
    </p>
    <p class="d-flex justify-center" :style="{ color: activeColor, 'font-size': fontSize }">
      Roman Number = {{ romancount }}
    </p>
    <v-col class="d-flex justify-center">
      <v-btn class="ma-1" depressed color="primary" v-on:click="increase" v-if="count < 10">
        +
      </v-btn>
      <v-btn class="ma-1" depressed color="primary" v-on:click="decrease" v-show="count > 0">
        -
      </v-btn>
    </v-col>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
      activeColor: 'green',
      fontSize: '12px',
    };
  },

  methods: {
    increase() {
      this.count += 1;
    },
    decrease() {
      this.count -= 1;
    },
  },

  watch: {
    count() {
      if (this.count == 10) {
        alert('10');
        this.activeColor = 'red';
        this.fontSize = '30px';
      } else if (this.count == 0) {
        alert('0');
        this.activeColor = 'green';
        this.fontSize = '12px';
      } else {
        this.activeColor = 'black';
        this.fontSize = '24px';
      }
    },
  },

  computed: {
    romancount() {
      const romanapp = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
      };
      return romanapp[this.count] || this.count;
    },
  },
};
</script>

<style scoped>
.red-bigFont {
  color: red;
  font-size: 30px;
}
.green-smFont {
  color: seagreen;
  font-size: 12px;
}
</style>
