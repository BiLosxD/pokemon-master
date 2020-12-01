<template lang="html">
    <div :class="$style.group" :style="`border: 1px solid ${$parent.getTypeColor()};`">
        <h2 :style="`background-color: ${$parent.getTypeColor()};`">Pokédex Data</h2>
        <ul :class="$style.list">
            <li :class="$style.item">
                <div :class="$style.label">
                    National No.
                </div>
                <div :class="$style.value">
                    {{ pokemon.order }}
                </div>
            </li>
            <li :class="$style.item">
                <div :class="$style.label">
                    Type
                </div>
                <div :class="$style.value">
                    <ul :class="$style.types">
                        <li v-for="(data, key) in pokemon.types">
                            <span :class="$style.type" :style="`background-color: ${$parent.getTypeColor(data.type.name)};`">{{ data.type.name }}</span>
                        </li>
                    </ul>
                </div>
            </li>
            <li :class="$style.item">
                <div :class="$style.label">
                    Species
                </div>
                <div :class="$style.value">
                    {{ $parent.getAttriburesOfPokemon('genera') }}
                </div>
            </li>
            <li :class="$style.item">
                <div :class="$style.label">
                    Height
                </div>
                <div :class="$style.value">
                    {{ pokemon.height }}
                </div>
            </li>
            <li :class="$style.item">
                <div :class="$style.label">
                    Weight
                </div>
                <div :class="$style.value">
                    {{ pokemon.weight }}
                </div>
            </li>
            <li :class="$style.item">
                <div :class="$style.label">
                    Abilities
                </div>
                <div :class="$style.value">
                    <ul :class="$style.abilities">
                        <li v-for="(data, key) in pokemon.abilities">
                            <span :class="$style.ability">{{ replacer(data.ability.name) }} {{ (data.is_hidden) ? '( Hidden )' : '' }}</span>
                        </li>
                    </ul>
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
                        .abilities
                            list-style: none
                            padding: 0
                            margin: 0
                            li
                                margin-bottom: 5px
                                text-align: right
                        .types
                            list-style: none
                            margin: 0
                            padding: 0
                            display: flex
                            flex-flow: row wrap
                            align-items: center
                            justify-content: center
                            li
                                margin: 0 2.5px
                                .type
                                    color: var(--white)
                                    font-family: 'Brandon-Medium'
                                    font-size: 12px
                                    padding: 2.5px 5px
                                    text-transform: uppercase
                                    border: 1px solid var(--black)
        @media (max-width: 767px) and (min-width: 310px)
            .group
                flex: 0 0 100%
</style>
