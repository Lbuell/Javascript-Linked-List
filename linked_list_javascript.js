(function($opal) {
  var $a, $b, TMP_1, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass;
  if (self.list == null) self.list = nil;

  $opal.add_stubs(['$attr_accessor', '$attr_reader', '$==', '$latter', '$nil?', '$former', '$latter=', '$former=', '$new', '$head', '$puts', '$value', '$+', '$include?', '$delete', '$<<', '$times', '$add', '$rand', '$count', '$remove_duplicates']);
  ;
  (function($base, $super) {
    function $Node(){};
    var self = $Node = $klass($base, $super, 'Node', $Node);

    var def = $Node._proto, $scope = $Node._scope;
    self.$attr_accessor("value", "latter", "former");

    return (def.$initialize = function(value, latter, former) {
      var self = this;
      self.value = value;
      self.latter = latter;
      return self.former = former;
    }, nil);
  })(self, null);
  (function($base, $super) {
    function $List(){};
    var self = $List = $klass($base, $super, 'List', $List);

    var def = $List._proto, $scope = $List._scope;
    def.head = def.tail = nil;
    self.$attr_reader("head");

    def.$initialize = function() {
      var self = this;
      self.tail = nil;
      return self.head = nil;
    };

    def.$delete = function(node) {
      var $a, self = this;
      if (node['$=='](self.head)) {
        self.head = node.$latter()};
      if (($a = node.$former()['$nil?']()) === false || $a === nil) {
        node.$former()['$latter='](node.$latter())};
      if (($a = node.$latter()['$nil?']()) !== false && $a !== nil) {
        return nil
        } else {
        return node.$latter()['$former='](node.$former())
      };
    };

    def.$add = function(value) {
      var $a, self = this, new_node = nil;
      new_node = (($a = $scope.Node) == null ? $opal.cm('Node') : $a).$new(value, nil, self.tail);
      if (($a = self.$head()['$nil?']()) !== false && $a !== nil) {
        self.head = new_node};
      if (($a = self.tail['$nil?']()) === false || $a === nil) {
        self.tail['$latter='](new_node)};
      return self.tail = new_node;
    };

    def.$count = function() {
      var $a, $b, $c, self = this, total = nil, node = nil;
      total = 0;
      node = self.head;
      while (($b = ($c = node['$nil?'](), ($c === nil || $c === false))) !== false && $b !== nil) {
      self.$puts(node.$value());
      node = node.$latter();
      total = total['$+'](1);};
      return self.$puts("Total: " + (total));
    };

    return (def.$remove_duplicates = function() {
      var $a, $b, $c, self = this, current_node = nil, duplicates = nil, value = nil, next_node = nil;
      current_node = self.$head();
      duplicates = [];
      while (($b = (($c = current_node['$nil?'](), ($c === nil || $c === false)))) !== false && $b !== nil) {
      value = current_node.$value();
      next_node = current_node.$latter();
      if (($b = duplicates['$include?'](value)) !== false && $b !== nil) {
        self.$delete(current_node)
        } else {
        duplicates['$<<'](value)
      };
      current_node = next_node;};
    }, nil);
  })(self, null);
  self.list = (($a = $scope.List) == null ? $opal.cm('List') : $a).$new();
  ($a = ($b = (200)).$times, $a._p = (TMP_1 = function(i){var self = TMP_1._s || this;
    if (self.list == null) self.list = nil;
if (i == null) i = nil;
  return self.list.$add(self.$rand(100))}, TMP_1._s = self, TMP_1), $a).call($b);
  self.list.$count();
  self.list.$remove_duplicates();
  return self.list.$count();
})(Opal);

//@ sourceMappingURL=/__opal_source_maps__/application.js.map
;
