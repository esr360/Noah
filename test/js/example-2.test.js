describe('example-2', function() {

  'use strict';

  beforeEach(function() {
    this.component = bar;
  });

  it('should be defined', function() {
    expect(this.component).to.exist;
  });

  describe('bar', function() {

    it('should return correct string', function() {
      expect(this.component()).to.equal('bar');
    });

  });

});
