searchState.loadedDescShard("proc_macro", 0, "A support library for macro authors when defining new …\nA <code>Punct</code> token cannot join with the following token to form …\n<code>{ ... }</code>\n<code>[ ... ]</code>\nDescribes how a sequence of token trees is delimited.\nA structure representing a diagnostic message and …\nAn error.\nError returned from <code>TokenStream::expand_expr</code>.\nA delimited token stream.\nA token stream surrounded by bracket delimiters.\nA help message.\nAn identifier (<code>ident</code>).\nAn identifier.\nA <code>Punct</code> token can join with the following token to form a …\nAn enum representing a diagnostic level.\nError returned from <code>TokenStream::from_str</code>.\nA literal string (<code>&quot;hello&quot;</code>), byte string (<code>b&quot;hello&quot;</code>), C …\nA literal character (<code>&#39;a&#39;</code>), string (<code>&quot;hello&quot;</code>), number (<code>2.3</code>), …\nTrait implemented by types that can be converted into a …\n<code>∅ ... ∅</code> An invisible delimiter, that may, for example, …\nA note.\n<code>( ... )</code>\nA <code>Punct</code> is a single punctuation character such as <code>+</code>, <code>-</code> or <code>#</code>…\nA single punctuation character (<code>+</code>, <code>,</code>, <code>$</code>, etc.).\nThe source file of a given <code>Span</code>.\nIndicates whether a <code>Punct</code> token can join with the …\nA region of source code, along with macro expansion …\nTypes that can be interpolated inside a <code>quote!</code> invocation.\nThe main type provided by this crate, representing an …\nA single token or a delimited sequence of token trees …\nA warning.\nReturns the value of this punctuation character as <code>char</code>.\nByte character literal.\nReturns the span’s byte position range in the source …\nByte string literal.\nC string literal.\nThe span of the invocation of the current procedural macro.\nCharacter literal.\nReturns an iterator over the children diagnostics of <code>self</code>.\nThe one-indexed column of the source file where the span …\nA span that resolves at the macro definition site.\nReturns the delimiter of this <code>Group</code>\nEmit the diagnostic.\nCreates an empty span pointing to directly after this span.\nCompares two spans to see if they’re equal.\nAdds a new child diagnostic message to <code>self</code> with the …\nCreates a new <code>Diagnostic</code> with the given <code>message</code> at the span\nParses this <code>TokenStream</code> as an expression and attempts to …\nCreates a new suffixed floating-point literal.\nCreates a new unsuffixed floating-point literal.\nCreates a new suffixed floating-point literal.\nCreates a new unsuffixed floating-point literal.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAdds a new child diagnostic message to <code>self</code> with the …\nCreates a new <code>Diagnostic</code> with the given <code>message</code> at the span\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts <code>self</code> into a <code>Vec&lt;Span&gt;</code>.\nConvert <code>self</code> directly into a <code>TokenStream</code> object.\nConvert <code>self</code> directly into a <code>TokenStream</code> object.\nDetermines whether proc_macro has been made accessible to …\nChecks if this <code>TokenStream</code> is empty.\nReturns <code>true</code> if this source file is a real source file, …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new span encompassing <code>self</code> and <code>other</code>.\nReturns the diagnostic <code>level</code> for <code>self</code>.\nThe one-indexed line of the source file where the span …\nCreates a new span with the same name resolution behavior …\nReturns the message in <code>self</code>.\nA span that represents <code>macro_rules</code> hygiene, and sometimes …\nCreates a new diagnostic with the given <code>level</code> and <code>message</code>.\nReturns an empty <code>TokenStream</code> containing no token trees.\nCreates a new <code>Group</code> with the given delimiter and token …\nCreates a new <code>Punct</code> from the given character and spacing. …\nCreates a new <code>Ident</code> with the given <code>string</code> as well as the …\nSame as <code>Ident::new</code>, but creates a raw identifier (<code>r#ident</code>).\nAdds a new child diagnostic message to <code>self</code> with the …\nCreates a new <code>Diagnostic</code> with the given <code>message</code> at the span\nThe <code>Span</code> for the tokens in the previous macro expansion …\nGets the path to this source file.\nQuote a <code>TokenStream</code> into a <code>TokenStream</code>. This is the actual …\n<code>quote!(..)</code> accepts arbitrary tokens and expands into a …\nQuote a <code>Span</code> into a <code>TokenStream</code>. This is needed to …\nCreates a new span with the same line/column information …\nSets the level in <code>self</code> to <code>level</code>.\nSets the message in <code>self</code> to <code>message</code>.\nConfigures the span for <em>only this token</em>.\nConfigures the span for this <code>Group</code>’s delimiters, but not …\nConfigure the span for this punctuation character.\nConfigures the span of this <code>Ident</code>, possibly changing its …\nConfigures the span associated for this literal.\nSets the <code>Span</code>s in <code>self</code> to <code>spans</code>.\nThe span for the origin source code that <code>self</code> was …\nThe original source file into which this span points.\nReturns the source text behind a span. This preserves the …\nReturns the spacing of this punctuation character, …\nReturns the span of this tree, delegating to the <code>span</code> …\nReturns the span for the delimiters of this token stream, …\nReturns the span for this punctuation character.\nReturns the span of this <code>Ident</code>, encompassing the entire …\nReturns the span encompassing this literal.\nReturns the span pointing to the closing delimiter of this …\nAdds a new child diagnostics message to <code>self</code> with the …\nAdds a new child diagnostics message to <code>self</code> with the …\nAdds a new child diagnostics message to <code>self</code> with the …\nReturns the span pointing to the opening delimiter of this …\nAdds a new child diagnostics message to <code>self</code> with the …\nCreates a new diagnostic with the given <code>level</code> and <code>message</code> …\nReturns the <code>Span</code>s in <code>self</code>.\nCreates an empty span pointing to directly before this …\nReturns the <code>TokenStream</code> of tokens that are delimited in …\nString literal.\nReturns a <code>Span</code> that is a subset of <code>self.span()</code> containing …\nConvert <code>self</code> directly into a <code>TokenStream</code> object.\nConvert <code>self</code> directly into a <code>TokenStream</code> object.\nWrite <code>self</code> to the given <code>TokenStream</code>.\nPublic implementation details for the <code>TokenStream</code> type, …\nTracked access to environment variables.\nTracked access to additional files.\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nAdds a new child diagnostic message to <code>self</code> with the …\nCreates a new <code>Diagnostic</code> with the given <code>message</code> at the span\nAn iterator over <code>TokenStream</code>’s <code>TokenTree</code>s. The iteration …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRetrieve an environment variable and add it to build …\nTrack a file explicitly.")