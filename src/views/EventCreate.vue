<template>
    <div>
        <h1>Event Created by {{user}}</h1>
        <h1>There are {{catLength}} categories</h1>
        <!--get event with id of 1-->
        <p>{{getEventById(1)}}</p>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        // computed: {
        //     // get name from Vuex store
        //     userName() {
        //         return this.$store.state.user.name
        //     },
        //     userId(){
        //         return this.$store.state.user.name
        //     }
        // }

        // Note: to reduce amt of computed methods, we can use mapState, mapActions pkgs like so:
        //     1) import mapState
        //     2) create computed with mapState
        // computed: mapState({
        //     //we're passing state to the func to access state in vuex store
        //     userName: state => state.user.name,
        //     userId: state => state.user.id,
        //     categories: state => state.categories
        // })

        // or same but shorter to get the 1st level state fields :

        // computed: mapState({
        //     user: "user",
        //     categories: "categories"
        // })

        // or even shorter, put it into the array. The spread operator allows for adding local computed properties if needed (just always use as below)

        computed:{
            ...mapState(["user", "categories"]),
            catLength(){
                return this.$store.getters.catLength
            },


            // get events dynamically
            // getEvent() {
            //     return this.$store.getters.getEventById
            // }
            // we can also use mapGetters
            // 1) import mapGetters
            // 2) modify the func
            // 3) modify the template to "getEventById(2)"
            ...mapGetters(['getEventById'])

        }

    }


</script>

