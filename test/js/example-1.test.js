describe('example-1', function() {

  'use strict';

  beforeEach(function() {
    this.component = foo;
  });

  it('should be defined', function() {
    expect(this.component).to.exist;
  });

  describe('foo', function() {

    it('should return correct string', function() {
      expect(this.component()).to.equal('foo');
    });

  });

});
