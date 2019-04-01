import Vue from 'vue'
import Vuex from 'vuex'

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
    mutations: {},
    actions: {},

    getters:{
        // to get length of cats we use getters.
        catLength: state => {
            return state.categories.length
        },
        // to make dynamic getters (aka with params)
        getEventById: (state) => (id) => {
            return state.events.find(event => event.id === id)
        }
    }
})
