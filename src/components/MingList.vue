<template>

<ul class='list-inline'>
                        <!-- {leaderboardCharacters} -->
    <li v-for="(ming, index) in mingList.data">
           <img class='thumb-md' :src="'./static/ming/' + ming.ming_id + '.png'" />
        <!-- <span>{{ming.ming_type}}</span> -->
        <li><strong>111</strong></li>
        <!-- li 标签有问题么  -->
        <!-- <li>111</li> -->
    </li>
</ul>

</template>

<script>
import mingList from '../../static/data/ming.json'
export default {
    data() {
        return {
            mingList: {}
        }
    },
    mounted() {
        this.mingList = mingList
        console.log('mingList', mingList)
    }

}
</script>

<style>

</style>
