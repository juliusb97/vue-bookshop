<template>
	<div id="search">
		<input type="text" id="searchInput" placeholder="Search..." v-model="searchValue" :change="this.searchChanged()"/>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			searchValue: ""
		}
	},
	methods: {
		searchChanged: function() {
			this.$emit("searchChanged", this.searchValue);
		}
	}
}
</script>

<style>
#search {
	background: #999;
	border-radius: 1rem;
	padding: 2rem;
	margin: 1rem;
}

#search > input {
	background: white;
	border: 0;
	font-size: 1.2rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	width: 100%;
}
</style>