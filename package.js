Package.describe({
  summary: "Provides hashing methods"
});

Package.on_use(function(api) {
  api.add_files('crypto.js', ['server','client']);
});
