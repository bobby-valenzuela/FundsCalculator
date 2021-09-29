// Store to save all fund data
import { writable } from "svelte/store";

// Create a writeable store
const Funds = writable(

    [
		{ name: 'Initial Investments', amount : 100.00 },
		{ name: 'Bank Account', amount : 1.00 },
		{ name: 'Wallet', amount : 0.00 }
	]

); 

export default Funds;