<template>
    <div class="films">
        <h1>This is a film page</h1>
        <ul>
            <li v-for="film in films" :key="film.id">
                {{film.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "film",
        data: function () {
            return {
                id: "",
                title: "",
                original_title: "",
                original_title_romanised: "",
                description: "",
                director: "",
                producer: "",
                release_date: "",
                running_time: "",
                rt_score: "",
                people: [],
                species: [],
                locations: [],
                vehicles: [],
                url: ""
            };
        },
        async created() {
            this.getFilms();
            
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