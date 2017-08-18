<template>
    <div class='container'>
        <h3 class='text-center'>Click on the portrait. Select your favorite.</h3>
        <div class='row'>
            <div v-for="(character, index) in characterList" :class="index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5'">
                <div class='thumbnail fadeInUp animated'>
                       <!-- <img @click = "vote(character)" :src="'http://image.eveonline.com/Character/' + character.characterId + '_512.jpg'" /> -->

                    <!-- <img @click = "vote(character)" class='thumb-md' :src="'./static/smallHeroImg/hero' + character.randomHeroId + '.jpg'" /> -->

                    <div class='caption text-center'>
                        <ul class='list-inline'>
                            <li>
                                <strong>Race:</strong> {{character.race}}</li>
                            <li>
                                <strong>Bloodline:</strong> {{character.bloodline}}</li>
                        </ul>
                        <h4>
                            <!-- <router-link to="/emoji">
                                <strong>{{character.name}}</strong>

                            </router-link> -->
                            <!-- <router-link :to="'/character/' + character.characterId">
                                <strong>{{character.name}}</strong>

                            </router-link> -->
                            <router-link :to="{name: 'character', params:{id: character.characterId}, query: {randomHeroId:character.randomHeroId}}">
                                <strong>{{character.randomHeroId}}</strong>

                            </router-link>
                        </h4>
                    </div>
                </div>
                <!-- <span>aaa</span> -->
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import {first, without, findWhere} from 'underscore';
import { mapGetters, mapActions } from 'vuex'
export default {
    // name:'Home',
    props: [

    ],

    data: function () {
        return {
            // characterList: this.$store.getters.characterList
        }
    },

    computed: {
        ...mapGetters([
            'characterList',
        ])
    },

    methods: {
        ...mapActions([
            'getTwoCharacters',
            'sendVote'
        ]),
        showHome() {
            console.log('Home.vue>>>24', 'showHome');
        },
        showDetail() {
            console.log('showDetail');
        },
        vote(character) {

            console.log('vote', character);
            var winner = character.characterId;
            var loser = first(without(this.characterList, findWhere(this.characterList, { characterId: winner }))).characterId;
            // HomeActions.vote(winner, loser);
            this.sendVote({winner, loser})

        }
    },
    mounted: function () {

        this.getTwoCharacters()
    }
}
</script>

<style scoped>
.fixHW {
    width: 512px;
    height: 512px;
}
</style>

