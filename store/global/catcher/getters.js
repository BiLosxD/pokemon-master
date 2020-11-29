export default {
    getCatcher (state) {
        let item = {
            message: state.message,
            triggered: state.triggered
        }
        return item
    }
}
