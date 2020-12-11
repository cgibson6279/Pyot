(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{434:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pyot-slowing-down-on-serialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pyot-slowing-down-on-serialization"}},[t._v("#")]),t._v(" Pyot slowing down on serialization")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT FACT")]),t._v(" "),a("p",[t._v("Serialization of dicts to python objects will always touch creation of it, so called instantiation. In python instationtion is relatively slow. This is a Python bottleneck, not a framework level bottleneck. The straight out solution is to write C code that can be imported to Python, but that is not something the maintainer is good at.")])]),t._v(" "),a("p",[t._v("The *"),a("strong",[t._v("explanation and solution is given")]),t._v(" using the "),a("code",[t._v("lol.MatchTimeline")]),t._v(" or "),a("code",[t._v("lol.Timeline")]),t._v(" objects from the lol model.")]),t._v(" "),a("p",[a("code",[t._v("MatchEventData")]),t._v(" are usually "),a("strong",[a("em",[t._v("large in numbers (hundreds per timeline)")])]),t._v(", Pyot "),a("strong",[a("em",[t._v("can be slow")])]),t._v(" when serializing these objects and creating the actual object (called instantiation). If you are bothered by performance issues, "),a("strong",[a("em",[t._v("the recommended solution")])]),t._v(" would be to access it as a dict to avoid the instantiation and serialization:")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" timeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"events"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Do stuff with the event (as dictionary). Tested 5x faster.")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("The "),a("strong",[a("em",[t._v("dict keys and values")])]),t._v(" are the same as returned by the Riot API.")]),t._v(" "),a("p",[t._v("Another cause of slowness on "),a("code",[t._v("MatchTimeline")]),t._v("/ "),a("code",[t._v("Timeline")]),t._v(" might be caused by data integrity protection of Pyot stores. Stores makes sure that all data is "),a("strong",[a("em",[t._v("safe")])]),t._v(" from any mutation, so stores will serialize and deserialize when accessing the object, which adds up significant amount of CPU time.")]),t._v(" "),a("p",[t._v("The solution is a local "),a("code",[t._v("PtrCache")]),t._v(" cache from the utils module. Do not mutate objects saved on "),a("code",[t._v("PtrCache")]),t._v(", the cached object is "),a("strong",[a("em",[t._v("not protected")])]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PtrCache\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" lol\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("somefunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    cache "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PtrCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" participant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"events"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" lol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'itemId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ptr_cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# intercepts the cache")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("strong",[t._v("However this can still be improved")]),t._v(", you can avoid the instantiation of "),a("code",[t._v("lol.Item")]),t._v(" completely by loading all the items at once or creating a function that delays the instantiation. This is 2 times faster than above implementation.")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PtrCache\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" lol\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("somefunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    item_cache "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PtrCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" participant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"events"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item_cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'itemId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" get_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'itemId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("itemid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Delays instantiation of lol.Item to only when needed")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" lol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("itemid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[a("strong",[t._v("To improve it even further")]),t._v(", you can avoid the coroutine instantiation aswell, prefill the cache with all the items and set the expiration of the cache to forever so it never expires. This is 3 times faster than above implementation.")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PtrCache\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" lol\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("somefunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    item_cache "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PtrCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    items "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        item_cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" participant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"events"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item_cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'itemId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("It is best practice to have different cache for different type of objects, so keys can be easily made unique.")])])}),[],!1,null,null,null);s.default=e.exports}}]);