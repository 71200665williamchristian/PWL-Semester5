<template>
    <div>
        <input placeholder="Username anda..." />
        <br>
        <button>Masuk</button>
    </div>
</template>

<script>
import firebase from "../firebaseConfig";
import {getFirestore, collection, addDoc, getDocs} from "firebase/firestore";
const db = getFirestore(firebase);

    export default {
        name: "LoginView",

        data(){
            return{
                listStorage: []
            }
        },

        methods: {
            async get(){
                getDoc(collection(db, "WilliamChristian"), {
                    username: this.username
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>