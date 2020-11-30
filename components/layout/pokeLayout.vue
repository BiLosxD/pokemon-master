<template lang="html">
    <div :class="$style.layout">
        <!-- Header -->
        <div :class="$style.top">
            <!-- Left -->
            <div :class="$style.left">
                <!-- Group Search -->
                <div :class="[ $style.group, $style.image ]">
                    <label>Search:</label>
                    <input type="text" name="q" placeholder="Search a pokemon" v-model="form.search" @input="search('input')">
                </div>
                <!-- Group Per Page -->
                <div :class="[ $style.group, $style.select ]">
                    <label>Per Page:</label>
                    <select name="per_page" @change="search('select')" v-model="form.per_page">
                        <option :value="data" v-for="(data, key) in per_page">{{ data }}</option>
                    </select>
                </div>
            </div>
            <!-- Right -->
            <div :class="$style.right">
                <!-- List Layout -->
                <div :class="[ $style.wrapper, $style.pointer, (layout == 'list') ? $style.active : '' ]" @click="layout = 'list'">
                    <svg :class="$style.icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g :class="$style.icon_stroke">
                            <g :class="$style.stroke">
                                <rect id="Rectangle" x="0.5" y="0.5" width="6" height="6"></rect>
                                <rect id="Rectangle-Copy-7" x="0.5" y="9.5" width="6" height="6"></rect>
                                <rect id="Rectangle-Copy-3" x="9.5" y="0.5" width="6" height="6"></rect>
                                <rect id="Rectangle-Copy-8" x="9.5" y="9.5" width="6" height="6"></rect>
                            </g>
                        </g>
                    </svg>
                </div>
                <!-- Table Layout -->
                <div :class="[ $style.wrapper, $style.pointer, (layout == 'table') ? $style.active : '' ]" @click="layout = 'table'">
                    <svg :class="$style.icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g :class="$style.icon_stroke">
                            <g :class="$style.stroke">
                                <rect id="Rectangle-Copy-14" x="0.5" y="0.5" width="15" height="6"></rect>
                                <rect id="Rectangle-Copy-15" x="0.5" y="9.5" width="15" height="6"></rect>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <!-- Layout -->
        <div v-if="layout == 'list'">
            <!-- List -->
            <div :class="$style.list">
                <pokemon-list :pokemon="data" v-for="(data, key) in populatePokemons" :key="key" v-if="data.shown" />
            </div>
        </div>
        <!-- Layout -->
        <div v-else>
            <!-- Table -->
            <div :class="$style.table">
                <pokemon-table :pokemon="data" v-for="(data, key) in populatePokemons" :key="key" v-if="data.shown" />
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import pokemons from '~/static/pokemons/get-all.json'
    import PokemonList from '~/components/layout/item/pokemonList'
    import PokemonTable from '~/components/layout/item/pokemonTable'

    export default {
        components: {
            PokemonList,
            PokemonTable
        },
        data () {
            return {
                layout: 'list',
                selected_per_page: 100,
                form: {
                    search: '',
                    per_page: 100
                }
            }
        },
        computed: {
            ...mapGetters('pokemon', {
                per_page: 'getPerPage'
            }),
            populatePokemons () {
                const me = this
                let count = me.count_to_show
                let results = []
                for (let i = 0, len = me.selected_per_page; i < len; i++) {
                    if (pokemons[i]) {
                        results.push(pokemons[i])
                    }
                }

                return results
            }
        },
        methods: {
            search (type) {
                const me = this
                switch (type) {
                    case 'input':
                        let ctr = 0
                        pokemons.forEach((item, key) => {
                            let name = item.name
                            if (me.form.search != '') {
                                if (name.includes(me.form.search.toLowerCase())) {
                                    ctr++
                                    item.shown = true
                                } else {
                                    item.shown = false
                                }
                            } else {
                                item.shown = true
                            }
                        })
                        break
                    case 'select':
                        if (me.form.per_page == 'All') {
                            me.selected_per_page = 1200
                        } else {
                            me.selected_per_page = me.form.per_page
                        }
                        break
                }
            }
        }
    }
</script>

<style lang="stylus" module>
    :local
        .pointer
            cursor: pointer
        .layout
            .top
                display: flex
                flex-flow: row wrap
                align-items: center
                justify-content: space-between
                margin: 0 5px 30px
                .left
                    flex: 0 0 auto
                    display: flex
                    flex-flow: row wrap
                    align-items: center
                    justify-content: flex-start
                    .group
                        display: flex
                        flex-flow: row wrap
                        align-items: center
                        justify-content: flex-start
                        position: relative
                        margin-right: 20px
                        label
                            margin-right: 10px
                        &:last-child
                            margin-right: 0
                        &.image
                            &::before
                                content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTYsMjEuNSAgIGMtMy41LDAtMy41LTQtMy41LTljMC0zLjc3ODc4NTcsMC40NzIwNDA0LTYuNjEzNDkwNiwwLjc2NzQ4ODctOC4wMTc2NDExICAgYzAuMTMxMDMwOC0wLjYyMjczODgsMC4zOTc0MTg1LTEuMjAyMjM1NywwLjc3OTI0MzItMS43MTEzMzU3bDAuMDA1MTc5OS0wLjAwNjkwNjMgICBjMC42MzcxMDg4LTAuODQ5NDc4NSwxLjU1Njg4NDMtMS40NDA0NTU4LDIuNTk2NTAwOS0xLjY1NjYwMkM3Ljk5NTc2NDMsMC44MjczODgsOS45OTg1NTksMC41LDEyLDAuNSAgIHM0LjAwNDIzNjIsMC4zMjczODgsNS4zNTE1ODczLDAuNjA3NTE1NWMxLjAzOTYxNTYsMC4yMTYxNDYyLDEuOTU5MzkyNSwwLjgwNzEyMzUsMi41OTY1MDA0LDEuNjU2NjAybDAuMDA1MTgwNCwwLjAwNjkwNjMgICBjMC4zODE4MjQ1LDAuNTA5MSwwLjY0ODIxMjQsMS4wODg1OTY4LDAuNzc5MjQzNSwxLjcxMTMzNTdDMjEuMDI3OTU5OCw1Ljg4NjUwOTQsMjEuNSw4LjcyMTIxNDMsMjEuNSwxMi41YzAsNy0wLjUsMTEtMy41LDExICAgYy0zLjUsMC00LTItOS41LTJINnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMwM0M0MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48ZWxsaXBzZSBjeD0iMTIiIGN5PSI3LjUiIGZpbGw9Im5vbmUiIHJ4PSI2LjUiIHJ5PSI1IiBzdHJva2U9IiMzMDNDNDIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PGNpcmNsZSBjeD0iMTQuNSIgY3k9IjE4LjUiIGZpbGw9Im5vbmUiIHI9IjEiIHN0cm9rZT0iIzMwM0M0MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48Y2lyY2xlIGN4PSIxNy41IiBjeT0iMTUuNSIgZmlsbD0ibm9uZSIgcj0iMSIgc3Ryb2tlPSIjMzAzQzQyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNCIgaWQ9IlhNTElEXzEzMThfIiBzdHJva2U9IiMzMDNDNDIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB3aWR0aD0iMSIgeD0iNyIgeT0iMTQuNSIvPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNCIgaWQ9IlhNTElEXzEzMTdfIiBzdHJva2U9IiMzMDNDNDIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB0cmFuc2Zvcm09Im1hdHJpeCgzLjQ1NjA2MWUtMTEgMSAtMSAzLjQ1NjA2MWUtMTEgMjQgOSkiIHdpZHRoPSIxIiB4PSI3IiB5PSIxNC41Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxNS41IiBmaWxsPSIjMzAzQzQyIiByPSIwLjUiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+')
                                opacity: 0.3
                                position: absolute
                                top: 55%
                                right: 10px
                                width: 20px
                                transform: translateY(-50%)
                        &.select
                            &::before
                                content: ''
                                position: absolute
                                top: 50%
                                right: 10px
                                border-top: 5px solid var(--blue)
                                border-left: 5px solid transparent
                                border-right: 5px solid transparent
                                transform: translateY(-50%)
                        input
                            width: 300px
                        select
                            width: 150px
                        input,
                        select
                            border: 1px solid var(--blue)
                            padding: 5px 15px
                            font-family: 'Brandon-Regular'
                            font-size: 16px
                            color: var(--black)
                            box-shadow: 0 0 20px transparent
                            transition: .3s ease-in-out
                            &:focus
                                box-shadow: 0 0 20px rgba(220, 28, 19, 0.3)
                                border: 1px solid var(--red)
                                transition: .3s ease-in-out
                .right
                    flex: 0 0 auto
                    display: flex
                    flex-flow: row wrap
                    align-items: center
                    justify-content: flex-end
                    .wrapper
                        padding: 2px 10px 6px
                        border: 1px solid transparent
                        margin-right: 10px
                        transition: .3s ease-in-out
                        &:last-child
                            margin-right: 0
                        .icon
                            vertical-align: middle
                            .icon_stroke
                                stroke: trasparent
                                stroke-width: 1
                                fill: var(--white)
                                fill-rule: evenodd
                            .stroke
                                stroke: var(--black)
                                transition: .3s ease-in-out
                        &:hover
                            border: 1px solid var(--blue_v2)
                            transition: .3s ease-in-out
                            .icon
                                .stroke
                                    stroke: var(--blue_v2)
                                    transition: .3s ease-in-out
                        &.active
                            border: 1px solid var(--red)
                            transition: .3s ease-in-out
                            .icon
                                .stroke
                                    stroke: var(--red)
                                    transition: .3s ease-in-out
            .list
                display: flex
                flex-flow: row wrap
                align-items: center
                justify-content: flex-start
            .table
                display: flex
                flex-flow: row wrap
                align-items: center
                justify-content: space-between
                margin: 0 5px
</style>
