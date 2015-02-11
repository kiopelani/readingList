'use strict';

// Declare app level module which depends on views, and components
(function(){
var app = angular.module('readingList', [
]);

app.controller('ReadingListController', function(){
  this.books = books;
  this.genres = genres;
});

app.directive('bookGenres', function(){
  return {
    restrict: 'E',
    templateUrl: 'partials/book-genres.html',
    replace: true,
    scope: {
      genres: "="
    }
  }
});

app.directive('bookCover', function(){
  return {
    restrict: 'E',
    templateUrl: 'partials/book-cover.html',
    replace: true
  }
});

app.directive('reviewForm', function(){
  return {
    restrict: 'E',
    templateUrl: 'partials/review-form.html',
    replace: true,
    controller: function(){
      this.showForm = false;
      this.book = {genres: {}};

      this.addReview = function(form){
        books.push(this.book);
        this.book = {genres: {}};

        form.$setPristine();
      }
    },
    controllerAs: 'reviewFormCtrl',
    scope: {
      books: "=",
      genres: "="
    }
  }
});

  var genres = ["fantasy", "fiction", "mystery", "awesome"];
  var books = [
  {
    title: "Game of Thrones",
    author: "George R.R. Martin",
    isbn: "0553593714",
    review: "I didn't read this actually...",
    rating: 1,
    genres: { fantasy:true }
  },{
    title: "And Then There Were None",
    author: "Agatha Christie",
    isbn: "0062073486",
    review: "This book is amazing.",
    rating: 5,
    genres: { mystery:true, awesome:true }
  }
  ];
})();
