export default {
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
