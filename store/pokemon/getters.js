export default {
    getPokemon (state) {
        return state.pokemon
    },
    getTypes (state) {
        return state.types
    },
    getPerPage (state) {
        return state.per_page
    },
    hasError (state) {
        return state.has_error
    }
}
