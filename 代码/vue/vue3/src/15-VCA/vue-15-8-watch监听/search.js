import { computed, ref } from 'vue';

function useSearch(datalist) {       
    const mytext = ref('')
    const computedList = computed(() =>         
        datalist.value.filter(item=>item.content.includes(mytext.value))      //这里是.value，小心甄别用的ref还是reactive
        )

        return {      
            mytext,
            computedList
        }
}

export default useSearch   