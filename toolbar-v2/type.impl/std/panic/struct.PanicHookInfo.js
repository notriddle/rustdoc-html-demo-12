(function() {
    var type_impls = Object.fromEntries([["std",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PanicHookInfo%3C'a%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.81.0\">1.81.0</span> · <a class=\"src\" href=\"src/std/panic.rs.html#41\">source</a></span><a href=\"#impl-Debug-for-PanicHookInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"std/fmt/trait.Debug.html\" title=\"trait std::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"std/panic/struct.PanicHookInfo.html\" title=\"struct std::panic::PanicHookInfo\">PanicHookInfo</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/std/panic.rs.html#41\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"std/fmt/struct.Formatter.html\" title=\"struct std::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"std/fmt/type.Result.html\" title=\"type std::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"std/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","std::panic::PanicInfo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-PanicHookInfo%3C'_%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.26.0\">1.26.0</span> · <a class=\"src\" href=\"src/std/panic.rs.html#199-209\">source</a></span><a href=\"#impl-Display-for-PanicHookInfo%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/fmt/trait.Display.html\" title=\"trait std::fmt::Display\">Display</a> for <a class=\"struct\" href=\"std/panic/struct.PanicHookInfo.html\" title=\"struct std::panic::PanicHookInfo\">PanicHookInfo</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/std/panic.rs.html#200-208\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, formatter: &amp;mut <a class=\"struct\" href=\"std/fmt/struct.Formatter.html\" title=\"struct std::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"std/fmt/type.Result.html\" title=\"type std::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"std/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","std::panic::PanicInfo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PanicHookInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/std/panic.rs.html#49-196\">source</a><a href=\"#impl-PanicHookInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"struct\" href=\"std/panic/struct.PanicHookInfo.html\" title=\"struct std::panic::PanicHookInfo\">PanicHookInfo</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.payload\" class=\"method\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.10.0\">1.10.0</span> · <a class=\"src\" href=\"src/std/panic.rs.html#93-95\">source</a></span><h4 class=\"code-header\">pub fn <a href=\"std/panic/struct.PanicHookInfo.html#tymethod.payload\" class=\"fn\">payload</a>(&amp;self) -&gt; &amp;(dyn <a class=\"trait\" href=\"std/any/trait.Any.html\" title=\"trait std::any::Any\">Any</a> + <a class=\"trait\" href=\"std/marker/trait.Send.html\" title=\"trait std::marker::Send\">Send</a>)</h4></section></summary><div class=\"docblock\"><p>Returns the payload associated with the panic.</p>\n<p>This will commonly, but not always, be a <code>&amp;'static str</code> or <a href=\"../../std/string/struct.String.html\"><code>String</code></a>.</p>\n<p>A invocation of the <code>panic!()</code> macro in Rust 2021 or later will always result in a\npanic payload of type <code>&amp;'static str</code> or <code>String</code>.</p>\n<p>Only an invocation of <a href=\"std/panic/fn.panic_any.html\" title=\"fn std::panic::panic_any\"><code>panic_any</code></a>\n(or, in Rust 2018 and earlier, <code>panic!(x)</code> where <code>x</code> is something other than a string)\ncan result in a panic payload other than a <code>&amp;'static str</code> or <code>String</code>.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap should_panic\"><a href=\"#\" class=\"tooltip\" title=\"This example panics\">ⓘ</a><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::panic;\n\npanic::set_hook(Box::new(|panic_info| {\n    <span class=\"kw\">if let </span><span class=\"prelude-val\">Some</span>(s) = panic_info.payload().downcast_ref::&lt;<span class=\"kw-2\">&amp;</span>str&gt;() {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"panic occurred: {s:?}\"</span>);\n    } <span class=\"kw\">else if let </span><span class=\"prelude-val\">Some</span>(s) = panic_info.payload().downcast_ref::&lt;String&gt;() {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"panic occurred: {s:?}\"</span>);\n    } <span class=\"kw\">else </span>{\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"panic occurred\"</span>);\n    }\n}));\n\n<span class=\"macro\">panic!</span>(<span class=\"string\">\"Normal panic\"</span>);</code></pre><a class=\"test-arrow\" target=\"_blank\" title=\"Run code\" href=\"https://play.rust-lang.org/?code=%23!%5Ballow(unused)%5D%0Afn+main()+%7B%0A++++use+std::panic;%0A++++%0A++++panic::set_hook(Box::new(%7Cpanic_info%7C+%7B%0A++++++++if+let+Some(s)+=+panic_info.payload().downcast_ref::%3C%26str%3E()+%7B%0A++++++++++++println!(%22panic+occurred:+%7Bs:?%7D%22);%0A++++++++%7D+else+if+let+Some(s)+=+panic_info.payload().downcast_ref::%3CString%3E()+%7B%0A++++++++++++println!(%22panic+occurred:+%7Bs:?%7D%22);%0A++++++++%7D+else+%7B%0A++++++++++++println!(%22panic+occurred%22);%0A++++++++%7D%0A++++%7D));%0A++++%0A++++panic!(%22Normal+panic%22);%0A%7D&amp;edition=2021\"></a></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.payload_as_str\" class=\"method\"><a class=\"src rightside\" href=\"src/std/panic.rs.html#126-134\">source</a><h4 class=\"code-header\">pub fn <a href=\"std/panic/struct.PanicHookInfo.html#tymethod.payload_as_str\" class=\"fn\">payload_as_str</a>(&amp;self) -&gt; <a class=\"enum\" href=\"std/option/enum.Option.html\" title=\"enum std::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"std/primitive.str.html\">str</a>&gt;</h4></section><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>panic_payload_as_str</code>&nbsp;<a href=\"https://github.com/rust-lang/rust/issues/125175\">#125175</a>)</span></div></span></summary><div class=\"docblock\"><p>Returns the payload associated with the panic, if it is a string.</p>\n<p>This returns the payload if it is of type <code>&amp;'static str</code> or <code>String</code>.</p>\n<p>A invocation of the <code>panic!()</code> macro in Rust 2021 or later will always result in a\npanic payload where <code>payload_as_str</code> returns <code>Some</code>.</p>\n<p>Only an invocation of <a href=\"std/panic/fn.panic_any.html\" title=\"fn std::panic::panic_any\"><code>panic_any</code></a>\n(or, in Rust 2018 and earlier, <code>panic!(x)</code> where <code>x</code> is something other than a string)\ncan result in a panic payload where <code>payload_as_str</code> returns <code>None</code>.</p>\n<h5 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example</h5>\n<div class=\"example-wrap should_panic\"><a href=\"#\" class=\"tooltip\" title=\"This example panics\">ⓘ</a><pre class=\"rust rust-example-rendered\"><code><span class=\"attr\">#![feature(panic_payload_as_str)]\n\n</span>std::panic::set_hook(Box::new(|panic_info| {\n    <span class=\"kw\">if let </span><span class=\"prelude-val\">Some</span>(s) = panic_info.payload_as_str() {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"panic occurred: {s:?}\"</span>);\n    } <span class=\"kw\">else </span>{\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"panic occurred\"</span>);\n    }\n}));\n\n<span class=\"macro\">panic!</span>(<span class=\"string\">\"Normal panic\"</span>);</code></pre><a class=\"test-arrow\" target=\"_blank\" title=\"Run code\" href=\"https://play.rust-lang.org/?code=%23!%5Ballow(unused)%5D%0A%23!%5Bfeature(panic_payload_as_str)%5D%0A%0Afn+main()+%7B%0A++++std::panic::set_hook(Box::new(%7Cpanic_info%7C+%7B%0A++++++++if+let+Some(s)+=+panic_info.payload_as_str()+%7B%0A++++++++++++println!(%22panic+occurred:+%7Bs:?%7D%22);%0A++++++++%7D+else+%7B%0A++++++++++++println!(%22panic+occurred%22);%0A++++++++%7D%0A++++%7D));%0A++++%0A++++panic!(%22Normal+panic%22);%0A%7D&amp;version=nightly&amp;edition=2021\"></a></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.location\" class=\"method\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.10.0\">1.10.0</span> · <a class=\"src\" href=\"src/std/panic.rs.html#163-167\">source</a></span><h4 class=\"code-header\">pub fn <a href=\"std/panic/struct.PanicHookInfo.html#tymethod.location\" class=\"fn\">location</a>(&amp;self) -&gt; <a class=\"enum\" href=\"std/option/enum.Option.html\" title=\"enum std::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"std/panic/struct.Location.html\" title=\"struct std::panic::Location\">Location</a>&lt;'_&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns information about the location from which the panic originated,\nif available.</p>\n<p>This method will currently always return <a href=\"std/option/enum.Option.html#variant.Some\" title=\"variant std::option::Option::Some\"><code>Some</code></a>, but this may change\nin future versions.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap should_panic\"><a href=\"#\" class=\"tooltip\" title=\"This example panics\">ⓘ</a><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::panic;\n\npanic::set_hook(Box::new(|panic_info| {\n    <span class=\"kw\">if let </span><span class=\"prelude-val\">Some</span>(location) = panic_info.location() {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"panic occurred in file '{}' at line {}\"</span>,\n            location.file(),\n            location.line(),\n        );\n    } <span class=\"kw\">else </span>{\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"panic occurred but can't get location information...\"</span>);\n    }\n}));\n\n<span class=\"macro\">panic!</span>(<span class=\"string\">\"Normal panic\"</span>);</code></pre><a class=\"test-arrow\" target=\"_blank\" title=\"Run code\" href=\"https://play.rust-lang.org/?code=%23!%5Ballow(unused)%5D%0Afn+main()+%7B%0A++++use+std::panic;%0A++++%0A++++panic::set_hook(Box::new(%7Cpanic_info%7C+%7B%0A++++++++if+let+Some(location)+=+panic_info.location()+%7B%0A++++++++++++println!(%22panic+occurred+in+file+'%7B%7D'+at+line+%7B%7D%22,%0A++++++++++++++++location.file(),%0A++++++++++++++++location.line(),%0A++++++++++++);%0A++++++++%7D+else+%7B%0A++++++++++++println!(%22panic+occurred+but+can't+get+location+information...%22);%0A++++++++%7D%0A++++%7D));%0A++++%0A++++panic!(%22Normal+panic%22);%0A%7D&amp;edition=2021\"></a></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.can_unwind\" class=\"method\"><a class=\"src rightside\" href=\"src/std/panic.rs.html#182-184\">source</a><h4 class=\"code-header\">pub fn <a href=\"std/panic/struct.PanicHookInfo.html#tymethod.can_unwind\" class=\"fn\">can_unwind</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"std/primitive.bool.html\">bool</a></h4></section><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>panic_can_unwind</code>&nbsp;<a href=\"https://github.com/rust-lang/rust/issues/92988\">#92988</a>)</span></div></span></summary><div class=\"docblock\"><p>Returns whether the panic handler is allowed to unwind the stack from\nthe point where the panic occurred.</p>\n<p>This is true for most kinds of panics with the exception of panics\ncaused by trying to unwind out of a <code>Drop</code> implementation or a function\nwhose ABI does not support unwinding.</p>\n<p>It is safe for a panic handler to unwind even when this function returns\nfalse, however this will simply cause the panic handler to be called\nagain.</p>\n</div></details></div></details>",0,"std::panic::PanicInfo"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[13463]}