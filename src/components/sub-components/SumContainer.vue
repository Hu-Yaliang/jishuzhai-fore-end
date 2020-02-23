<template>
    <div class="sum-container">
        <summer-note></summer-note>
        <div class="clear"></div>
    </div>
</template>

<script>
import SummerNote from './SummerNote'
export default {
    name: 'SumContainer',
    components: {
        SummerNote
    }
}
</script>

<style scoped>
.sum-container {
    width: 100%;
    height: 300px;
    position: relative;
}

.clear {
    height: 300px;
}
</style>