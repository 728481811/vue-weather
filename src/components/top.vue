<template>
    <div class="top">
        {{wData}}
    </div>
</template>

<script type="text/ecmascript-6"> 
import {getWeatherDate} from 'api/weatherDate';
import {getCity} from 'api/getCity'
import axios from 'axios'
export default {
    data() {
        return {
            wData: {},
            ip: ''
        }
    },
    created() {
        this.getDetailData();
    },
    methods: {
        getDetailData() {
            getCity().then((res) => {
                this.ip = res.cip;
                getWeatherDate(this.ip).then((res) => {
                    this.wData = res.data.result;
                })
            })
        },
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