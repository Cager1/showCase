# showCase
Jquery plugin for displaying photos/articles etc.
<!-- gif coming soon -->

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

`$.showCase(setWidth, setHeight, speed);`

> **setWidth** is your desired width of element after event is triggered.

> **setHeight** is your desired height of element after event is triggered.

> **speed** is your desired animation speed.

Example: 

```
$("#something").click(function() {
    $("#something").showCase($("#something").width() * 2, $("#something").height() * 2, 1500);
});
```
