<template>
    <footer>
        <div class='container'>
            <div class='row'>
                <div class='col-sm-5'>
                    <h3 class='lead'>
                        <strong>Information</strong> and
                        <strong>Copyright</strong>
                    </h3>
                    <p>Powered by
                        <strong>Node.js, </strong>
                        <strong>Socket.io, </strong>
                        <strong>MongoDB</strong> and
                        <strong>Vue</strong> with
                        <strong>Vuex</strong> architecture.</p>
                    <!-- <p>You may view the<a href='https://github.com/vicentyang/vue_vote'>Source Code</a> behind this project on GitHub.</p> -->
                    <p>© 2017 Vicent Yang.</p>
                </div>
                <div class='col-sm-7 hidden-xs'>
                    <h3 class='lead'>
                        <strong>Leaderboard</strong> Top 5 Characters</h3>
                    <ul class='list-inline'>
                        <!-- {leaderboardCharacters} -->
                        <li v-for="(character, index) in top5CharacterList" :key="character.characterId">
                             <router-link :to="{name: 'character', params:{id: character.characterId}, query: {ename:character.ename }}">
                            <!-- <router-link :to="{name: 'character', params:{id: character.characterId}, query: {randomHeroId:character.randomHeroId}}"> -->
                                <!-- <img class='thumb-md' :src="'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'" /> -->
                                 <img class='thumb-md' :src="'./static/hero/' + character.ename + '.jpg'" />

                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    // name: 'footer',
    data() {
        return {

        }
    },

    computed: {
        ...mapGetters([
            'top5CharacterList'
        ])
    },

    methods: {
        ...mapActions([
            'getTopCharacterList'
        ])
    },

    mounted: function () {
        this.getTopCharacterList()
    },
}
</script>

<style>

</style>
