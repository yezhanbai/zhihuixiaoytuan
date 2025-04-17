import { ref,watch } from 'vue'
import axios from 'axios'

function useList() {
    const select = ref('kerwin')
    const list = ref([])

    watch(select, (value) => {
        console.log(value)
        axios.get(`http://localhost:3000/news?author=${value}`)
            .then(res => {
                console.log(res.data)
                list.value = res.data
            })
    }, { immediate: true })

    return {
        select,
        list
    }
}

export default  useList