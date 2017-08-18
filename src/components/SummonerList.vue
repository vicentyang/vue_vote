<template>
    <ul class='list-inline'>
        <!-- {leaderboardCharacters} -->
        <li v-for="(summoner, index) in summonerList.data">
             <img class='thumb-md' :src="'./static/summoner/' + summoner.summoner_id + '.jpg'" />
            <!-- <span>{{ming.ming_type}}</span> -->
            <li>
                <strong>111</strong>
            </li>
            <!-- li 标签有问题么  -->
            <!-- <li>111</li> -->
        </li>
    </ul>
</template>

<script>
import summonerList from '../../static/data/summoner.json'
export default {
    data() {
        return {
            summonerList: {}
        }
    },
    mounted() {
        console.log('summonerList', summonerList)
        this.summonerList = summonerList
    }

}
</script>

<style>

</style>
