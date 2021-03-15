<template>
    <div class="persos">
        <h1>Liste des personnages apparaissant dans les films ghibli</h1>
        <br>
        <br>
        <br>
        <ul>  
            <v-flex d-flex>
                <v-layout wrap>
                    <v-flex md6 v-for="perso in persos" :key="perso.id">
                        <v-card class="card-container">
                                {{ perso.name }}<v-btn @click="montrerFilm(perso.id)">Voir</v-btn>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "persos",
        data: function () {
            return {
                persos:[],
            };
        },
        async mounted() {
            await this.getPersos();
            console.log(this.persos)
            
        },
        methods: {
            async getPersos() {
                try {
                    let response = await axios.get(" https://ghibliapi.herokuapp.com/people ");
                    this.persos = response.data;
                    console.log(response.data)
                    console.log(this.persos.length)
                }
                catch (err) {
                    console.log(err)
                } 
            },

        }
    }
</script>