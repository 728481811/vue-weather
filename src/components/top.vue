<template>
    <div class="top">
        {{wDate}}
    </div>
</template>

<script type="text/ecmascript-6"> 
import {getWeatherDate} from 'api/weatherDate'
import axios from 'axios'
export default {
    data() {
        return {
            wDate: {},
            city: '广州'
        }
    },
    created() {
        this.weatherDate()
    },
    methods: {
        weatherDate() {
            getWeatherDate(this.city).then((res, rej) => {
                this.wDate = res.data.result;
            })
        }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .top
        background: $color-background-f
        width: 100%;
        padding: 100px 0 100px 0;
        color: #333
</style>