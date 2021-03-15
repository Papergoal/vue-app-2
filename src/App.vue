<template>
    <div id="app">
        <div id="nav">
            <router-link class="header-button" to="/">Menu</router-link>
            <router-link class="header-button" to="/films">Films</router-link>
            <router-link class="header-button" to="/persos">Personnages</router-link>
            <router-link class="header-button" to="/lieux">Lieux</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    body {
        margin: 0;
        padding: 0;
    }

    #nav {
        padding: 30px;
        background-color: lightgreen;
    }

        #nav a {
            font-weight: bold;
            color: black;
            text-decoration: none;
        }

            #nav a:hover {
                background-color: #474;
            }

    .header-button {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        margin: 2px;
    }
    .header-button:active {
        background-color: lawngreen;
    }
</style>