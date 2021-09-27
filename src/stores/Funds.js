import { writable } from "svelte/store";

// Create a writeable store
const Funds = writable(

    [
		{ name: 'item1', amount : 10.00 },
		{ name: 'item2', amount : 20.00 },
		{ name: 'item3', amount : 50.00 }
	]

); 

export default Funds;