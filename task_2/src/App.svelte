<script lang="ts">
  import { onMount } from 'svelte';

  let items: string[]=[];
  onMount(async () => {
      await fetch(`https://v6.exchangerate-api.com/v6/fbc77a9a18685c52a9cdbc02/codes`)
        .then(response => response.json())
        .then(data => {
          items = data.supported_codes;
          
        }).catch(error => {
          console.log(error);
        });
  });

  let selected:string;
  let selected1:string;

  let val:number;
  let val1:number;

 


  

  async function Converter (a:string, b:number){
    let kf:number = 0;
    await fetch(`https://v6.exchangerate-api.com/v6/fbc77a9a18685c52a9cdbc02/pair/${selected}/${selected1}`)
      .then(response => response.json())
      .then(data => {
        kf = data.conversion_rate;        
      }).catch(error => {
        console.log(error);
    });

    if (a == selected && b == val) {
      val1 = val * kf
    } else {
      val = val1/kf
    } 

  }




  
</script>

<main>
  <div class="container">
    <div class="up-block">
      <div class="up-block__item">
        <input type="number" min="0" bind:value={val} class="input" on:input = {() => (Converter(selected, val))}>
        <select bind:value={selected} class="select" on:input = {() => (Converter(selected, val))}>
          {#each items as item}
            <option value={item[0]}>
              {item[0]}
            </option>
          {/each}
        </select>
        
      </div>
    </div>
    <div class="down-block">
      <div class="currency">
        <input type="number" min="0" bind:value={val1} class="input" on:input = {() => (Converter(selected1, val1))}>
        <select bind:value={selected1} class="select" on:input = {() => (Converter(selected1, val1))}>
          {#each items as item}
            <option value={item[0]}>
              {item[0]}
            </option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</main>

<style>
  .select {
    padding: 2px 10px;
    border: 3px solid red ;
    outline: none;
    width: 80px;
  }

  .up-block__item {
    margin-bottom: 20px;
  }

  .input {
    padding: 5px 10px;
    border: 3px solid red;
    outline: none;
  }
</style>
