<template lang="html">
    <nuxt-link :to="`/pokemon/${pokemon.name}`" :class="$style.item">
        <div :class="$style.item_top">
            <img :data-src="pokemon.details.sprites" :alt="pokemon.name" v-lazy-load v-if="pokemon.details.sprites" />
            <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 126.482 126.482" style="enable-background:new 0 0 126.482 126.482;" xml:space="preserve" width="126" height="126"> <g> <g> <g> <path style="fill:#FFFFFF;" d="M96.118,124.982l27.973-103.688L73.513,51.309v0.002c0.049,7.236-3.611,14.318-10.273,18.271 s-14.629,3.771-20.957,0.26l-26.658,15.82c15.752,17.014,41.816,21.377,62.545,9.076c0.193-0.115,0.379-0.24,0.57-0.355 l0.199,1.646L96.118,124.982z"/> </g> <g> <g> <g> <g> <g> <path style="fill:#D8E5EA;" d="M63.24,69.582c-6.662,3.953-14.629,3.771-20.957,0.26L19.398,83.424 c15.467,9.73,35.729,10.691,52.496,0.74c16.77-9.953,25.635-28.193,24.502-46.432L73.513,51.311 C73.562,58.547,69.902,65.629,63.24,69.582z"/> </g> </g> <g> <g> <path style="fill:#FFFFFF;" d="M31.634,51.902c-0.049-7.238,3.609-14.318,10.272-18.271s14.633-3.773,20.959-0.262 l26.658-15.822C73.773,0.535,47.706-3.828,26.98,8.475C6.251,20.775-2.409,45.742,4.976,67.719L31.634,51.902z"/> </g> <g> <path style="fill:#D8E5EA;" d="M41.906,33.631c6.662-3.953,14.633-3.773,20.959-0.262l22.885-13.582 c-15.469-9.736-35.728-10.693-52.496-0.742C16.484,28.998,7.616,47.238,8.751,65.479l22.883-13.576 C31.585,44.664,35.243,37.584,41.906,33.631z"/> </g> <g> <path style="fill:#33363A;" d="M4.976,69.219c-0.176,0-0.354-0.031-0.522-0.094c-0.425-0.158-0.755-0.499-0.899-0.929 c-7.722-22.979,1.809-48.638,22.66-61.012C47.066-5.19,74.154-1.263,90.623,16.527c0.308,0.333,0.449,0.787,0.384,1.235 s-0.329,0.843-0.719,1.074L63.63,34.659c-0.458,0.272-1.027,0.28-1.493,0.021c-6.074-3.372-13.533-3.28-19.466,0.24 c-5.93,3.519-9.584,10.021-9.537,16.972c0.004,0.533-0.276,1.027-0.734,1.3L5.741,69.009 C5.507,69.148,5.242,69.219,4.976,69.219z M52.53,2.996c-8.527,0-17.104,2.21-24.784,6.769 C8.638,21.104-0.379,44.283,5.838,65.463l24.307-14.421c0.245-7.682,4.401-14.788,10.995-18.701 c6.599-3.914,14.827-4.157,21.683-0.691l24.307-14.427C77.793,7.89,65.217,2.996,52.53,2.996z"/> </g> </g> </g> <g> <g> <path style="fill:#FFFFFF;" d="M61.997,46.012c3.092,5.207,1.377,11.93-3.832,15.018c-5.203,3.09-11.928,1.377-15.019-3.832 c-3.088-5.203-1.371-11.932,3.834-15.019C52.185,39.088,58.909,40.807,61.997,46.012z"/> </g> <g> <path style="fill:#D8E5EA;" d="M43.146,57.197c-3.088-5.203-1.371-11.932,3.834-15.019c5.205-3.09,11.93-1.371,15.018,3.834" /> </g> <g> <path style="fill:#33363A;" d="M52.593,64.07c-1.033,0-2.072-0.13-3.1-0.392c-3.226-0.822-5.938-2.853-7.638-5.716 c-1.698-2.861-2.18-6.214-1.356-9.439c0.823-3.227,2.854-5.938,5.715-7.636c2.861-1.7,6.213-2.181,9.439-1.356 c3.225,0.823,5.936,2.853,7.634,5.715l0,0c1.7,2.863,2.183,6.216,1.36,9.439c-0.823,3.226-2.854,5.937-5.718,7.634 C56.981,63.478,54.803,64.07,52.593,64.07z M52.555,42.14c-1.678,0-3.33,0.449-4.81,1.328 c-2.173,1.289-3.714,3.348-4.339,5.798c-0.625,2.449-0.26,4.994,1.029,7.166c1.29,2.175,3.35,3.716,5.799,4.34 c2.45,0.627,4.994,0.259,7.165-1.032c2.175-1.289,3.717-3.347,4.341-5.795c0.625-2.448,0.258-4.993-1.033-7.167l0,0 c-1.289-2.174-3.348-3.715-5.796-4.34C54.13,42.238,53.34,42.14,52.555,42.14z"/> </g> </g> </g> <g> <g> <g> <path style="fill:#33363A;" d="M21.278,71.678c-0.512,0-1.011-0.262-1.291-0.734c-0.423-0.713-0.188-1.633,0.524-2.056 l13.318-7.904c0.712-0.422,1.633-0.188,2.056,0.524s0.188,1.633-0.524,2.056l-13.318,7.904 C21.802,71.61,21.538,71.678,21.278,71.678z"/> </g> <g> <path style="fill:#33363A;" d="M13.604,76.225c-0.391,0-0.78-0.16-1.061-0.44c-0.279-0.27-0.439-0.659-0.439-1.06 c0-0.39,0.16-0.78,0.439-1.06c0.561-0.551,1.561-0.551,2.12,0c0.28,0.279,0.44,0.67,0.44,1.06c0,0.4-0.16,0.78-0.44,1.06 C14.383,76.065,14.003,76.225,13.604,76.225z"/> </g> <g> <path style="fill:#33363A;" d="M6.613,80.375c-0.39,0-0.78-0.16-1.061-0.44c-0.279-0.28-0.439-0.67-0.439-1.06 c0-0.391,0.16-0.78,0.439-1.061c0.57-0.56,1.561-0.56,2.12,0c0.28,0.28,0.44,0.67,0.44,1.061c0,0.39-0.16,0.779-0.43,1.06 C7.394,80.215,7.014,80.375,6.613,80.375z"/> </g> </g> <g> <g> <path style="fill:#33363A;" d="M70.551,42.436c-0.512,0-1.011-0.263-1.291-0.734c-0.423-0.713-0.188-1.633,0.524-2.056 l13.318-7.9c0.713-0.421,1.633-0.188,2.056,0.524c0.423,0.713,0.188,1.633-0.524,2.056l-13.318,7.9 C71.075,42.368,70.812,42.436,70.551,42.436z"/> </g> <g> <path style="fill:#33363A;" d="M91.543,29.984c-0.399,0-0.79-0.16-1.06-0.45c-0.28-0.27-0.44-0.659-0.44-1.05 c0-0.399,0.16-0.79,0.44-1.069c0.55-0.551,1.56-0.561,2.12,0c0.279,0.279,0.439,0.67,0.439,1.069 c0,0.391-0.16,0.771-0.439,1.05C92.323,29.824,91.934,29.984,91.543,29.984z"/> </g> <g> <path style="fill:#33363A;" d="M98.53,25.834c-0.512,0-1.011-0.262-1.291-0.734c-0.423-0.713-0.188-1.633,0.524-2.056 l20.238-12.012c0.713-0.422,1.634-0.188,2.056,0.524c0.423,0.713,0.188,1.633-0.524,2.056L99.294,25.624 C99.054,25.767,98.79,25.834,98.53,25.834z"/> </g> </g> </g> </g> <g> <path style="fill:#33363A;" d="M96.118,126.482c-0.524,0-1.018-0.275-1.29-0.734l-17.18-28.953 c-0.004-0.007-0.009-0.015-0.013-0.021c-20.667,11.46-46.983,7.329-63.112-10.092c-0.308-0.333-0.449-0.787-0.384-1.235 s0.329-0.843,0.719-1.074l26.658-15.82c0.459-0.271,1.027-0.28,1.493-0.021c6.076,3.371,13.533,3.281,19.464-0.238 S72.06,58.27,72.013,51.32c-0.004-0.532,0.276-1.027,0.734-1.3l50.578-30.016c0.525-0.312,1.187-0.274,1.673,0.096 c0.486,0.369,0.7,0.996,0.541,1.585L97.567,125.373c-0.157,0.582-0.647,1.014-1.245,1.096 C96.253,126.478,96.186,126.482,96.118,126.482z M80.39,95.535l15.206,25.627l26.085-96.692L75.002,52.169 c-0.245,7.682-4.401,14.789-10.997,18.703c-6.593,3.913-14.821,4.157-21.681,0.689L18.018,85.986 c15.612,15.608,40.279,18.8,59.386,7.462l0.563-0.351c0.436-0.262,0.975-0.286,1.432-0.063c0.457,0.223,0.77,0.662,0.831,1.167 L80.39,95.535z"/> </g> </g> <g> <g> <path style="fill:#33363A;" d="M93.79,88.912c-0.828,0-1.5-0.672-1.5-1.5V73.139c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 v14.273C95.29,88.24,94.618,88.912,93.79,88.912z"/> </g> <g> <path style="fill:#33363A;" d="M100.925,81.775H86.654c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h14.271 c0.828,0,1.5,0.672,1.5,1.5S101.753,81.775,100.925,81.775z"/> </g> </g> </g> </svg>
        </div>
        <div :class="$style.item_bottom">
            <div :class="$style.name">
                {{ pokemon.name }}
            </div>
            <div :class="$style.order">
                #{{ pokemon.order }}
            </div>
            <div :class="$style.types">
                <ul>
                    <li v-for="(type, key) in pokemon.details.types">
                        <span :class="$style.type" :style="`background-color: ${getTypeColor(type.type.name)};`">{{ type.type.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        props: {
            pokemon: {
                type: Object/Array,
                default: null
            }
        },
        computed: {
            ...mapGetters('pokemon', {
                types: 'getTypes'
            })
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
        .item
            display: flex
            flex-flow: column wrap
            align-items: center
            justify-content: space-between
            text-align: center
            flex: 0 0 calc((100% / 7) - 10px)
            margin: 0 5px 10px
            padding: 20px 10px
            border: 1px solid var(--blue)
            box-shadow: 0 0 20px transparent
            transition: .3s ease-in-out
            &:hover
                box-shadow: 0 0 20px rgba(59, 76, 202, 0.5)
                transition: .3s ease-in-out
                .item_top
                    img,
                    svg
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
                img,
                svg
                    width: 50px
                    height: 50px
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
                            margin: 0 2.5px
                            .type
                                color: var(--white)
                                font-family: 'Brandon-Medium'
                                font-size: 12px
                                padding: 2.5px 5px
                                text-transform: uppercase
                                border: 1px solid var(--black)
        @media (max-width: 767px) and (min-width: 310px)
            .item
                flex: 0 0 100%
                margin: 0 0 20px
        @media (max-width: 1024px) and (min-width: 768px)
            .item
                flex: 0 0 calc((100% / 2) - 20px)
                margin: 0 10px 20px
</style>
