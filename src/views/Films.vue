<template>
    <div class="films">
        <h1>Liste des films ghibli</h1>
        <br />
        <br />
        <br />
        <ul>  
            <v-flex d-flex>
                <v-layout wrap>
                    <v-flex md6 v-for="film in films" :key="film.id">
                        <v-card tile class="card-container">
                            <v-card-title>
                                {{ film.title }}
                            </v-card-title>
                            <v-card-text>
                                {{film.description}}
                                <br />
                                <br />
                                by {{film.producer}} in {{film.release_date}}
                            </v-card-text>
                            <v-btn @click="getFilmID(film.id)">Voir</v-btn>
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
            async getFilmID() {
                try {
                    await axios.get("https://ghibliapi.herokuapp.com/films/" + this.film.id);
                    console.log(this.films)
                }
                catch (err) {
                    console.log(err)
                }
            },
        }
    }
</script>