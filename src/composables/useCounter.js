import {ref, readonly} from 'vue'

const ctr = ref(0)

export default ()=>{
    
    const increment = ()=> ctr.value++
    const decrement = ()=> ctr.value--
    return {
     ctr: readonly(ctr),  increment, decrement
    }
    }