<template lang="html">
    <!-- Landing -->
    <div :class="$style.landing">
        <!-- Poke Layout -->
        <poke-layout :to_show="to_show" />
        <!-- Bottom -->
        <div :class="$style.bottom">
            <div :class="[ $style.button, $style.pointer ]" @click="loadMore()">
                <span>Load More</span>
            </div>
            <div class="here"></div>
        </div>
    </div>
</template>

<script>
    import PokeLayout from '~/components/layout/PokeLayout'

    export default {
        components: {
            PokeLayout
        },
        data () {
            return {
                loaded: false,
                to_show: 20
            }
        },
        methods: {
            loadMore () {
                const me = this
                me.to_show += 20
                me.$scrollTo('.here', {
                    offset: 100
                })
            },
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
        asyncData ({ store }) {
            store.commit('global/loader/checkLoader', { status: true })
        },
        beforeMount () {
            window.addEventListener('load', this.initialization)
        },
        beforeDestroy () {
            window.removeEventListener('load', this.initialization)
        }
    }
</script>

<style lang="stylus" module>
    :local
        .pointer
            cursor: pointer
        .landing
            width: 100%
            max-width: 1280px
            margin: 0 auto
            padding: 60px 0
            .bottom
                margin-top: 40px
                text-align: center
                .button
                    display: inline-block
                    position: relative
                    z-index: 1
                    padding: 10px 30px
                    font-family: 'Brandon-Medium'
                    text-transform: uppercase
                    font-size: 16px
                    color: var(--red)
                    background-color: var(--white)
                    border: 1px solid var(--red_v2)
                    border-radius: 10px
                    box-shadow: 0 0 20px transparent
                    transition: .3s ease-in-out
                    span
                        position: inherit
                        z-index: 1
                    &::before
                        content: ''
                        position: absolute
                        top: 0
                        left: 0
                        right: 0
                        bottom: 0
                        z-index: 0
                        background-image: linear-gradient(90deg, var(--red), var(--red_v2))
                        opacity: 0
                        border-radius: 10px
                        transition: .3s ease-in-out
                    &:hover
                        color: var(--white)
                        box-shadow: 0 0 20px rgba(220, 28, 17, 0.5)
                        transition: .3s ease-in-out
                        &::before
                            opacity: 1
                            transition: .3s ease-in-out
</style>
