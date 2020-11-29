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
    </div>
</template>

<script>
    import '~/assets/stylus/font.styl'
    import pokemons from '~/static/pokemons/get-all.json'
    import { mapGetters, mapMutations } from 'vuex'
    import Loader from '~/components/global/Loader'

    export default {
        components: {
            Loader
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
        }
    }
</script>

<style lang="stylus">
    :root
        --black: #000
        --white: #FFF
        --light_blue: #00C3FF
        --light_blue_v2: #C5EDFF
        --light_blue_v3: #74EBFF
        --light_blue_v4: #00DBFF
        --light_blue_v5: #ECFBFF
        --blue: #00B1FF
        --blue_v2: #0084F9
        --dark_blue: #0068C4
        --dark_blue_v2: #00305B
        --gray: #5C7285
        --red: #DC1C13
        --red_v2: #F07470
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
    	background-color: var(--light_blue)

    ::selection
        color: var(--white)
        background-color: var(--light_blue)

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
