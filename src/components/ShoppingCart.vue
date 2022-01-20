<template>
  <div id="shoppingCartWrapper">
	<h3 id="shoppingCartButton" v-on:click="listVisible = !listVisible">🛒</h3>
	<span>{{ items ? items.length : '0' }}</span>
	<div id="items" v-if="this.listVisible">
		<h4>Items:</h4>
		<ul>
			<li v-for="item of items" :key="item.title">{{ item.title }} <span @click="remove(item.title)">❌</span></li>
		</ul>
		<a @click="changeTab('checkout')">Pay</a>
	</div>
  </div>
</template>

<script>
export default {
	name: "ShoppingCart",
	data: () => {
		return {
			listVisible: false
		}
	},
	props: {
		items: Array
	},
	methods: {
		remove: function(item) {
			this.$emit("removeItem", item);
		},
		changeTab: function(tab) {
			this.listVisible = false;
			this.$emit("tab", tab);
		}
	}
}
</script>

<style>
#shoppingCartButton {
	font-size: 1rem;
}

.visible {
	display: block;
}

#shoppingCartWrapper {
	font-size: 1.2rem;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #AAA;
	border-radius: 0.5rem;
	padding: 0.5rem;
	padding-left: 2rem;
	padding-right: 2rem;
	cursor: pointer;
	user-select: none;
}

#items {
	position: absolute;
	background: #BBB;
	border-radius: 0.5rem;
	padding: 1rem;
	right: 2.5rem;
	top: 8rem;
}
</style>