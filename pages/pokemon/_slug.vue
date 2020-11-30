<template lang="html">
    <transition name="fade">
        <div v-if="loaded">
            <content-details :data="pokemon" :species="pokemon_species" />
        </div>
    </transition>
</template>

<script>
    import ContentDetails from '~/components/pokemon/ContentDetails'

    export default {
        components: {
            ContentDetails
        },
        data () {
            return {
                loaded: false,
                pokemon: null,
                pokemon_species: null
            }
        },
        methods: {
            initialization (event) {
                const me = this
                if (document.readyState != 'interactive') {
                    setTimeout( () => {
                        me.$store.commit('global/loader/checkLoader', { status: false })
                        me.loaded = true
                        document.body.classList.remove('no_scroll', 'no_click')
                    }, 1000)
                }
            }
        },
        mounted () {
            const me = this
            me.initialization()
        },
        async asyncData ({ $axios, store, params }) {
            await store.commit('global/loader/checkLoader', await { status: true })
            return $axios.get(`https://pokeapi.co/api/v2/pokemon/${params.slug}`).then(response => {
                return $axios.get(response.data.species.url).then(species => {
                    return {
                        pokemon: response.data,
                        pokemon_species: species.data
                    }
                }).catch(async error => {
                    await store.commit('global/catcher/populateCatcher', await {
                        status: true,
                        message: 'Oops! Something Went Wrong.'
                    })
                })
            }).catch(async error => {
                await store.commit('global/catcher/populateCatcher', await {
                    status: true,
                    message: 'Oops! Something Went Wrong.'
                })
            })
        },
        beforeMount () {
            window.addEventListener('load', this.initialization)
        },
        beforeDestroy () {
            window.removeEventListener('load', this.initialization)
        },
        head () {
            const me = this

            return {
                title: `${me.pokemon.name} | Coding Chiefs`
            }
        }
    }
</script>

<style lang="stylus" module>
</style>
