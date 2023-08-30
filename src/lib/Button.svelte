<script lang="ts">
	export let onClick: (
		e: Event & {
			currentTarget: HTMLButtonElement
		}
	) => void
	export let size: "big" | "small" | "medium" = "medium"
	export let butContents: string
</script>

<style>
	button {
		width: max-content;
		background-color: rgb(22, 102, 241);
		color: #fff;
		padding: 5px;
		outline: none;
		border: 0;
		border-radius: 6px;
	}
</style>

<button
	on:click={(e) => onClick(e)}
	style="
    height: {size === 'big' ? '60px' : size === 'small' ? '30px' : '40px'}
"
>
	{butContents}
</button>
