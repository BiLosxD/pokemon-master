export default {
    errorCatcher (state, payload) {
        state.has_error = payload.status
    }
}
