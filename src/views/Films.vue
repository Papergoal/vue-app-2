<template>
    <div class="films">
        <h1>Liste des films ghibli</h1>
        <ul>  
            <v-flex d-flex>
                <v-layout wrap>
                    <v-flex md4 v-for="film in films" :key="film.id">
                        <v-card class="card-container">
                                {{ film.title }}<v-btn @click="deleteItem(item.id)">Delete</v-btn>
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
        name: "films",
        data: function () {
            return {
                films:[],
            };
        },
        async mounted() {
            await this.getFilms();
            console.log(this.films)
            
        },
        methods: {
            async getFilms() {
                try {
                    let response = await axios.get("https://ghibliapi.herokuapp.com/films");
                    this.films = response.data;
                    console.log(response.data)
                    console.log(this.films.length)
                }
                catch (err) {
                    console.log(err)
                } 
            },
        }
    }
</script>