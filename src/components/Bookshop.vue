<template>
  <div>
    <Search @searchChanged="this.searchChangedHandler" />
    <hr>
    <div v-for="book of this.filteredBooks" v-bind:key="book.title">
      <BookListItem :title="book.title" :author="book.author" :price="book.price" @boughtBook="boughtBook"></BookListItem>
    </div>
  </div>
</template>

<script>
import BookListItem from './BookListItem'
import Search from "./Search";
import axios from "axios";

export default {
  components: { BookListItem, Search },
  name: 'Bookshop',
  data: () => {
    return {
      books: [],
      filter: ""
    }
  },
  computed: {
    filteredBooks: function() {
      if(this.filter == "")
        return this.books;
      else {
        return this.books.filter(book => 
          book.title.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()) || 
          book.author.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
        );
      }
    }
  },
  methods: {
    fetchBooks: function () {
      axios.get("http://localhost:9400")
        .then(data => {
          this.$data.books = data.data;
          this.$data.filteredBooks = data.data;

          //TODO REMOVE
          this.$emit("boughtBook", data.data[0]);
        });
    },
    searchChangedHandler: function (value) {
      this.filter = value;
    },
    boughtBook: function(book) {
      this.$emit("boughtBook", book);
    }
  },
  mounted() {
    this.fetchBooks();
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

hr {
  width: 90%;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  border: 1px solid #666;
}
</style>
