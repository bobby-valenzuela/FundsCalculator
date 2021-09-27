<script>

import { createEventDispatcher } from 'svelte';
let dispatch = createEventDispatcher();

// export let expenses = [];
// import Expenses from './stores/Expenses';

let name;
let amount;

const addFund = ()=>{
    if (!amount) return;
    const data = { name, amount };
    dispatch('addFund', data );
    // Expenses.update( expenses => [...expenses, data]);
    name = null; amount = null;
};

const validateAmount = (e) => {
    const elem = e.target;
    if(+elem.value < 0) elem.value = 0;
};

const validateFields = () =>{
    if ( !name ) return dispatch('showNotificationBox', 'Please enter a name for this fund' );
    if ( !amount ) return dispatch('showNotificationBox', 'Please enter an amount' );
};


</script>

<form on:submit|preventDefault={ addFund } id="addFundForm">
					
    <div class="row">
        <div class="col s8">
            <label>Fund Name
                <input type="text" bind:value={ name } placeholder="Snacks, fast food, etc" id="nameInput" required list="suggestions" autocomplete="off">
                <datalist id="suggestions">
                    <option value="Digital Services">Digital Services</option>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Unhealthy Habits">Unhealthy Habits</option>
                </datalist>
            </label>
        </div>

        <div class="col s2">
            <label>Amount
                <input type="number" step="0.5" min="0.50" max="10000" bind:value={ amount } placeholder="$0.00" on:keypress={ validateAmount } id="amountInput" required>
            </label>
        </div>

        <div class="col s2">
            <button class="btn waves-effect waves-light" type="submit" name="action" style="top:20px;" on:click={validateFields}>Submit
                <i class="material-icons right"></i>
            </button>
        </div>
    </div>

</form>

<style>


</style>