<template>
  <div id="app">
    <TitleBar :items="this.items" @removeItem="removeItem" @tab="changeTab"/>
    <Bookshop @boughtBook="boughtBook" @tab="changeTab" v-if="tab == 'bookshop'"/>
    <Checkout :items="this.items" v-if="tab == 'checkout'" @tab="changeTab"/>
  </div>
</template>

<script>
import Bookshop from './components/Bookshop';
import TitleBar from './components/TitleBar';
import Checkout from "./components/Checkout";

export default {
  name: 'App',
  components: {
    Bookshop,
    TitleBar,
    Checkout
  },
  data: () => {
    return {
      books: [],
      items: [],
      tab: "bookshop"
    }
  },
  methods: {
    boughtBook: function(book) {
      if(this.items.some(item => item.title == book.title)) return;
      this.items.push(book);
    },
    removeItem: function(item) {
      this.items = this.items.filter(book => book.title != item);
    },
    changeTab: function(tab) {
      console.log(tab);
      this.tab = tab;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-flow: column;
}
</style>
