<template>
    <div :class="$style.error_page">
    	<div :class="$style.wrapper" v-if="error.statusCode == 404">
            <div :class="$style.logo">
                <img src="/pokeball.png" />
            </div>
    		<h1 :class="$style.title">Error 404</h1>
        	<h2 :class="$style.subtitle">The page you are trying to visit does not exist.</h2>
        	<nuxt-link to="/" :class="$style.button"><span>Back to Home</span></nuxt-link>
    	</div>
        <div :class="$style.wrapper" v-else>
            <div :class="$style.logo">
                <img src="/pokeball.png" />
            </div>
        	<h1 :class="$style.title">Oops, Something Went Wrong!</h1>
        	<nuxt-link to="/" :class="$style.button"><span>Back to Home</span></nuxt-link>
        </div>
    </div>
</template>

<script>
	export default {
		props: ['error'],
		layout: 'default',
        head () {
            return {
                title: 'PokeSearch | Coding Chiefs'
            }
        }
	}
</script>

<style lang="stylus" module>
    :local
        .error_page
            position: relative
            height: 100vh
            text-align: center
            .wrapper
                position: absolute
                top: 50%
                left: 0
                right: 0
                transform: translateY(-50%)
                .logo
                    img
                        width: 100px
                        height: 100px
                .title
                    font-family: 'Brandon-Bold'
                    font-size: 36px
                    color: var(--black)
                .subtitle
                    font-family: 'Brandon-Regular'
                    font-size: 28px
                    color: var(--black)
                .button
                    margin-top: 30px
                    font-family: 'Brandon-Medium'
                    font-size: 14px
                    text-transform: uppercase
                    display: inline-block
                    padding: 10px 15px
                    background-color: var(--red)
                    color: var(--white)
                    margin-bottom: 10px
                    border: 1px solid var(--red)
                    transition: .3s ease-in-out
                    &:hover
                        background-color: transparent
                        color: var(--red)
                        transition: .3s ease-in-out
</style>
