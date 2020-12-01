<template lang="html">
    <div :class="$style.group" :style="`border: 1px solid ${$parent.getTypeColor()};`">
        <h2 :style="`background-color: ${$parent.getTypeColor()};`">Pokémon Training</h2>
        <ul :class="$style.list">
            <li :class="$style.item">
                <div :class="$style.label">
                    Catch Rate
                </div>
                <div :class="$style.value">
                    {{ pokemon_species.capture_rate }}
                </div>
            </li>
            <li :class="$style.item">
                <div :class="$style.label">
                    Base Happiness
                </div>
                <div :class="$style.value">
                    {{ pokemon_species.base_happiness }}
                </div>
            </li>
            <li :class="$style.item">
                <div :class="$style.label">
                    Base Experience
                </div>
                <div :class="$style.value">
                    {{ pokemon.base_experience }}
                </div>
            </li>
            <li :class="$style.item">
                <div :class="$style.label">
                    Habitat
                </div>
                <div :class="$style.value">
                    {{ replacer(pokemon_species.habitat.name) }}
                </div>
            </li>
            <li :class="$style.item">
                <div :class="$style.label">
                    Growth Rate
                </div>
                <div :class="$style.value">
                    {{ replacer(pokemon_species.growth_rate.name) }}
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
                    .label
                        font-family: 'Brandon-Bold'
                        font-size: 18px
                        color: var(--black)
                        text-transform: capitalize
                    .value
                        text-transform: capitalize
                        color: var(--blue)
                        font-size: 16px
        @media (max-width: 767px) and (min-width: 310px)
            .group
                flex: 0 0 100%
</style>
