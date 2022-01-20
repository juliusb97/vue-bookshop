<template>
  <div class="bookListItem" :style="'background:' + this.randomPastel()">
	<div class="titleDiv">
		<h3>{{ title }}</h3>
		<h5>{{ author }}</h5>
	</div>
	<div>
		<h4>{{ price }}</h4>
		<span
			class="buyButton" 
			@click="buy"
		>🛒</span>
	</div>
  </div>
</template>

<script>
export default {
	props: {
		title: String,
		author: String,
		price: Number
	},
	methods: {
		randomPastel: () => {
			const pastels = ["#80BFA0", "#A4DEAD", "#FFEFC2", "#FFD0A1", "#FF9C9C", "#C56E90"];
			return pastels[Math.floor(Math.random() * pastels.length - 1)];
		},
		getBook: function() {
			return {
				title: this.title,
				author: this.author,
				price: this.price
			}
		},
		buy: function() {
			this.$emit('boughtBook', this.getBook());
		}
	}
}
</script>

<style>
.bookListItem {
	font-size: 1.2rem;
	margin: 1rem;
	padding: 1.2rem;
	border-radius: 0.5rem;
	background: #C66;
	display: flex;
	flex-flow: row;
}

.titleDiv {
	flex-grow: 1;
}

.buyButton {
	cursor: pointer;
	border-radius: 0.5rem;
	padding: 0.3rem;
	background: #CCC;
	user-select: none;
}
</style>