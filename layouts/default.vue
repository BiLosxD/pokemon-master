<template lang="html">
    <div>
        <Nuxt />
        <!-- Loader -->
        <transition name="fade">
            <loader v-if="has_loaded" />
        </transition>
        <div class="" v-if="catcher.triggered">
            <div class="" @click="populateCatcher({ message: '', status: false })">
                {{ catcher.message }}
            </div>
        </div>
        <back-to-top />
    </div>
</template>

<script>
    import '~/assets/stylus/font.styl'
    import pokemons from '~/static/pokemons/get-all.json'
    import { mapGetters, mapMutations } from 'vuex'
    import Loader from '~/components/global/Loader'
    import BackToTop from '~/components/global/BackToTop'

    export default {
        components: {
            Loader,
            BackToTop
        },
        watch: {
            $route (to, from) {
                const me = this
                if (to.path == '/pokemon') {
                    me.$router.push('/')
                }
            }
        },
        computed: {
            ...mapGetters ({
                catcher: 'global/catcher/getCatcher',
                has_loaded: 'global/loader/loading'
            })
        },
        methods: {
            /**
             * Map global error catcher */
            ...mapMutations({
                populateCatcher: 'global/catcher/populateCatcher'
            })
        },
        mounted () {
            const me = this
            pokemons.forEach((item, i) => {
                item.shown = true
            })
            pokemons.sort((a, b) => parseInt(a.order) - parseInt(b.order))

        }
    }
</script>

<style lang="stylus">
    :root
        --black: #000
        --white: #FFF
        --blue: #3B4CCA
        --blue_v2: #7682DA
        --gray: #5C7285
        --red: #DC1C13
        --extra_color: #A1B1C2

    html
        -webkit-text-size-adjust: none
        -webkit-font-smoothing: subpixel-antialiased
        backface-visibility: hidden
        font-family: 'Brandon-Regular'

    *,
    *:before,
    *:after
        user-select: none
        box-sizing: border-box
        margin: 0
        word-break: break-word !important

    body
        position: relative
        overflow-x: hidden
        &.no_click
            pointer-events: none
        &.no_scroll
            overflow-y: hidden
        &::-webkit-scrollbar
            width: 20px
            background-color: var(--white)
        &::-webkit-scrollbar-track
            box-shadow: none
        &::-webkit-scrollbar-thumb
            background-color: var(--red)
            border: 6px solid rgba(0, 0, 0, 0)
            background-clip: padding-box
            border-radius: 50px

    ::-webkit-scrollbar-track
    	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1)
    	background-color: var(--white)
    	border-radius: 10px
    ::-webkit-scrollbar
    	width: 8px
    	height: 10px
    	background-color: var(--white)
    ::-webkit-scrollbar-thumb
    	border-radius: 10px
    	background-color: var(--red)

    ::selection
        color: var(--white)
        background-color: var(--red)

    textarea
        resize: vertical
        vertical-align: middle

    input,
    input:before,
    input:after,
    textarea,
    textarea:before,
    textarea:after,
    select,
    select:before,
    select:after
        -webkit-appearance: none
        border: none
        outline: none
        box-shadow: none
        user-select: initial

    // ::-webkit-input-placeholder
    //     color: var(--white)
    //     font-family: 'Nunito-Regular'
    //     font-size: 14px
    //     opacity: 0.7
    //     text-transform: none
    //
    // :-ms-input-placeholder
    //     color: var(--white)
    //     font-family: 'Nunito-Regular'
    //     font-size: 14px
    //     opacity: 0.7
    //     text-transform: none
    //
    // ::placeholder
    //     color: var(--white)
    //     font-family: 'Nunito-Regular'
    //     font-size: 14px
    //     opacity: 0.7
    //     text-transform: none

    button
        display: inline-block
        width: auto
        border: none
        outline: none
        box-shadow: none
        background-color: transparent

    h1,
    h2,
    h3,
    h4,
    h5
        font-weight: normal

    table
        width: 100%
        border-collapse: collapse

    svg,
    span
        vertical-align: middle

    img
        width: 100%
        height: auto
        vertical-align: middle
        object-fit: cover
        -webkit-user-drag: none

    a
        text-decoration: none

    .fade-enter-active,
    .fade-leave-active
        transition: all .3s ease-in-out

    .fade-enter,
    .fade-leave-to
        opacity: 0

    .slide-enter-active,
    .slide-leave-active
        transition: all .3s ease-in-out

    .slide-enter,
    .slide-leave-to
        opacity: 0
        transform: translateY(-20px)

    .page-enter-active,
    .page-leave-active
        transition: all .3s ease-in-out

    .page-enter,
    .page-leave-to
        opacity: 0
</style>
