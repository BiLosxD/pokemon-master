export default {
    populatePokemons (state, payload) {
        payload.items.forEach((item, key) => {
            state.pokemons.push(item)
        })
    },
    errorCatcher (state, payload) {
        state.has_error = payload.status
    }
}
