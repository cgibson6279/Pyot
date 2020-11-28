(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{431:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[t._v("#")]),t._v(" Objects")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Asynchronous callbacks are only runable on a-prefixed methods, e.g. "),a("code",[t._v("aget")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"submodule-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submodule-objects"}},[t._v("#")]),t._v(" Submodule: "),a("code",[t._v("objects")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("DEPRECATED")]),t._v(" "),a("p",[t._v("Starting v1.2.0")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ArrowCache")]),t._v(" has been renamed to "),a("code",[t._v("PtrCache")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("CloneGenerator")]),t._v(" has been renamed to "),a("code",[t._v("FrozenGenerator")]),t._v(".")])])]),t._v(" "),a("h2",{attrs:{id:"ptrcache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ptrcache"}},[t._v("#")]),t._v(" "),a("code",[t._v("PtrCache")])]),t._v(" "),a("blockquote",[a("p",[t._v("A high performance mini local cache based on reference keeping. Be aware that this cache is NOT isolated, hence the performance difference (This one is much faster) from Omnistone.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This cache will not copy the objects on get/put, modification to objects affects cached objects.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NEW")]),t._v(" "),a("p",[a("strong",[t._v("Since v2.0.0:")]),t._v(" You can intercept the cache into the "),a("code",[t._v("get()")]),t._v(" method of a Pyot Core object for syntax sugar.")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("cache "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PtrCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nitem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2003")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ptr_cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("h3",{attrs:{id:"init-expiration-60-60-3-max-entries-2000"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-expiration-60-60-3-max-entries-2000"}},[t._v("#")]),t._v(" "),a("code",[t._v("__init__(expiration=60*60*3, max_entries=2000)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("expiration")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Expiration time of objects.")],1),t._v(" "),a("li",[a("code",[t._v("max_entries")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Max number of objects before culling.")],1)]),t._v(" "),a("h3",{attrs:{id:"get-name-str-func-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-name-str-func-none"}},[t._v("#")]),t._v(" "),a("code",[t._v("get(name: str, func = None)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Get an object from the cache.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("func")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" will be called when provided and if object doesn't exist, put the returned value to the cache and return it.")],1)]),t._v(" "),a("h3",{attrs:{id:"aget-name-str-coro-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aget-name-str-coro-none"}},[t._v("#")]),t._v(" "),a("code",[t._v("aget(name: str, coro = None)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Async get an object from the cache.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("coro")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" will be awaited when provided and if object doesn't exist, put the returned value to the cache and return it. If the "),a("code",[t._v("coro")]),t._v(" doesn't need to be awaited it will be closed and not raise warnings.")],1)]),t._v(" "),a("h3",{attrs:{id:"set-name-str-val"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-name-str-val"}},[t._v("#")]),t._v(" "),a("code",[t._v("set(name: str, val)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Put an object to the cache.")]),t._v(" "),a("h3",{attrs:{id:"clear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[t._v("#")]),t._v(" "),a("code",[t._v("clear()")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Clear the cache.")])]),t._v(" "),a("h2",{attrs:{id:"frozengenerator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frozengenerator"}},[t._v("#")]),t._v(" "),a("code",[t._v("FrozenGenerator")])]),t._v(" "),a("blockquote",[a("p",[t._v("Generator that isolates the original list by returning a copy of the object when iterated. Used for preventing memory leaks of self-filled objects with the price of more CPU time.")]),t._v(" "),a("h3",{attrs:{id:"init-li"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-li"}},[t._v("#")]),t._v(" "),a("code",[t._v("__init__(li)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("li")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": The original list")],1)]),t._v(" "),a("h3",{attrs:{id:"iter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iter"}},[t._v("#")]),t._v(" "),a("code",[t._v("__iter__()")])]),t._v(" "),a("p",[t._v("Generator based iter.")])]),t._v(" "),a("h3",{attrs:{id:"submodule-locks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submodule-locks"}},[t._v("#")]),t._v(" Submodule: "),a("code",[t._v("locks")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("All these locks are preferably used in a context manager with "),a("code",[t._v("async with")]),t._v(" to safeguard acquire and release the lock.")])]),t._v(" "),a("h2",{attrs:{id:"seallock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seallock"}},[t._v("#")]),t._v(" "),a("code",[t._v("SealLock")])]),t._v(" "),a("blockquote",[a("p",[t._v("An awaitable threading Lock. The event loop won't be blocked when acquiring the lock.")]),t._v(" "),a("h3",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[t._v("#")]),t._v(" "),a("code",[t._v("__init__()")])]),t._v(" "),a("p",[t._v("Create the lock object.")]),t._v(" "),a("h3",{attrs:{id:"acquire"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acquire"}},[t._v("#")]),t._v(" "),a("code",[t._v("acquire()")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Acquire the lock without locking the loop")]),t._v(" "),a("h3",{attrs:{id:"release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release"}},[t._v("#")]),t._v(" "),a("code",[t._v("release()")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Release the lock, this is not async for the sake of easier cleanup (e.g. registering "),a("code",[t._v("atexit")]),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"redislock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redislock"}},[t._v("#")]),t._v(" "),a("code",[t._v("RedisLock")])]),t._v(" "),a("blockquote",[a("p",[t._v("An awaitable redis Lock. The event loop won't be blocked when acquiring the lock.")]),t._v(" "),a("h3",{attrs:{id:"init-redi-name-str-sleep-int-0-02-timeout-int-5-blocking-timeout-int-10-thread-local-bool-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-redi-name-str-sleep-int-0-02-timeout-int-5-blocking-timeout-int-10-thread-local-bool-false"}},[t._v("#")]),t._v(" "),a("code",[t._v('__init__(redi, name: str = "", sleep: int = 0.02, timeout:int = 5, blocking_timeout: int = 10, thread_local: bool = False)')])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("redi")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Redis instance from "),a("code",[t._v("redis.Redis")]),t._v(".")],1),t._v(" "),a("li",[a("code",[t._v("name")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Name of the lock to allow multiple locks.")],1),t._v(" "),a("li",[a("code",[t._v("sleep")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Sleep time per loop.")],1),t._v(" "),a("li",[a("code",[t._v("timeout")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Timeout of the lock.")],1),t._v(" "),a("li",[a("code",[t._v("blocking_timeout")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Timeout for acquire the lock.")],1),t._v(" "),a("li",[a("code",[t._v("thread_local")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Flag the lock to belong the current thread (other thread can't see it).")],1)]),t._v(" "),a("h3",{attrs:{id:"acquire-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acquire-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("acquire()")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Acquire the lock without locking the loop")]),t._v(" "),a("h3",{attrs:{id:"release-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("release()")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Release the lock, this is not async for the sake of easier cleanup (e.g. registering "),a("code",[t._v("atexit")]),t._v(")")])]),t._v(" "),a("h3",{attrs:{id:"submodule-dicts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submodule-dicts"}},[t._v("#")]),t._v(" Submodule: "),a("code",[t._v("dicts")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("INFO")]),t._v(" "),a("p",[t._v("For these dict to use the default coroutine, call "),a("code",[t._v("aget")]),t._v(" instead of "),a("code",[t._v("get")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("For using functions as their default callback, if args and kwargs needs to be passed please wrap them in "),a("code",[t._v("functools.partial")]),t._v(".")]),t._v(" "),a("p",[t._v("For using coroutines as their default callback, please pass the coroutine as it (as a coroutine function and not as coroutine object) if args and kwargs needs to be passed please wrap them in "),a("code",[t._v("functools.partial")]),t._v(". This is needed because the same coroutine cannot be awaited more than once.")])]),t._v(" "),a("h2",{attrs:{id:"multidefaultdict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multidefaultdict"}},[t._v("#")]),t._v(" "),a("code",[t._v("MultiDefaultDict")])]),t._v(" "),a("blockquote",[a("p",[t._v("A default dict that supports coroutines as default callback and multiple get and sets. This dict can be subcripted or assign key values using regular dict syntax.")]),t._v(" "),a("h3",{attrs:{id:"init-default-callable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-default-callable"}},[t._v("#")]),t._v(" "),a("code",[t._v("__init__(default: Callable)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("default")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Coroutine object, function or partial as default callback.")],1)]),t._v(" "),a("h3",{attrs:{id:"getitem-name-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getitem-name-str"}},[t._v("#")]),t._v(" "),a("code",[t._v("__getitem__(name: str)")])]),t._v(" "),a("p",[t._v("Get an object")]),t._v(" "),a("h3",{attrs:{id:"setitem-name-str-val-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setitem-name-str-val-any"}},[t._v("#")]),t._v(" "),a("code",[t._v("__setitem__(name: str, val: Any)")])]),t._v(" "),a("p",[t._v("Set an object")]),t._v(" "),a("h3",{attrs:{id:"get-name-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-name-str"}},[t._v("#")]),t._v(" "),a("code",[t._v("get(name: str)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Get an object")]),t._v(" "),a("h3",{attrs:{id:"set-name-str-val-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-name-str-val-any"}},[t._v("#")]),t._v(" "),a("code",[t._v("set(name: str, val: Any)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Set an object")]),t._v(" "),a("h3",{attrs:{id:"fget-name-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fget-name-str"}},[t._v("#")]),t._v(" "),a("code",[t._v("fget(name: str)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Returns a tuple of arguments that can be unpacked for pipelining")]),t._v(" "),a("h3",{attrs:{id:"fset-name-str-val-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fset-name-str-val-any"}},[t._v("#")]),t._v(" "),a("code",[t._v("fset(name: str, val: Any)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Returns a tuple of arguments that can be unpacked for pipelining")]),t._v(" "),a("h3",{attrs:{id:"aget-name-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aget-name-str"}},[t._v("#")]),t._v(" "),a("code",[t._v("aget(name: str)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Async get")]),t._v(" "),a("h3",{attrs:{id:"aset-name-str-val-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aset-name-str-val-any"}},[t._v("#")]),t._v(" "),a("code",[t._v("aset(name: str, val: Any)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Async set")]),t._v(" "),a("h3",{attrs:{id:"mget-li-list-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mget-li-list-str"}},[t._v("#")]),t._v(" "),a("code",[t._v("mget(li: List[str])")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Get many objects")]),t._v(" "),a("h3",{attrs:{id:"mset-dic-mapping-str-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mset-dic-mapping-str-any"}},[t._v("#")]),t._v(" "),a("code",[t._v("mset(dic: Mapping[str, Any])")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Set many objects")])]),t._v(" "),a("h2",{attrs:{id:"redisdefaultdict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redisdefaultdict"}},[t._v("#")]),t._v(" "),a("code",[t._v("RedisDefaultDict")])]),t._v(" "),a("blockquote",[a("p",[t._v("A Default dict that is stored on redis server. This dict can be subcripted or assign key values using regular dict syntax.")]),t._v(" "),a("h3",{attrs:{id:"init-redi-redis-redis-default-callable-prefix-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-redi-redis-redis-default-callable-prefix-str"}},[t._v("#")]),t._v(" "),a("code",[t._v('__init__(, redi: redis.Redis, default: Callable, prefix: str = "")')])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("redi")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Redis instance from "),a("code",[t._v("redis.Redis")])],1),t._v(" "),a("li",[a("code",[t._v("prefix")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Prefix to use for storing on the redis db.")],1),t._v(" "),a("li",[a("code",[t._v("default")]),t._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(": Coroutine object, function or partial as default callback.")],1)]),t._v(" "),a("h3",{attrs:{id:"getitem-name-str-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getitem-name-str-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("__getitem__(name: str)")])]),t._v(" "),a("p",[t._v("Get an object")]),t._v(" "),a("h3",{attrs:{id:"setitem-name-str-val-any-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setitem-name-str-val-any-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("__setitem__(name: str, val: Any)")])]),t._v(" "),a("p",[t._v("Set an object")]),t._v(" "),a("h3",{attrs:{id:"get-name-str-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-name-str-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("get(name: str)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Get an object")]),t._v(" "),a("h3",{attrs:{id:"set-name-str-val-any-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-name-str-val-any-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("set(name: str, val: Any)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Set an object")]),t._v(" "),a("h3",{attrs:{id:"fget-name-str-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fget-name-str-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("fget(name: str)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Returns a tuple of arguments that can be unpacked for pipelining")]),t._v(" "),a("h3",{attrs:{id:"fset-name-str-val-any-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fset-name-str-val-any-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("fset(name: str, val: Any)")])]),t._v(" "),a("p",[t._v("Returns a tuple of arguments that can be unpacked for pipelining")]),t._v(" "),a("h3",{attrs:{id:"aget-name-str-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aget-name-str-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("aget(name: str)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Async get")]),t._v(" "),a("h3",{attrs:{id:"aset-name-str-val-any-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aset-name-str-val-any-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("aset(name: str, val: Any)")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),t._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Async set")]),t._v(" "),a("h3",{attrs:{id:"mget-li-list-str-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mget-li-list-str-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("mget(li: List[str])")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Get many objects")]),t._v(" "),a("h3",{attrs:{id:"mset-dic-mapping-str-any-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mset-dic-mapping-str-any-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("mset(dic: Mapping[str, Any])")]),t._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("Set many objects")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Avoid storing "),a("code",[t._v("None")]),t._v(" on RedisDefaultDict as it will trigger the default callback everytime.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);