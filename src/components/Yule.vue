<template>
    <div class="yule">
        <h1>娱乐组件</h1>
        <h6>孟子义听雨氛围感写真大片</h6>
        <p>
            {{content}}
        </p>
        
    </div>
</template>


<script>

    export default {
        data(){
            return {
                content:`孟子义为杂志拍摄的一组雨中时尚大片曝光。静谧初秋午后，雨水微凉，孟子义倚于室内，时而着一袭白色纱裙搭配珍珠项链点缀，
                         整套造型温暖优雅；时而身穿花边衬衫与黑色丝绸质地褶裙，以复古气息十足的绿色发带呈现灵动之美，眉眼间尽显慵懒闲适。
                         细雨将歇，天光或晴，孟子义以一身粗花呢拼接套装撑伞漫步庭院间，面对镜头随性自在。多套休闲造型视觉舒适感极佳，诠释别样穿搭格调。
                `
            }
        }
    }
</script>

<style lang="scss" >
    $color:blue;
    $bgcolor:inset 5px 5px 28px rgb(4, 100, 245);
    h6{
        color: $color;
    }
    p{
        box-shadow: $bgcolor;
    }
    
</style>