define('Song', function () {
  property('name', String, { index: true });
  property('lyrics', String);
});
