<template>
  <div class="about">
    <h1>Collections page</h1>
    <h2>The Current value of Counter is: {{ctr}}</h2>
    <div>
      <button @click="increment">Inc</button>
      <button @click="decrement">Dec</button>
    </div>
  </div>
</template>
<script>
import useCounter from "../composables/useCounter"
export default{

  setup(){
    const {ctr, increment, decrement} = useCounter()
  return {
    ctr, increment, decrement
  }
}

    }
</script>
