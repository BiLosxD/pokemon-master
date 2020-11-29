<template lang="html">
    <div :class="$style.layout">
        <div v-if="layout == 'list'">
            <div :class="$style.list">
                <nuxt-link :to="`/pokemon/${data.name}`" :class="$style.item" v-for="(data, key) in populatePokemons" :key="key">
                    <div :class="$style.item_top">
                        <img :data-src="data.details.sprites" :alt="data.name" v-lazy-load />
                    </div>
                    <div :class="$style.item_bottom">
                        <div :class="$style.name">
                            {{ data.name }}
                        </div>
                        <div :class="$style.order">
                            #{{ data.order }}
                        </div>
                        <div :class="$style.types">
                            <ul>
                                <li v-for="(type, key) in data.details.types">
                                    <span :class="$style.type" :style="`background-color: ${getTypeColor(type.type.name)};`">{{ type.type.name }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
        <div v-else>
            <!-- <table>
                <tbody>
                    <tr v-for="(data, key) in populatePokemons" :key="key">
                        <td>
                            <div :class="$style.first">
                                <img :data-src="data.details.sprites" :alt="data.name" v-lazy-load />
                                <div :class="$style.name">{{ data.name }}</div>
                            </div>
                        </td>
                        <td>#{{ data.order }}</td>
                    </tr>
                </tbody>
            </table> -->
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import pokemons from '~/static/pokemons/get-all.json'

    export default {
        props: {
            layout: {
                type: String,
                default: 'list'
            },
            to_show: {
                type: Number,
                default: 20
            }
        },
        data () {
            return {
                pokemons: pokemons
            }
        },
        computed: {
            ...mapGetters('pokemon', {
                types: 'getTypes'
            }),
            populatePokemons () {
                const me = this
                let results = []
                for (let i = 0; i < me.to_show; i++) {
                    results.push(pokemons[i])
                }

                return results
            }
        },
        methods: {
            getTypeColor (payload) {
                const me = this
                let color = ''
                me.types.forEach((type, key) => {
                    if (payload == type.unique) {
                        color = type.color
                    }
                })
                return color
            }
        }
    }
</script>

<style lang="stylus" module>
    :local
        .layout
            .list
                display: flex
                flex-flow: row wrap
                align-items: center
                justify-content: flex-start
                .item
                    display: flex
                    flex-flow: column wrap
                    align-items: center
                    justify-content: space-between
                    text-align: center
                    flex: 0 0 calc(20% - 20px)
                    margin: 0 10px 20px
                    padding: 20px
                    border: 1px solid var(--blue)
                    box-shadow: 0 0 20px transparent
                    transition: .3s ease-in-out
                    &:hover
                        box-shadow: 0 0 20px rgba(59, 76, 202, 0.5)
                        transition: .3s ease-in-out
                        .item_top
                            img
                                transform: scale(1.25)
                                transition: .3s ease-in-out
                        .item_bottom
                            .name
                                color: var(--blue)
                                transition: .3s ease-in-out
                                &::before
                                    transform: scaleX(1)
                                    transform-origin: left
                                    opacity: 1
                                    visibility: visible
                                    transition: transform .3s ease-in-out
                    .item_top
                        flex: 0 0 auto
                        img
                            width: 75px
                            height: 75px
                            object-fit: contain
                            overflow: hidden
                            transform: scale(1)
                            transition: .3s ease-in-out
                    .item_bottom
                        flex: 0 0 auto
                        .name
                            position: relative
                            display: inline-block
                            margin-top: 20px
                            padding-bottom: 3px
                            font-family: 'Brandon-Bold'
                            font-size: 18px
                            color: var(--black)
                            text-transform: capitalize
                            transition: .3s ease-in-out
                            &::before
                                content: ''
                                position: absolute
                                left: 0
                                bottom: 0
                                width: 100%
                                height: 2px
                                transform: scaleX(0)
                                transform-origin: right
                                background-color: var(--blue)
                                transition: transform .3s ease-in-out
                        .order
                            margin: 5px 0
                            font-family: 'Brandon-Regular'
                            font-size: 14px
                            color: var(--gray)
                        .types
                            ul
                                list-style: none
                                margin: 0
                                padding: 0
                                display: flex
                                flex-flow: row wrap
                                align-items: center
                                justify-content: center
                                li
                                    margin: 0 5px
                                    .type
                                        color: var(--white)
                                        font-family: 'Brandon-Medium'
                                        font-size: 12px
                                        padding: 2.5px 7.5px
                                        text-transform: uppercase
                                        border: 1px solid var(--black)
</style>
