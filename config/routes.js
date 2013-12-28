exports.routes = function (map) {

  map.get('/', 'homepage#show');

  // Search
  map.post('/search', 'search#search');
  map.get('/search/:searchTerm', 'search#list');

  // Partials
  map.get('partials/:partial', 'partials#show');

  // Admin
  map.get('admin*', 'admin#index');
  map.resources('status', { path: 'api/1/status' });

  // Fixtures
  map.get('fixture/reset', 'fixture#reset');
  map.post('fixture/songs', 'fixture#songsCreate');
  map.get('fixture/status/applicationVersion', 'fixture#statusApplicationVersion');
  map.get('fixture/status/commitHash', 'fixture#statusCommitHash');
};
