<script>
    export let uneededExpenses = [];
</script>


<table class="striped">
    <tbody>
        {#each uneededExpenses as item, idx }
            <tr>
                <td>{ idx + 1 }</td>
                <td>{ item.expense }</td>
                <td>{ (item.amount).toFixed(2) }</td>
                <td>  
                    <a class="btn-floating btn-small waves-effect waves-light red z-depth-1" href="javascript:;">
                        <i class="material-icons">delete</i>
                    </a>
                </td>
            </tr>
	    {/each}
    </tbody>
</table>


<style>

</style>