<template>
  <div class="about">
    <h1>ShipList page</h1>
    <h1>Current Value of Counter {{ctr}}</h1>
  </div>
</template>

<script setup >
  import useCounter from '../composables/useCounter'
 
 const {ctr} = useCounter()

</script>
