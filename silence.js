(function () {
  var stdLogCommands = [
    'assert', 
    'count',
    'dir',
    'error',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'table',
    'time',
    'timeEnd',
    'trace',
    'warn'
  ];
  
  var silence = {},
      backing = {},
      hushed = false;
  
  //Add hush to silence
  Object.defineProperty(silence, 'hush', {
    get: function () { return hushed; },
    set: function (val) { hushed = !!val; },
    configurable : false
  });
  
  stdLogCommands.forEach(function (prop) {
    //See if the property is supported
    if(!console[prop]) { return; }
    
    //Create the prop backing
    var bkn = {
      value: console[prop],
      enabled: true
    };
    
    //Add it to the backing, and enable it
    backing[prop] = bkn;
    
    //Wrap the call to the prop
    console[prop] = function () {
      if(hushed || !bkn.enabled) { return; }
      
      bkn.value.apply(console, arguments);
    };
    
    //Add it to the silence module
    Object.defineProperty(silence, prop, {
      get: function () { return bkn.enabled; },
      set: function (val) { bkn.enabled = !!val; },
      configurable : false
    });
  });
  
  Object.defineProperty(console, 'silence', {
    get: function () { return silence; }
  });
})();