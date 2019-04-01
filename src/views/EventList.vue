<template>
    <div>
        <h1>Event List</h1>
        <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
        <Icon/>
    </div>


</template>

<script>
    import eventService from  '@/services/eventServices.js'
    import EventCard from '@/components/EventCard.vue'

    export default {
        components: {
            EventCard
        },
        data() {
            return {
                events: []
            }
        },
        created() {
            eventService.getEvents()
                .then(response => {
                    this.events = response.data;
                    console.log(response)
                })
                .catch(e => {
                    console.log("There was an error", e.response)
                })
        }
    }
</script>
