<template>
	<div id="checkout">
		<a id="back" @click="changeTab('bookshop')">Go Back</a><br />

		Hier checkout einfügen...<br />
		<br />
		Items:
		<ul>
			<li v-for="item of items" :key="item.title">{{ item.title }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Checkout",
	props: {
		items: Array
	},
	methods: {
		changeTab: function(tab) {
			this.$emit("tab", tab);
		}
	}
}
</script>

<style>
#checkout {
	font-size: 1.6rem;
	padding: 1rem;
}

#back {
	cursor: pointer;
	font-weight: 600;
	text-decoration: underline;
}
</style>