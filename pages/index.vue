<template lang="html">
    <div class="">
        {{ pokemons }}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters('pokemon', {
                pokemons: 'getPokemons',
                has_error: 'hasError'
            })
        },
        mounted () {
            const me = this
            if (me.has_error) {
                me.$store.commit('global/catcher/populateCatcher', {
                    message: 'Oops! Something Went Wrong.',
                    status: true
                })
            }
        },
        async asyncData ({ store }) {
            const me = this

            await store.dispatch('pokemon/getAllPokemons')
        }
    }
</script>

<style lang="stylus" module>

</style>
