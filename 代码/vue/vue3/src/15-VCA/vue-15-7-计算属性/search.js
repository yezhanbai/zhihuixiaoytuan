import { computed, ref } from 'vue';

function useSearch(state) {        //2.不成文的规定：以Use开头，默认是自定义的hooks
    const mytext = ref('')
    const computedList = computed(() =>         
            state.datalist.filter(item=>item.includes(mytext.value))      //每次mytext一改变就会重新过滤，每个字符串包含这个字符的，就被过滤出来了
        )

        return {      
            mytext,
            computedList
        }
}

export default useSearch     //3.导出