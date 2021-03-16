<template>
    <div class="lieux">
        <h1>Liste des lieux apparaissant dans les films ghibli</h1>
        <br />
        <br />
        <br />
        <ul>
            <v-flex d-flex>
                <v-layout wrap>
                    <v-flex md6 v-for="lieu in lieux" :key="lieu.id">
                        <v-card tile class="card-container">
                            <v-card-title>
                                {{ lieu.name }}
                                <v-card-text>
                                    <br>
                                    Climat :  {{lieu.climate}} <br>
                                    Terrain : {{lieu.terrain}} <br>
                                </v-card-text>
                                <v-btn @click="montrerLieu(lieu.id)">Voir</v-btn>
                            </v-card-title>
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
        name: "lieux",
        data: function () {
            return {
                lieux:[],
            };
        },
        async mounted() {
            await this.getLieux();
            console.log(this.lieux)

        },
        methods: {
            async getLieux() {
                try {
                    let response = await axios.get(" https://ghibliapi.herokuapp.com/locations ");
                    this.lieux = response.data;
                    console.log(response.data)
                    console.log(this.lieux.length)
                }
                catch (err) {
                    console.log(err)
                }
            },

        }
    }
</script>