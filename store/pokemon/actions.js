export default {
    async getAllPokemons ({ state, commit }) {
        await this.$axios.$get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1117').then(response => {
            if (response.count && response.count > 0) {
                response.results.forEach(async (result, key) => {
                    await this.$axios.$get(result.url).then(response => {

                    })
                })
            }
        }).catch(error => {
            commit('errorCatcher', { status: true })
        })
        // if (data.count && data.count > 0) {
        //     commit('populatePokemons', { items: data.results })
        // } else {
        // }
    }
}
