<template>
    <div>aaa</div>
</template>
<script type="text/javascript">
    import { mapGetters, mapActions } from 'vuex'
    export default {
        // name:'Home',
        props: [

        ],

        data: function() {
            return {

            }
        },

        computed: {

        },

        methods: {
            ...mapActions([
                'getTwoCharacters'
            ]),
            showHome () {
                console.log('Home.vue>>>24', 'showHome');
            },
        },
        mounted: function() {
            this.getTwoCharacters()
        }
    }
</script>
