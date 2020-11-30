<template lang="html">
    <div :class="$style.move" :style="`background-color: ${$parent.getTypeColor()};`">
        {{ replacer(move.move.name) }}
    </div>
</template>

<script>
    export default {
        props: {
            move: {
                type: Object/Array,
                default: null
            }
        }
    }
</script>

<style lang="stylus" module>
    :local
        .move
            margin: 0 5px 10px
            padding: 5px 10px
            font-family: 'Brandon-Medium'
            font-size: 14px
            text-transform: uppercase
            color: var(--white)
            border: 1px solid var(--black)
</style>
