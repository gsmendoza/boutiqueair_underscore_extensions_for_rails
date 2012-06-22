BoutiqueAirUnderscoreExtensions = {
  'camelize': function(str) {
    var parts = str.split('-');
    var len = parts.length;
    var camelized = '';

    for (var i = 0; i < len; i++){
      camelized += parts[i].charAt(0).toUpperCase() + parts[i].substring(1);
    }

    return camelized;
  },

  'constantize' : function(str){
    var arr = str.split(".");

    try {
      var fn = (window || this);
      for (var i = 0, len = arr.length; i < len; i++){
        fn = fn[arr[i]];
      }
      return  fn;
    }
    catch(e){
      return undefined;
    }
  },

  'dasherize': function(str) {
    return str.replace(/_/g, '-' );
  },

  'delete_at' : function(array, index){
    return array.splice(index, 1)[0];
  },

  'demodulize': function(class_name){
    return _(class_name.split('.')).last();
  },

  'dom_class' : function(class_name){
    return _(class_name).chain()
      .demodulize()
      .underscore()
      .dasherize()
      .value();
  },

  'inherits_from' : function(klass, ParentClassOrObject){
    if (ParentClassOrObject.constructor == Function){
      //Normal Inheritance
      klass.prototype = new ParentClassOrObject();
      klass.prototype.constructor = klass;
    }
    else {
      //Pure Virtual Inheritance
      klass.prototype = ParentClassOrObject;
      klass.prototype.constructor = klass;
    }
    klass.super_class = function(){
      return ParentClassOrObject;
    };
    return klass;
  },

  'insert' : function(array, index, element){
    array.splice(index, 0, element);
    return array;
  },

  'is_blank' : function(str){
    return str == 'null' || (str || "").replace(/\s+/, '') === "";
  },

  'is_present' : function(str){
    return ! _(str).is_blank();
  },

  'split_without_blanks' : function(str, delimiter){
    return _(str.split(',')).reject(function(token){
      return _(token).is_blank();
    });
  },

  'set_name': function(Class, name){
    Class._class_name = name;
    Class.class_name = function(){
      return this._class_name;
    };
    Class.prototype.class_name = function(){
      return this.constructor.class_name();
    };
  },

  'underscore': function(str) {
    return str
      .replace(/([A-Z]+)([A-Z][a-z])/g, function($1, $2, $3){
        return $2 + '_' + $3;
      })
      .replace(/([a-z\d])([A-Z])/g, function($1, $2, $3){
        return $2 + '_' + $3;
      })
      .toLowerCase();
  }
};
_.mixin(BoutiqueAirUnderscoreExtensions);
