<template lang="html">
    <!-- Landing -->
    <div :class="$style.landing">
        <!-- Top -->
        <div :class="$style.top">
            <!-- List -->
            <div :class="$style.list">
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
                <div :class="$style.item" v-for="(data, key) in populatePokemons" :key="key">
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
                </div>
            </div>
        </div>
        <!-- Bottom -->
        <div :class="$style.bottom">
            <div :class="[ $style.button, $style.pointer ]" @click="loadMore()">
                <span>Load More</span>
            </div>
        </div>
    </div>
</template>

<script>
    import pokemons from '~/static/pokemons/get-all.json'
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        data () {
            return {
                loaded: false,
                to_show: 20,
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
            },
            loadMore () {
                const me = this
                me.to_show += 20
            },
            initialization (event) {
                const me = this
                if (document.readyState != 'interactive') {
                    setTimeout( () => {
                        me.$store.commit('global/loader/checkLoader', { status: false })
                        me.loaded = true
                        document.body.classList.remove('no_scroll', 'no_click')
                    }, 1000)
                }
            }
        },
        mounted () {
            const me = this
            me.initialization()
        },
        asyncData ({ store }) {
            store.commit('global/loader/checkLoader', { status: true })
        },
        beforeMount () {
            window.addEventListener('load', this.initialization)
        },
        beforeDestroy () {
            window.removeEventListener('load', this.initialization)
        }
    }
</script>

<style lang="stylus" module>
    :local
        .pointer
            cursor: pointer
        .landing
            width: 100%
            max-width: 1280px
            margin: 0 auto
            .top
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
                        margin: 0 10px 30px
                        .item_top
                            flex: 0 0 auto
                            img
                                width: 75px
                                height: 75px
                                object-fit: contain
                        .item_bottom
                            flex: 0 0 auto
                            .name
                                margin-top: 20px
                                font-family: 'Brandon-Bold'
                                font-size: 18px
                                color: var(--black)
                                text-transform: capitalize
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
                                            font-family: 'Brandon-Regular'
                                            font-size: 14px
                                            padding: 2.5px 7.5px
                                            text-transform: uppercase
                                            border: 1px solid var(--black)
            .bottom
                margin-top: 40px
                text-align: center
                .button
                    display: inline-block
                    position: relative
                    z-index: 1
                    padding: 10px 30px
                    font-family: 'Brandon-Medium'
                    text-transform: uppercase
                    font-size: 16px
                    color: var(--red)
                    background-color: var(--white)
                    border: 1px solid var(--red_v2)
                    border-radius: 10px
                    box-shadow: 0 0 20px transparent
                    transition: .3s ease-in-out
                    span
                        position: inherit
                        z-index: 1
                    &::before
                        content: ''
                        position: absolute
                        top: 0
                        left: 0
                        right: 0
                        bottom: 0
                        z-index: 0
                        background-image: linear-gradient(90deg, var(--red), var(--red_v2))
                        opacity: 0
                        border-radius: 10px
                        transition: .3s ease-in-out
                    &:hover
                        color: var(--white)
                        box-shadow: 0 0 20px rgba(220, 28, 17, 0.5)
                        transition: .3s ease-in-out
                        &::before
                            opacity: 1
                            transition: .3s ease-in-out
</style>
