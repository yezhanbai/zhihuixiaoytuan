
<!-- 这个封装案例，VCA的写法和引入，似乎完美解决了父子通信的麻烦 -->

<template>
    <div>
        <select name="" v-model="select">
            <option value="kerwin">kerwin</option>
            <option value="tiechui">tiechui</option>
            <option value="gangdaner">gangdaner</option>
        </select>

        <input type="text" v-model="mytext">

        <ul>
            <li v-for="item in computedList"  :key=item.id>
                {{ item.content }}
            </li>
        </ul>

    </div>

</template>

<script>
import useList from './useList';
import useSearch from './search'
export default {
    setup() {
        const {select,list} = useList()       
        const {mytext,computedList} = useSearch(list)
        return {
            select,
            list,
            mytext,
            computedList
        }
    }

}
</script>