<template>
    <ul class='list-inline fix-ul'>
        <!-- {leaderboardCharacters} -->
        <li class="fix-summoner fadeInUp animated" v-for="(summoner, index) in summonerList.data">
            <div class="fix-img">
                <img :title="summoner.summoner_description" class='border' :src="'./static/summoner/' + summoner.summoner_id + '.jpg'" />
            <!-- <span>{{ming.ming_type}}</span> -->
            <!--<li>
                <strong>111</strong>
            </li>-->

            </div>
                <h6>{{summoner.summoner_rank}}</h6>
                <h5>{{summoner.summoner_name}}</h5>
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

<style scoped>
.border {
    border-radius: 50px;
    border:2px solid rebeccapurple;
}
.fix-ul {
    vertical-align: center;
    padding-top: 5%
}
.fix-summoner {
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
}
.fix-summoner:hover {
    /* padding: 2px; */
    color: red;
    /* border: 1px solid red; */
     /* background-color: #23b7f5; */
}
img:active {
  position: relative;
  top: 2px;
}

img {
  background-color: #fff;
  padding: 0;
  border-radius: 2px;
  border-color: #dee5e7;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
</style>
