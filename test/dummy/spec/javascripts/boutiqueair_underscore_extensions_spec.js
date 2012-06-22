describe('Underscore', function(){
  describe("_(str).is_blank()", function(){
    it("is true if removing all the whitespace from the str returns an empty string", function(){
      expect(_("  str").is_blank()).toBeFalsy();
      expect(_("str  ").is_blank()).toBeFalsy();
      expect(_("  ").is_blank()).toBeTruthy();
    });

    it("is true if the str is a non-true value", function(){
      expect(_(false).is_blank()).toBeTruthy();
      expect(_(null).is_blank()).toBeTruthy();
      expect(_(undefined).is_blank()).toBeTruthy();

      // IE8/jquery issue: if you set the value of a form field to null,
      // IE8 will convert it to "null"
      expect(_('null').is_blank()).toBeTruthy();
    });
  });

  describe("_(array).insert(index, element)", function(){
    it("should insert the element at the index", function(){
      var array = [];

      _(array).insert(0, 'a');
      expect(array).toEqual(['a']);

      _(array).insert(0, 'b');
      expect(array).toEqual(['b', 'a']);

      _(array).insert(1, 'c');
      expect(array).toEqual(['b', 'c', 'a']);
    });
  });

  describe("_(array).delete_at(index)", function(){
    it("should remove and return the element at index", function(){
      var array = ['a', 'b', 'c'];
      var result = _(array).delete_at(1);

      expect(result).toEqual('b');
      expect(array).toEqual(['a', 'c']);
    });
  });

  describe("_(str).is_present()", function(){
    it("is false if removing all the whitespace from the str returns an empty string", function(){
      expect(_("  str").is_present()).toBeTruthy();
      expect(_("str  ").is_present()).toBeTruthy();
      expect(_("  ").is_present()).toBeFalsy();
    });

    it("is false if the str is a non-true value", function(){
      expect(_(false).is_present()).toBeFalsy();
      expect(_(null).is_present()).toBeFalsy();
      expect(_(undefined).is_present()).toBeFalsy();
    });
  });

  describe("_(str).constantize()", function(){
    it("should return the function matching the str", function(){
      NameSpace = {};
      NameSpace.SomeClass = function(){};

      expect(_('NameSpace.SomeClass').constantize()).toEqual(NameSpace.SomeClass);
    });

    it("should return undefined if the function is undefined", function(){
      expect(_('UndefinedNameSpace').constantize()).toBeUndefined();
      expect(_('UndefinedNameSpace.SomeClass').constantize()).toBeUndefined();
    });
  });

  describe("_(str).underscore()", function(){
    it("should make an underscored, lowercase form from the expression in the string", function(){
      expect(_('NameSpace.SomeClass.AConstant').underscore()).toEqual('name_space.some_class.a_constant');
    });
  });

  describe("_(str).dasherize()", function(){
    it("replaces underscores with dashes in the string", function(){
      expect(_('name_space.some_class.a_constant').dasherize()).toEqual('name-space.some-class.a-constant');
    });
  });

  describe("_.inherits_from(klass, parent_class_or_object)", function(){
    it("can allow a class to inherit from a virtual class (plain old object)", function(){
      var LivingThing = {};
      LivingThing.be_born = function(){
        this.alive = true;
      };

      var Mammal = function(name){
        this.name = name;
        this.offspring = [];
      }
      _(Mammal).inherits_from(LivingThing);

      var baby = new Mammal('Jojo');
      expect(baby.alive).toBeFalsy();
      baby.be_born();
      expect(baby.alive).toBeTruthy();
    });

    it("can allow a class to inherit from another class", function(){
      var Mammal = function(name){
        this.name = name;
        this.offspring = [];
      }

      var Cat = function(name){
        this.name = name;
      };
      _(Cat).inherits_from(Mammal);

      var cat = new Cat('Muning');
      expect(cat.name).toEqual('Muning');
      expect(cat.offspring).toEqual([]);
    });

    it("should set the constructor of the subclass to itself", function(){
      var Mammal = function(name){
        this.name = name;
        this.offspring = [];
      }

      Mammal.prototype.have_a_baby = function(){
        var kitten = new this.constructor("Baby " + this.name);
        this.offspring.push(kitten);
        return kitten;
      }

      var Cat = function(name){
        this.name = name;
      }
      _(Cat).inherits_from(Mammal);

      var cat = new Cat('Muning');
      cat.have_a_baby();

      expect(cat.offspring[0] instanceof Cat).toBeTruthy();
      expect(cat.offspring[0] instanceof Mammal).toBeTruthy();
    });

    it("should set the super class of the subclass", function(){
      var Mammal = function(name){
        this.name = name;
        this.offspring = [];
      }

      var Cat = function(name){
        this.name = name;
      }
      _(Cat).inherits_from(Mammal);

      expect(Cat.super_class()).toEqual(Mammal);
    });
  });

  describe("camelize", function(){
    it("converts strings to UpperCamelCase", function(){
      expect(_('column-headers-container').camelize()).toEqual('ColumnHeadersContainer');
    });
  });

  it("can demodulize a class name", function(){
    expect(_('NameSpace.Controller').demodulize()).toEqual('Controller');
  });

  it("can get the dom class of a class name", function(){
    expect(_('NameSpace.BrainsController').dom_class()).toEqual('brains-controller');
  });
});

