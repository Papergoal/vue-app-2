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
                    <v-expand-transition @click="montrerFilm(film.id)">Voir</v-expand-transition>
                </v-card>
            </v-flex>
        </v-layout>
    </v-flex>
</ul>