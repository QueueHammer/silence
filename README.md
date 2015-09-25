# silence
A library to mute the console output of yours and other source code.

The days of `alert('hello world');` are, or shoud be, long behind us. Long live `console.log('hello world');`! Silence adds the ability to disabled console so, it can be seen, but not heard.

##Why
What's that? why not use some other log library? Ok, thats an option, one you shoud also explore. However if you happen to be using code that you don't control, you're also stuck with their logging output. Unless you silence it.

##How
Silence intercepts the calls to __assert__, __count__, __dir__, __error__, __group__, __groupCollapsed__, __groupEnd__, __info__, __log__, __time__, __timeEnd__, __trace__ and __warn__. 
If logigng is enabled, and it stays enabled by default, then they work as normal. Otherwise they are silent.

#Examples
Include the script and away you go:

    <script src="silence.min.js"></script>
    <script>
    //Truen off logging
    console.silence.hush = true;

    console.log('does nothing'); //Does nothing
    </script>


