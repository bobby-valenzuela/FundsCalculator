<script>
	// let name = 'world';

	// const alertYo = ()=> alert('Yooo');
	// let color = 'Black';

	// const change = ()=> color = 'purple';

	
	// let firstName = 'John';
	// let lastName = 'Doe';

	// // Reactive value - updates whenever dependant values change
	// $: fullName = `${firstName} ${lastName}`;

	// // Reactive statement - executes whenever dependant values change
	// $: console.log(fullName);

	// // Reactive statement - executes whenever dependant values change (code block)
	// $: {
	// 	console.log(fullName);
	// 	console.log('This too');
	// }

	// Components
	import Header from "./Header.svelte";
	import ExpensesTable from "./ExpensesTable.svelte";
	import AddExpenseForm from "./AddExpenseForm.svelte";
	import NotificationBox from './shared/NotificationBox.svelte';

	// Animating
	import { fade, blur, fly, slide, scale } from 'svelte/transition';


	// Utility
	let showingNotificationBox = false;
	let notificationMsg;

	const showNotificationBox = e => {
		showingNotificationBox = !showingNotificationBox;
		notificationMsg = e.detail;
	};

	// Main
	let uneededExpenses = [
		{ expense: 'item1', amount : 10.00 },
		{ expense: 'item2', amount : 20.00 },
		{ expense: 'item3', amount : 50.00 }
	];
	
	const addExpense = e =>{
		const expense = e.detail;
		uneededExpenses = [...uneededExpenses, expense]; 	// can't push to array - svelte won't detect change - must re-create array
		document.getElementById("addExpenseForm").reset();  // clear form
	};


	// document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.fixed-action-btn');
	// 	var options = { toolbarEnabled : true };
    //     var instances = M.FloatingActionButton.init(elems, options);
	// 	var instance = M.FloatingActionButton.getInstance(elem);

    // });

</script>

<main>

	<Header/>

	<!-- Expenses -->
	<div class="container expenses">
		<div class="row">
			<div class="col s10 offset-s1">
				<ExpensesTable {uneededExpenses} />
			</div>
		</div>
	</div>

	<!-- Add Expense -->
	<div class="container add-expense">
		<div class="row">
			<div class="col s10 offset-s1">
				<AddExpenseForm on:addExpense={addExpense} on:showNotificationBox={showNotificationBox} />
			</div>
		</div>
	</div>

	{#if showingNotificationBox}
		<NotificationBox {notificationMsg} />

	{/if}

</main>

<svelte:head>
	<!-- Materialize -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

</svelte:head>

<style>
	:global(body){
		margin: 0;
		padding:0;
		box-sizing: border-box;

	}
	
	:root{
		--primary-color: rgb(37, 37, 37);
	}
	
	main{
		background-color: hsla(240deg,20%,90%,1);
		height:100%;
	}
	
	.container{
		padding: 15px;
	}
	
	.container.expenses{
		background-color: hsla(260deg,20%,92%,1);
	}

	.container.add-expense{
		background-color: hsla(200deg,40%,95%,1);
	}

	#notificationBox{

	}


</style>