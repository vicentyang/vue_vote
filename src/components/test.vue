<template>
    <ul class='list-inline'>
        <!-- {leaderboardCharacters} -->
        <li v-for="(character, index) in top5CharacterList" :key="character.characterId">
            <router-link :to="'/character/' + character.characterId">
                <img class='thumb-md' :src="'./static/smallHeroImg/hero' + character.randomHeroId + '.jpg'" />

            </router-link>
        </li>
    </ul>
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
