beforeEach(function() {
  this.addMatchers({
    toBeInstanceOf: function(Klass) { return this.actual instanceof Klass ; }
  });
});
