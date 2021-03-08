// 转换前
class Child extends Parent {
    constructor(a,b) {
      super(a);
      this.filed3 = b;
    }
  
  filed4 = 1;
  func2 = function(){}
}

// 转换后：
var Child = function (_Parent) {
    _inherits(Child, _Parent);
  
    function Child(a, b) {
      _classCallCheck(this, Child);
  
      var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, a));
  
      _this.filed4 = 1;
  
      _this.func2 = function () {};
  
      _this.filed3 = b;
      return _this;
    }
  
    return Child;
}(Parent);

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
    });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }