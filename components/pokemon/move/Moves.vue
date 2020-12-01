<template lang="html">
    <div :class="$style.move" :style="`border: 1px solid ${$parent.getTypeColor()};`" v-if="loaded">
        <div :class="$style.top" :style="`background-color: ${$parent.getTypeColor()};`">
            <div :class="$style.name">
                {{ replacer(move.move.name) }}
            </div>
            <div :class="$style.status">
                {{ specific_move.damage_class.name }}
            </div>
        </div>
        <div :class="$style.bottom">
            <label>Description</label>
            <p>{{ specific_move.effect_entries[0].effect }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            move: {
                type: Object/Array,
                default: null
            }
        },
        data () {
            return {
                loaded: false,
                specific_move: null
            }
        },
        methods: {
            async initialization () {
                const me = this
                await me.$axios.get(me.move.move.url).then(response => {
                    console.log(response.data);
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
        .move
            flex: 0 0 calc(50% - 10px)
            margin: 0 5px 10px
            border: 1px solid var(--black)
            .top
                padding: 15px
                display: flex
                flex-flow: row wrap
                align-items: center
                justify-content: space-between
                .name
                    font-family: 'Brandon-Bold'
                    font-size: 18px
                    text-transform: uppercase
                    color: var(--white)
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
