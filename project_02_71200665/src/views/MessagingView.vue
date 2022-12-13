<template>
    <div class="kiri">
        <h5>Kirim pesan ke: </h5>
        <input type="text" placeholder="Username Teman..." v-model="username"/>
    </div>
    <br><br>
    <div class="kanan">
        <input type="text" placeholder="Ketik Pesan..." v-model="message"/>
        <button @click="add()">Kirim</button>
    </div>
</template>

<script>

    export default {
        name: "MessagingView",

    }
</script>

<style lang="scss" scoped>

</style>