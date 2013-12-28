var actions = {
  search: function() {
    redirect('/search/' + req.body.searchTerm);
  },
  list: function() {
    var searchTerm = req.params.searchTerm;
    Song.all({where: {name: new RegExp(searchTerm, 'i')}}, function(err, songs) {
      render({title: 'Lyrx.io - Search Results - ' + searchTerm, songs: songs});
    });
  }
};

action('search', actions.search);
action('list', actions.list);
