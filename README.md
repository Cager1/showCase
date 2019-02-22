# showCase
Jquery plugin for displaying photos/articles etc.

![showCase gif](http://g.recordit.co/TUv7ilBmtO.gif)

## How it works?
showCase clones selected element on which is called `showCase(speed)` and displays it in the middle of parent element with width and height equal to parent element minus 50. ( `$(this).parent().width() - 50` ).
It takes class `display-to-none` to hide arbitrary elements before plugin is called. After it's called it removes all `display-to-none` classes on all children elements of selected element.

Upon call of `showCase` plugin all classes of selected element are removed in order to ensure no class is disturbing with positioning and size of selected element. You should use classes for element positioning and ID's for element styling when using `showCase()` on element.
## Setup

### Getting started
For installation of this plugin you will need latest jquery version :

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>`

and you will have to [download](https://github.com/Cager1/showCase/archive/master.zip) showCase files and include them into your html file:

```
<script src=".../showCase.js"></script>
<link rel="stylesheet" type="text/css" href=".../showCase-styles.css"></link>
```

### Usage:
This is how basic showCase setup looks like:

Note: classes and id's are arbitrary

Note 2: all classes are removed in cloned version so you should use id's for styling elements while classes should be used for positioning

#### HTML

```
<div class="container">
  <div id="firstBox" class="boxes">
    <h2>
      Box 1
    </h2>
    <p class="display-to-none">
      Hello World!
    </p>
  </div>
</div>
```
#### Jquery

```
$("#firstBox").click(function() {
    $("#firstBox").showCase(1500);
});
```
Elements with "display-to-none" class are shown after plugin is called. Elements without display-to-none class are displayed and normaly contain elements title or description.

Here's working fiddle of showCase : [jsFiddle](https://jsfiddle.net/Cagger/q2jasc6u/)
