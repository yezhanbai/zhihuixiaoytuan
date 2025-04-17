<template>
    <div>
        <button v-show="leftshow">{{ left }}</button>
        navbar--{{ myTitle }}
        <button v-show="rightshow">{{ right }}</button>
    </div>
</template>

<script>
export default {
        //验证父传过来的属性是什么类型
        props:{
            myTitle:String,             //必须是这属性
            left:[String,Number],       //既可以是字符串也可以是number
            right:{
                required:true,          //必填
                validator(value){             //校验器，验证值必须是下面三个之一  
                    return ['success','打开','danger'].includes(value)
                }
            },
            leftshow:{             
                required:true,
                type:Boolean
            },
            rightshow:{
                type:Boolean,
                default:true        //如果不传，给默认值
            }
        }
    }
</script>