<template lang="html">
    <div>
        <Nuxt />
        <div class="" v-if="catcher.triggered">
            <div class="" @click="populateCatcher({ message: '', status: false })">
                {{ catcher.message }}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapGetters ({
                catcher: 'global/catcher/getCatcher'
            })
        },
        methods: {
            ...mapMutations({
                populateCatcher: 'global/catcher/populateCatcher'
            })
        }
    }
</script>
