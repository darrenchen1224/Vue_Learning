<template>
  <div class="inforCard">
    <div>
      <input v-model="message" placeholder="" />
      <button v-on:click="clickbutton">click me</button>
      <p>資料數量: {{ sumData }}</p>
      <p>完成數量: {{ sumCompleted }}</p>
    </div>
    <div class="cardgroup">
      <Card
        v-for="(item, index) in cardinfo"
        :key="index"
        :userid="item.userId"
        :id="item.id"
        :title="item.title"
        :completed="item.completed"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import axios from 'axios';

export default {
  name: 'inforCard',
  components: { Card },
  data() {
    return {
      cardinfo: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: true,
        },
      ],
      a: 'delectus aut autem',
      message: null,
      sumCompleted: 0,
      sumData: 0,
    };
  },
  methods: {
    getApi() {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/`)
        .then((Response) => {
          this.cardinfo = Response.data;
          this.sumCompleted = 0;
          this.sumData = this.cardinfo.length;
          this.cardinfo.forEach((element) => {
            if (element.completed == true) {
              this.sumCompleted += 1;
            }
          });
          console.log('total', this.sumCompleted);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    clickbutton() {
      console.log('this.message:', this.message);
      if (this.message == null || this.message === '') {
        this.getApi();
      } else this.changeApi();
    },
    changeApi() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${this.message}/todos/`)
        .then((Response) => {
          this.cardinfo = Response.data;
          this.sumCompleted = 0;
          this.sumData = this.cardinfo.length;
          console.log(Response.data);
          this.cardinfo.forEach((element) => {
            if (element.completed == true) {
              this.sumCompleted += 1;
            }
          });
        })
        .catch((e) => {
          console.log('ERROR', e);
        });
    },
  },
  created() {
    this.getApi();
  },
};
</script>

<style scoped>
.cardgroup {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
</style>
