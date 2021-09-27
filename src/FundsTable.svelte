<script>
// props
export let total = 0;

import Funds from './stores/Funds';
$: funds = $Funds; // if saving $Funds into var save as reactive statement so we catch updates
// ^ Make sure to use 'Funds' when updating as we don't merely want to update the funds var as it's only for reading from store as it changes - as is '$Funds'

import { fade, blur, fly, slide, scale } from 'svelte/transition';
import { createEventDispatcher } from 'svelte';
let dispatch = createEventDispatcher(); 

const removeFund = idx => {
    // funds = funds.filter( (f,idx) => idx != fundId);
    Funds.update( currentFunds => currentFunds.filter( (f,i) => i != idx) );
    dispatch('showNotificationBox','Fund removed!' );
};

</script>

{#if funds.length === 0}
    <p>Ain't nothing</p>
{:else}
    <table class="striped">
        <thead>
            <tr>
                <th>#</th>
                <th>Fund Name</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
                {#each funds as item, idx }
                    <tr class="fundRow" in:scale={ {duration:300} } out:fly={ { duration: 300, y: 100 } }>
                        <td>{ idx + 1 }</td>
                        <td>{ item.name }</td>
                        <td>${ (item.amount).toFixed(2) }</td>
                        <td>  
                            <a class="btn-floating btn-small waves-effect waves-light red z-depth-1 tooltipped" data-position="bottom" data-tooltip="I am a tooltip" href="javascript:;" on:click={ ()=> removeFund(idx) }>
                                <i class="material-icons">delete</i>
                            </a>
                        </td>
                    </tr>
                {/each}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>${ (total).toFixed(2) }</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
{/if}
        

<style>

tfoot{
    border-top: 1px solid hsl(0deg,0%,80%);
    background-color: hsla(0deg, 0%, 88%, 1);
    font-weight: 600;
}

table :is(td, th):nth-of-type(3){
    width: 16%;
    text-align: center;
}

</style>