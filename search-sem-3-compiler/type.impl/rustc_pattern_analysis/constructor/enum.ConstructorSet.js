(function() {var type_impls = {
"rustc_pattern_analysis":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ConstructorSet%3CCx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#1000-1175\">source</a><a href=\"#impl-ConstructorSet%3CCx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cx: <a class=\"trait\" href=\"rustc_pattern_analysis/trait.PatCx.html\" title=\"trait rustc_pattern_analysis::PatCx\">PatCx</a>&gt; <a class=\"enum\" href=\"rustc_pattern_analysis/constructor/enum.ConstructorSet.html\" title=\"enum rustc_pattern_analysis::constructor::ConstructorSet\">ConstructorSet</a>&lt;Cx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.split\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#1005-1152\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_pattern_analysis/constructor/enum.ConstructorSet.html#tymethod.split\" class=\"fn\">split</a>&lt;'a&gt;(\n    &amp;self,\n    ctors: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;'a <a class=\"enum\" href=\"rustc_pattern_analysis/constructor/enum.Constructor.html\" title=\"enum rustc_pattern_analysis::constructor::Constructor\">Constructor</a>&lt;Cx&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n) -&gt; <a class=\"struct\" href=\"rustc_pattern_analysis/constructor/struct.SplitConstructorSet.html\" title=\"struct rustc_pattern_analysis::constructor::SplitConstructorSet\">SplitConstructorSet</a>&lt;Cx&gt;<div class=\"where\">where\n    Cx: 'a,</div></h4></section></summary><div class=\"docblock\"><p>This analyzes a column of constructors to 1/ determine which constructors of the type (if\nany) are missing; 2/ split constructors to handle non-trivial intersections e.g. on ranges\nor slices. This can get subtle; see <a href=\"rustc_pattern_analysis/constructor/struct.SplitConstructorSet.html\" title=\"struct rustc_pattern_analysis::constructor::SplitConstructorSet\"><code>SplitConstructorSet</code></a> for details of this operation\nand its invariants.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.all_empty\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#1155-1174\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"rustc_pattern_analysis/constructor/enum.ConstructorSet.html#tymethod.all_empty\" class=\"fn\">all_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Whether this set only contains empty constructors.</p>\n</div></details></div></details>",0,"rustc_pattern_analysis::rustc::ConstructorSet"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ConstructorSet%3CCx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#945\">source</a><a href=\"#impl-Debug-for-ConstructorSet%3CCx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cx: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"rustc_pattern_analysis/trait.PatCx.html\" title=\"trait rustc_pattern_analysis::PatCx\">PatCx</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"rustc_pattern_analysis/constructor/enum.ConstructorSet.html\" title=\"enum rustc_pattern_analysis::constructor::ConstructorSet\">ConstructorSet</a>&lt;Cx&gt;<div class=\"where\">where\n    Cx::<a class=\"associatedtype\" href=\"rustc_pattern_analysis/trait.PatCx.html#associatedtype.VariantIdx\" title=\"type rustc_pattern_analysis::PatCx::VariantIdx\">VariantIdx</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#945\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_pattern_analysis::rustc::ConstructorSet"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()