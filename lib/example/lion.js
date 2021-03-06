(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Example.Animal.Lion = (function(_super) {

    __extends(Lion, _super);

    function Lion() {
      return Lion.__super__.constructor.apply(this, arguments);
    }

    Lion.MAX_SPEED = 50;

    Lion.prototype.move = function(direction, speed) {
      return Lion.__super__.move.call(this, {
        diection: direction,
        speed: speed
      });
    };

    Lion.prototype.escape = function(direction) {
      return this.move(direction, this.MAX_SPEED);
    };

    return Lion;

  })(Example.Animal);

}).call(this);
