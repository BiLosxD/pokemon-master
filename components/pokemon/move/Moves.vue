<template lang="html">
    <div :class="[ $style.move, (specific_move.toggled) ? $style.toggled : '' ]" :style="`border: 1px solid ${$parent.getTypeColor()};`" v-if="loaded">
        <div :class="$style.top" :style="`background-color: ${$parent.getTypeColor()};`">
            <div :class="[ $style.name, $style.pointer ]" @click="toggle()">
                {{ replacer(move.move.name) }}
            </div>
            <div :class="$style.status">
                {{ specific_move.damage_class.name }}
            </div>
        </div>
        <div :id="`__m${unique}`" :class="$style.bottom">
            <div :class="$style.test">
                <label>Description</label>
                <p>{{ specific_move.effect_entries[0].effect }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            move: {
                type: Object/Array,
                default: null
            },
            unique: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                loaded: false,
                specific_move: null
            }
        },
        methods: {
            toggle () {
                const me = this
                if (me.specific_move.toggled) {
                    me.specific_move.toggled = false
                    document.getElementById(`__m${me.unique}`).style.height = 0
                } else {
                    me.specific_move.toggled = true
                    document.getElementById(`__m${me.unique}`).style.height = `${document.getElementById(`__m${me.unique}`).scrollHeight}px`
                }
            },
            async initialization () {
                const me = this
                await me.$axios.get(me.move.move.url).then(response => {
                    response.data.toggled = false
                    me.specific_move = response.data
                    me.loaded = true
                })
            }
        },
        async mounted () {
            const me = this
            await me.initialization()
        }
    }
</script>

<style lang="stylus" module>
    :local
        .pointer
            cursor: pointer
        .move
            flex: 0 0 calc(50% - 10px)
            margin: 0 5px 10px
            border: 1px solid var(--black)
            &.toggled
                .top
                    .name
                        &::before
                            transform: translateY(-50%) rotate(180deg)
                            transition: .3s ease-in-out
                .bottom
                    opacity: 1
                    visibility: visible
                    transition: .3s ease-in-out
            .top
                padding: 15px
                display: flex
                flex-flow: row wrap
                align-items: center
                justify-content: space-between
                .name
                    position: relative
                    font-family: 'Brandon-Bold'
                    font-size: 16px
                    text-transform: uppercase
                    color: var(--white)
                    padding-right: 20px
                    &::before
                        content: ''
                        position: absolute
                        top: 50%
                        right: 0
                        border-top: 7px solid var(--white)
                        border-left: 7px solid transparent
                        border-right: 7px solid transparent
                        transform: translateY(-50%) rotate(0deg)
                        transition: .3s ease-in-out
                .status
                    font-family: 'Brandon-Medium'
                    font-size: 14px
                    text-transform: uppercase
                    display: inline-block
                    padding: 10px 15px
                    background-color: var(--white)
                    color: var(--black)
                    border: 1px solid var(--white)
            .bottom
                opacity: 0
                visibility: hidden
                height: 0px
                overflow-y: hidden
                overflow-x: auto
                transition: .3s ease-in-out
                .test
                    padding: 15px
                    label
                        font-family: 'Brandon-Regular'
                        font-size: 16px
                        color: var(--black)
                    p
                        margin-top: 5px
                        font-family: 'Brandon-Light'
                        font-size: 14px
                        color: var(--black)
</style>
