Superclass Inheritance System on JavaScript
===========================================

Just it.

Use
---

```
var _ = require ('lodash');
// ...
_.assign (_, require ('superclass'));
var metal = new Function;
var gold = new Function;
_.superclass (gold, metal);
_.instanceof (new gold, metal)  => true
```

Test
----

```
user@linux ~/superclass $ mocha test
```
