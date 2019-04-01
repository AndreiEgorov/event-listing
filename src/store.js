import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "./services/eventServices"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {id: 'abc123', name: 'Adam Jahr'},
        categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
        events: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: true },
            { id: 4, text: '...', done: false }
        ]
    },
    mutations: {
        // ADD_EVENT(context, payload)
        ADD_EVENT(state, event){
            console.log("ADD_EVENT", state)
            state.events.push(event)
        }
    },
    actions: {
        // createEvent(context obj, payload)
        createEvent(context, event ){
            console.log("creatEvent", context)
            EventService.postEvent(event)
            context.commit("ADD_EVENT", event)
        }
    },

    getters:{
        // to get length of cats we use getters.
        catLength: (state, context, commit) => {
            console.log("CONTEXT", context)
            console.log("State", state)
            console.log("Commie", commit)
            return state.categories.length
        },
        // to make dynamic getters (aka with params)
        getEventById: (state) => (id) => {
            return state.events.find(event => event.id === id)
        }
    }
})
