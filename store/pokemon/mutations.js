export default {
    fetchPokemon (state, payload) {
        state.pokemon = payload.pokemon
    },
    errorCatcher (state, payload) {
        state.has_error = payload.status
    }
}
