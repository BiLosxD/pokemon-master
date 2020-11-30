<template lang="html">
    <transition name="fade">
        <div :class="$style.arrow" @click="backToTop()" v-if="viewport">
            <img src="data:image/png;base64,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" />
        </div>
    </transition>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data () {
            return {
                viewport: false
            }
        },
        methods: {
            ...mapActions('global/back-to-top', {
                backToTop: 'backToTop'
            }),
            scrollAnimate () {
                const me = this
                if (window.scrollY >= 100) {
                    me.viewport = true
                } else {
                    me.viewport = false
                }
            }
        },
        mounted () {
            const me = this
            me.scrollAnimate()
        },
        beforeMount () {
            window.addEventListener('scroll', this.scrollAnimate)
            window.addEventListener('load', this.scrollAnimate)
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.scrollAnimate)
            window.removeEventListener('load', this.scrollAnimate)
        }
    }
</script>

<style lang="stylus" module>
    :local
        .arrow
            position: fixed
            bottom: 20px
            right: 20px
            width: 75px
            height: 75px
            border-radius: 50%
            border: 2px solid var(--white)
            background-image: linear-gradient(90deg, var(--blue), var(--blue_v2))
            cursor: pointer
            transform: scale(1)
            transition: .3s ease-in-out
            img
                width: 50px
                height: 50px
                position: absolute
                top: 50%
                left: 0
                right: 0
                margin: 0 auto
                text-align: center
                width: auto
                transform: translateY(-50%)
            &:hover
                transform: scale(1.05)
                transition: .3s ease-in-out
</style>
