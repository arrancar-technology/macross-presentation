var YAML = require('yamljs')
  , rootDir = require('path').dirname(process.mainModule.filename)
  , applicationProperties = YAML.load(rootDir +'/application_properties.yaml');

var config = compound.app.get('config'),
    configOriginal = compound.app.get('configOriginal');

if(!configOriginal) {
  configOriginal = JSON.parse(JSON.stringify(config));
  compound.app.set('configOriginal', configOriginal);
}

var application = {
  reset: function() {
    Song.destroyAll();

    compound.app.set('config', JSON.parse(JSON.stringify(configOriginal)));
    send(compound.app.get('config'));
  },
  statusApplicationVersion: function() {
    send({ applicationVersion: applicationProperties.applicationVersion });
  },
  statusCommitHash: function() {
    send({ commitHash: applicationProperties.commitHash });
  }
};

var songs = {
  create: function() {
    var song = new Song({name: req.body.name, lyrics: req.body.lyrics})
    song.save(function() {
      send(song);
    })
  }
};

action('reset', application.reset);
action('statusApplicationVersion', application.statusApplicationVersion);
action('statusCommitHash', application.statusCommitHash);

action('songsCreate', songs.create);
