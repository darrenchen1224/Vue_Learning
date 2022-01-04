<template>
    <div class = "header">
        <h4>{{msg}}</h4>
    </div>
</template>

<script>
export default {
    name : 'Header',
    props :{
        msg :{
            type: String,
            default: 'No Page',
        },
    },
}
</script>
