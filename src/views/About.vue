<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field class="ma-1" v-model="number" label="Enter your number"></v-text-field>
        <v-text-field class="ma-1" v-model="name" label="Enter your name"></v-text-field>
        <v-col>
          <v-btn class="ma-1" depressed color="primary" v-on:click="postApi"> Create </v-btn>
          <v-btn class="ma-1" depressed color="primary" v-on:click="searchApi"> Search </v-btn>
          <v-btn class="ma-1" depressed color="primary" v-on:click="getApi"> Overview </v-btn>
        </v-col>
        <v-divider color="black"></v-divider>
        <v-col class="justify-left" v-for="(item, index) in arrayData" :key="index">
          <p v-if="on == 1">{{ item.id }} - {{ item.name }}</p>
          <v-btn
            class="ml-2"
            depressed
            color="primary"
            v-if="on == 1"
            v-on:click="deleteApi(index)"
          >
            Delete
          </v-btn>
          <p v-else>No search results.</p>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'About',
  data() {
    return {
      arrayData: [
        {
          id: '',
          name: '',
        },
      ],
      number: null,
      name: null,
      on: 1,
    };
  },
  created() {
    this.getApi();
  },
  methods: {
    getApi() {
      axios
        .get('http://localhost:3000')
        .then((res) => {
          (this.number = null), (this.name = null), (this.arrayData = res.data);
          console.log(res.data);
          this.on = 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    postApi() {
      axios
        .post('http://localhost:3000/post', { id: this.number, name: this.name })
        .then((res) => {
          (this.number = null), (this.name = null), (this.arrayData = res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchApi() {
      axios
        .post('http://localhost:3000/search', { id: this.number, name: this.name })
        .then((res) => {
          (this.number = null), (this.name = null), (this.arrayData = res.data);
          console.log(res.data);
          this.on = 1;
          if (this.arrayData[0].id == null && this.arrayData[0].name == null) {
            this.on = 0;
            console.log('no data');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteApi(index) {
      axios
        .delete(`http://localhost:3000/delete/${index}`)
        .then((res) => {
          console.log('index', this.index);
          this.arrayData = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
