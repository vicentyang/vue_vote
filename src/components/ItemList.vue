<template>
    <ul class='list-inline'>
                            <!-- {leaderboardCharacters} -->
        <li v-for="(item, index) in itemList.data">
             <img class='thumb-md' :src="'./static/item/' + item.item_id + '.jpg'" />
            <!-- <span>{{ming.ming_type}}</span> -->
            <li><strong>111</strong></li>
            <!-- li 标签有问题么  -->
            <!-- <li>111</li> -->
        </li>
    </ul>
</template>

<script>
import itemList from '../../static/data/item.json'
export default {
    data() {
        return {
            itemList: {}
        }
    },
    mounted() {
        console.log('itemList', itemList)
        this.itemList = itemList
    }

}
</script>

<style>

</style>
