<template>
  <div id="titleBar">
	<h1 id="title">Bookshop</h1>
	<ShoppingCart :items="this.items" @removeItem="removeItem" @tab="changeTab"/>
  </div>
</template>

<script>
import ShoppingCart from "./ShoppingCart";

export default {
	components: { ShoppingCart },
	name: "TitleBar",
	props: {
		items: Array
	},
	methods: {
		removeItem: function(item) {
			this.$emit("removeItem", item);
		},
		changeTab: function(tab) {
			this.$emit("tab", tab);
		}
	}
}
</script>

<style>
#titleBar {
	background: #6C6;
	padding: 2.5rem;
	display: flex;
	flex-flow: row;
}

#title {
	flex-grow: 1;
}
</style>