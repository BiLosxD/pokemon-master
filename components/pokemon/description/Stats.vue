<template lang="html">
    <div :class="$style.group" :style="`border: 1px solid ${$parent.getTypeColor()};`">
        <h2 :style="`background-color: ${$parent.getTypeColor()};`">Pokémon Stats</h2>
        <ul :class="$style.list">
            <li :class="[ $style.item, $style.alt ]" v-for="(data, key) in pokemon.stats" :key="key">
                <div :class="$style.label">
                    {{ data.stat.name }} <span :class="$style.stat" :style="`background-color: ${$parent.getTypeColor()}; width: ${data.base_stat}px;`"></span>
                </div>
                <div :class="$style.value">
                    {{ data.base_stat }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            pokemon: {
                type: Object/Array,
                default: null
            },
            pokemon_species: {
                type: Object/Array,
                default: null
            }
        }
    }
</script>

<style lang="stylus" module>
    :local
        .group
            flex: 0 0 48.66%
            margin-bottom: 40px
            h2
                text-align: center
                font-family: 'Brandon-Bold'
                font-size: 24px
                color: var(--white)
                padding: 10px
            .list
                list-style: none
                padding: 20px 20px 15px
                margin: 0
                .item
                    display: flex
                    flex-flow: row wrap
                    align-items: center
                    justify-content: space-between
                    border-bottom: 1px solid var(--extra_color)
                    padding-bottom: 10px
                    margin-bottom: 10px
                    &:last-child
                        margin-bottom: 0
                        border-bottom: unset
                    &.alt
                        .label
                            display: flex
                            flex-flow: row wrap
                            align-items: center
                            span
                                color: var(--blue_v2)
                        .stat
                            height: 12px
                            border: 1px solid var(--black)
                            border-radius: 5px
                            margin-left: 20px
                    .label
                        font-family: 'Brandon-Bold'
                        font-size: 18px
                        color: var(--black)
                        text-transform: capitalize
                    .value
                        text-transform: capitalize
                        color: var(--blue)
                        font-size: 16px
</style>
