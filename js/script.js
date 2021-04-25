$(document).ready(function() {
  $('.loadMore').loadMoreResults({
    displayedItems: 5,
     showItems: 5
  button: {
      'class': 'btn-load-more',
      'text': 'Load More'
    }

  });
})