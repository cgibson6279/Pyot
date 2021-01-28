(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{443:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[e._v("#")]),e._v(" Objects")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Asynchronous callbacks are only runable on a-prefixed methods, e.g. "),a("code",[e._v("aget")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"submodule-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submodule-objects"}},[e._v("#")]),e._v(" Submodule: "),a("code",[e._v("objects")])]),e._v(" "),a("h2",{attrs:{id:"ptrcache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ptrcache"}},[e._v("#")]),e._v(" "),a("code",[e._v("PtrCache")])]),e._v(" "),a("blockquote",[a("p",[e._v("A high performance mini local cache based on reference keeping. Be aware that this cache is NOT isolated, hence the performance difference (This one is much faster) from Omnistone.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This cache will not copy the objects on get/put, modification to objects affects cached objects.")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("DEPRECATED")]),e._v(" "),a("p",[a("strong",[e._v("Since v3.0.0:")]),e._v(" ptr_cache intersepting on PyotCore "),a("code",[e._v("get()")]),e._v(" method removed.")])]),e._v(" "),a("h3",{attrs:{id:"init-expiration-60-60-3-max-entries-5000"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-expiration-60-60-3-max-entries-5000"}},[e._v("#")]),e._v(" "),a("code",[e._v("__init__(expiration=60*60*3, max_entries=5000)")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("expiration")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(': Expiration time of objects (number of seconds). Negative value will be treated as "cache forever".')],1),e._v(" "),a("li",[a("code",[e._v("max_entries")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Max number of objects before culling, for sanity of preventing memory leak.")],1)]),e._v(" "),a("h3",{attrs:{id:"get-name-str-func-none-lazy-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-name-str-func-none-lazy-false"}},[e._v("#")]),e._v(" "),a("code",[e._v("get(name: str, func = None, lazy = False)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Get an object from the cache.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("func")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(" will be called when provided and if object doesn't exist, put the returned value to the cache and return it.")],1),e._v(" "),a("li",[a("code",[e._v("lazy")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(" flag if "),a("code",[e._v("func")]),e._v(" needs to be called before running it, therefore achieve lazy eval during runtime. If this param is set to True, "),a("code",[e._v("func")]),e._v(" should be a callable that returns itself (e.g. "),a("code",[e._v("lambda: myfunc")]),e._v(").")],1)]),e._v(" "),a("h3",{attrs:{id:"aget-name-str-coro-none-lazy-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aget-name-str-coro-none-lazy-false"}},[e._v("#")]),e._v(" "),a("code",[e._v("aget(name: str, coro = None, lazy = False)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Async get an object from the cache.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("coro")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(" will be awaited when provided and if object doesn't exist, put the returned value to the cache and return it. If the "),a("code",[e._v("coro")]),e._v(" doesn't need to be awaited it will be closed and not raise warnings.")],1),e._v(" "),a("li",[a("code",[e._v("lazy")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(" flag if "),a("code",[e._v("coro")]),e._v(" needs to be called before running it, therefore achieve lazy eval during runtime. If this param is set to True, "),a("code",[e._v("coro")]),e._v(" should be a callable that returns itself (e.g. "),a("code",[e._v("lambda: mycoro")]),e._v(").")],1)]),e._v(" "),a("h3",{attrs:{id:"set-name-str-val-exp-int-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-name-str-val-exp-int-none"}},[e._v("#")]),e._v(" "),a("code",[e._v("set(name: str, val, exp: int = None)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Put an object to the cache. Expiration can be provided to override default expiration on cache instantiation.")]),e._v(" "),a("h3",{attrs:{id:"clear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[e._v("#")]),e._v(" "),a("code",[e._v("clear()")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Clear the cache.")])]),e._v(" "),a("h2",{attrs:{id:"frozengenerator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frozengenerator"}},[e._v("#")]),e._v(" "),a("code",[e._v("FrozenGenerator")])]),e._v(" "),a("blockquote",[a("p",[e._v("Generator that isolates the original list by returning a copy of the object when iterated. Used for preventing memory leaks of self-filled objects with the price of more CPU time.")]),e._v(" "),a("h3",{attrs:{id:"init-li"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-li"}},[e._v("#")]),e._v(" "),a("code",[e._v("__init__(li)")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("li")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": The original list")],1)]),e._v(" "),a("h3",{attrs:{id:"iter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iter"}},[e._v("#")]),e._v(" "),a("code",[e._v("__iter__()")])]),e._v(" "),a("p",[e._v("Generator based iter.")])]),e._v(" "),a("h3",{attrs:{id:"submodule-locks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submodule-locks"}},[e._v("#")]),e._v(" Submodule: "),a("code",[e._v("locks")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("All these locks are preferably used in a context manager with "),a("code",[e._v("async with")]),e._v(" to safeguard acquire and release the lock.")])]),e._v(" "),a("h2",{attrs:{id:"seallock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seallock"}},[e._v("#")]),e._v(" "),a("code",[e._v("SealLock")])]),e._v(" "),a("blockquote",[a("p",[e._v("An awaitable threading Lock. The event loop won't be blocked when acquiring the lock.")]),e._v(" "),a("h3",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[e._v("#")]),e._v(" "),a("code",[e._v("__init__()")])]),e._v(" "),a("p",[e._v("Create the lock object.")]),e._v(" "),a("h3",{attrs:{id:"acquire"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acquire"}},[e._v("#")]),e._v(" "),a("code",[e._v("acquire()")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Acquire the lock without locking the loop")]),e._v(" "),a("h3",{attrs:{id:"release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release"}},[e._v("#")]),e._v(" "),a("code",[e._v("release()")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Release the lock, this is not async for the sake of easier cleanup (e.g. registering "),a("code",[e._v("atexit")]),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"redislock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redislock"}},[e._v("#")]),e._v(" "),a("code",[e._v("RedisLock")])]),e._v(" "),a("blockquote",[a("p",[e._v("An awaitable redis Lock. The event loop won't be blocked when acquiring the lock.")]),e._v(" "),a("h3",{attrs:{id:"init-redi-name-str-sleep-int-0-02-timeout-int-5-blocking-timeout-int-10-thread-local-bool-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-redi-name-str-sleep-int-0-02-timeout-int-5-blocking-timeout-int-10-thread-local-bool-false"}},[e._v("#")]),e._v(" "),a("code",[e._v('__init__(redi, name: str = "", sleep: int = 0.02, timeout:int = 5, blocking_timeout: int = 10, thread_local: bool = False)')])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("redi")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Redis instance from "),a("code",[e._v("redis.Redis")]),e._v(".")],1),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Name of the lock to allow multiple locks.")],1),e._v(" "),a("li",[a("code",[e._v("sleep")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Sleep time per loop.")],1),e._v(" "),a("li",[a("code",[e._v("timeout")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Timeout of the lock.")],1),e._v(" "),a("li",[a("code",[e._v("blocking_timeout")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Timeout for acquire the lock.")],1),e._v(" "),a("li",[a("code",[e._v("thread_local")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Flag the lock to belong the current thread (other thread can't see it).")],1)]),e._v(" "),a("h3",{attrs:{id:"acquire-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acquire-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("acquire()")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Acquire the lock without locking the loop")]),e._v(" "),a("h3",{attrs:{id:"release-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("release()")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Release the lock, this is not async for the sake of easier cleanup (e.g. registering "),a("code",[e._v("atexit")]),e._v(")")])]),e._v(" "),a("h3",{attrs:{id:"submodule-dicts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submodule-dicts"}},[e._v("#")]),e._v(" Submodule: "),a("code",[e._v("dicts")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("INFO")]),e._v(" "),a("p",[e._v("For these dict to use the default coroutine, call "),a("code",[e._v("aget")]),e._v(" instead of "),a("code",[e._v("get")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("For using functions as their default callback, if args and kwargs needs to be passed please wrap them in "),a("code",[e._v("functools.partial")]),e._v(".")]),e._v(" "),a("p",[e._v("For using coroutines as their default callback, please pass the coroutine as it (as a coroutine function and not as coroutine object) if args and kwargs needs to be passed please wrap them in "),a("code",[e._v("functools.partial")]),e._v(". This is needed because the same coroutine cannot be awaited more than once.")])]),e._v(" "),a("h2",{attrs:{id:"multidefaultdict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multidefaultdict"}},[e._v("#")]),e._v(" "),a("code",[e._v("MultiDefaultDict")])]),e._v(" "),a("blockquote",[a("p",[e._v("A default dict that supports coroutines as default callback and multiple get and sets. This dict can be subcripted or assign key values using regular dict syntax.")]),e._v(" "),a("h3",{attrs:{id:"init-default-callable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-default-callable"}},[e._v("#")]),e._v(" "),a("code",[e._v("__init__(default: Callable)")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("default")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Coroutine object, function or partial as default callback.")],1)]),e._v(" "),a("h3",{attrs:{id:"getitem-name-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getitem-name-str"}},[e._v("#")]),e._v(" "),a("code",[e._v("__getitem__(name: str)")])]),e._v(" "),a("p",[e._v("Get an object")]),e._v(" "),a("h3",{attrs:{id:"setitem-name-str-val-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setitem-name-str-val-any"}},[e._v("#")]),e._v(" "),a("code",[e._v("__setitem__(name: str, val: Any)")])]),e._v(" "),a("p",[e._v("Set an object")]),e._v(" "),a("h3",{attrs:{id:"get-name-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-name-str"}},[e._v("#")]),e._v(" "),a("code",[e._v("get(name: str)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Get an object")]),e._v(" "),a("h3",{attrs:{id:"set-name-str-val-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-name-str-val-any"}},[e._v("#")]),e._v(" "),a("code",[e._v("set(name: str, val: Any)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Set an object")]),e._v(" "),a("h3",{attrs:{id:"fget-name-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fget-name-str"}},[e._v("#")]),e._v(" "),a("code",[e._v("fget(name: str)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Returns a tuple of arguments that can be unpacked for pipelining")]),e._v(" "),a("h3",{attrs:{id:"fset-name-str-val-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fset-name-str-val-any"}},[e._v("#")]),e._v(" "),a("code",[e._v("fset(name: str, val: Any)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Returns a tuple of arguments that can be unpacked for pipelining")]),e._v(" "),a("h3",{attrs:{id:"aget-name-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aget-name-str"}},[e._v("#")]),e._v(" "),a("code",[e._v("aget(name: str)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Async get")]),e._v(" "),a("h3",{attrs:{id:"aset-name-str-val-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aset-name-str-val-any"}},[e._v("#")]),e._v(" "),a("code",[e._v("aset(name: str, val: Any)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Async set")]),e._v(" "),a("h3",{attrs:{id:"mget-li-list-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mget-li-list-str"}},[e._v("#")]),e._v(" "),a("code",[e._v("mget(li: List[str])")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Get many objects")]),e._v(" "),a("h3",{attrs:{id:"mset-dic-mapping-str-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mset-dic-mapping-str-any"}},[e._v("#")]),e._v(" "),a("code",[e._v("mset(dic: Mapping[str, Any])")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Set many objects")])]),e._v(" "),a("h2",{attrs:{id:"redisdefaultdict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redisdefaultdict"}},[e._v("#")]),e._v(" "),a("code",[e._v("RedisDefaultDict")])]),e._v(" "),a("blockquote",[a("p",[e._v("A Default dict that is stored on redis server. This dict can be subcripted or assign key values using regular dict syntax.")]),e._v(" "),a("h3",{attrs:{id:"init-redi-redis-redis-default-callable-prefix-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-redi-redis-redis-default-callable-prefix-str"}},[e._v("#")]),e._v(" "),a("code",[e._v('__init__(, redi: redis.Redis, default: Callable, prefix: str = "")')])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("redi")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Redis instance from "),a("code",[e._v("redis.Redis")])],1),e._v(" "),a("li",[a("code",[e._v("prefix")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Prefix to use for storing on the redis db.")],1),e._v(" "),a("li",[a("code",[e._v("default")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Coroutine object, function or partial as default callback.")],1)]),e._v(" "),a("h3",{attrs:{id:"getitem-name-str-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getitem-name-str-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("__getitem__(name: str)")])]),e._v(" "),a("p",[e._v("Get an object")]),e._v(" "),a("h3",{attrs:{id:"setitem-name-str-val-any-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setitem-name-str-val-any-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("__setitem__(name: str, val: Any)")])]),e._v(" "),a("p",[e._v("Set an object")]),e._v(" "),a("h3",{attrs:{id:"get-name-str-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-name-str-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("get(name: str)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Get an object")]),e._v(" "),a("h3",{attrs:{id:"set-name-str-val-any-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-name-str-val-any-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("set(name: str, val: Any)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Set an object")]),e._v(" "),a("h3",{attrs:{id:"fget-name-str-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fget-name-str-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("fget(name: str)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Returns a tuple of arguments that can be unpacked for pipelining")]),e._v(" "),a("h3",{attrs:{id:"fset-name-str-val-any-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fset-name-str-val-any-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("fset(name: str, val: Any)")])]),e._v(" "),a("p",[e._v("Returns a tuple of arguments that can be unpacked for pipelining")]),e._v(" "),a("h3",{attrs:{id:"aget-name-str-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aget-name-str-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("aget(name: str)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Async get")]),e._v(" "),a("h3",{attrs:{id:"aset-name-str-val-any-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aset-name-str-val-any-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("aset(name: str, val: Any)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Async set")]),e._v(" "),a("h3",{attrs:{id:"mget-li-list-str-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mget-li-list-str-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("mget(li: List[str])")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Get many objects")]),e._v(" "),a("h3",{attrs:{id:"mset-dic-mapping-str-any-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mset-dic-mapping-str-any-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("mset(dic: Mapping[str, Any])")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Set many objects")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Avoid storing "),a("code",[e._v("None")]),e._v(" on RedisDefaultDict as it will trigger the default callback everytime.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);