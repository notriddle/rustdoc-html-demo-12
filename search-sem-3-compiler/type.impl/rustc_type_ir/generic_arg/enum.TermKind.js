(function() {var type_impls = {
"rustc_middle":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TermKind%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#20\">source</a><a href=\"#impl-Clone-for-TermKind%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#20\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_middle::ty::generic_args::TermKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TermKind%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#21\">source</a><a href=\"#impl-Debug-for-TermKind%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#21\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, __f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::ty::generic_args::TermKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable%3C__D%3E-for-TermKind%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#28\">source</a><a href=\"#impl-Decodable%3C__D%3E-for-TermKind%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, __D&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt; for <a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,\n    __D: <a class=\"trait\" href=\"rustc_middle/ty/trait.TyDecoder.html\" title=\"trait rustc_middle::ty::TyDecoder\">TyDecoder</a>&lt;I = I&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Ty\" title=\"type rustc_middle::ty::Interner::Ty\">Ty</a>: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Const\" title=\"type rustc_middle::ty::Interner::Const\">Const</a>: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#28\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>(__decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __D</a>) -&gt; <a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;</h4></section></div></details>","Decodable<__D>","rustc_middle::ty::generic_args::TermKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable%3C__E%3E-for-TermKind%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#28\">source</a><a href=\"#impl-Encodable%3C__E%3E-for-TermKind%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, __E&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt; for <a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,\n    __E: <a class=\"trait\" href=\"rustc_middle/ty/trait.TyEncoder.html\" title=\"trait rustc_middle::ty::TyEncoder\">TyEncoder</a>&lt;I = I&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Ty\" title=\"type rustc_middle::ty::Interner::Ty\">Ty</a>: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Const\" title=\"type rustc_middle::ty::Interner::Const\">Const</a>: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#28\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Encodable.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, __encoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __E</a>)</h4></section></div></details>","Encodable<__E>","rustc_middle::ty::generic_args::TermKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3C__CTX%3E-for-TermKind%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#28\">source</a><a href=\"#impl-HashStable%3C__CTX%3E-for-TermKind%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, __CTX&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt; for <a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Ty\" title=\"type rustc_middle::ty::Interner::Ty\">Ty</a>: <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Const\" title=\"type rustc_middle::ty::Interner::Const\">Const</a>: <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#28\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(&amp;self, __hcx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __CTX</a>, __hasher: &amp;mut <a class=\"struct\" href=\"rustc_data_structures/stable_hasher/struct.StableHasher.html\" title=\"struct rustc_data_structures::stable_hasher::StableHasher\">StableHasher</a>)</h4></section></div></details>","HashStable<__CTX>","rustc_middle::ty::generic_args::TermKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-TermKind%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#20\">source</a><a href=\"#impl-PartialEq-for-TermKind%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#20\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","rustc_middle::ty::generic_args::TermKind"],["<section id=\"impl-Copy-for-TermKind%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#20\">source</a><a href=\"#impl-Copy-for-TermKind%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section>","Copy","rustc_middle::ty::generic_args::TermKind"],["<section id=\"impl-Eq-for-TermKind%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/generic_arg.rs.html#20\">source</a><a href=\"#impl-Eq-for-TermKind%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"rustc_type_ir/generic_arg/enum.TermKind.html\" title=\"enum rustc_type_ir::generic_arg::TermKind\">TermKind</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section>","Eq","rustc_middle::ty::generic_args::TermKind"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()