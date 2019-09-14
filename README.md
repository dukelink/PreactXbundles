# PreactXbundles

Preact X and relates IIFE bundles for simple and efficient web page loading:

```
    <script type="application/javascript" src="./lib/preact.iife.js"></script>
    <script>
      // Global IIFE w/o module export; Matches with node type defs in preact/src/index.d.ts
      var preact = preact.preact; 
    </script>
```


NOTE: An alternative to the pattern above is to modify the Rollup IIFE build to return "preact" instead of "exports" as follows:

```
var preact = (function (exports) {
	'use strict';

	var n,l,u,t,i,r={},f=[], ... code follows ...
	var preact = { render: D, h: s, Component: y };

	exports.preact = preact;

//	return exports;
	return preact;
}({}));
```


Example of usage (compatible with Preact typescript definitions):

```
    // Preact Imports: (VSCode, given some time, will find node_modules/preact/src/index.d.ts to associate these types...)
    const Component = preact.Component;
    const h = preact.h;
```

