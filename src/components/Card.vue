<template>
    <div class="card">
        <h1>User ID : {{userid}}</h1>
        <h3>ID : {{id}}</h3>
        <h4>Title : {{title}}</h4>
        <h4>Complete : {{completed}}</h4>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        userid: {
            Number,
            default: 0,
        },
        id: {
            Number,
            default: 0,
        },
        title: {
            String,
            default: 'default',
        },
        completed: {
            Boolean,
            default: false,
        },
    },
}
</script>

<style scoped>
    .card{
        border: solid 2px black;
        width: 300px;
        margin: 10px;
    }
</style>