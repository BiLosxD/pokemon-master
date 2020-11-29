export default {
    populateCatcher (state, payload) {
        state.message = payload.message
        state.triggered = payload.status
    }
}
