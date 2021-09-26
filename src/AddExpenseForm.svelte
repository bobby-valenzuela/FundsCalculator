<script>

import { createEventDispatcher } from 'svelte';

let dispatch = createEventDispatcher();
let expense;
let amount;

const expenseNameInput = document.getElementById("expenseNameInput");
const amountInput = document.getElementById("amountInput");

const showError = err =>{

    alert(err);
    // const notificationBox = document.createElement('div');
    // notificationBox.id = 'notificationBox';
    // document.body.insertAdjacentElement('beforeend',notificationBox);
    const msg = 'test message!';
    dispatch('showNotificationBox', msg );

};

const addExpense = ()=>{
    const data = { expense, amount };
    dispatch('addExpense', data );
};

const validateAmount = (e) => {
    const elem = e.target;
    if(+elem.value < 0) elem.value = 0;
};

const validateFields = () =>{
    if ( !expenseNameInput.value ) return showError('expenseName');
    if ( !amountInput.value ) return showError('amount');
};


</script>

<form on:submit|preventDefault={ addExpense } id="addExpenseForm">
					
    <div class="row">
        <div class="col s8">
            <label>Expense
                <input type="text" bind:value={ expense } placeholder="Snacks, fast food, etc" id="expenseNameInput" required list="suggestions" autocomplete="off">
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
                <input type="number" bind:value={ amount } placeholder="$0.00" on:keypress={ validateAmount } id="amountInput" required>
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