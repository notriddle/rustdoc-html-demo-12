searchState.loadedDescShard("stable_mir", 0, "The WIP stable interface to rustc internals.\nHolds information about a crate.\nHolds information about an item in a crate.\nA list of crate items.\nThe number that identifies a crate.\nA list of impl trait decls.\nA type that provides internal information but that can …\nUse String for now but we should replace it.\nA list of trait decls.\nRetrieve all items in the local crate that have a MIR …\nThis will return the body of an item.\nDefine the interface with the Rust compiler.\nModule that define a common trait for things that …\nReturn the function where execution starts if the current …\nWhen things go wrong, we need some error handling. There …\nTry to find a crate with the given name.\nTry to find a crate or crates if multiple crates exist …\nThe list of foreign modules in this crate.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAccess to the local crate.\nProvide information about the machine that this is being …\nThe list of traits declared in this crate.\nThe list of trait implementations in this crate.\nAn identifier that specifies the address space that some …\nStruct-like placement, with precomputed offsets.\nInformation about the ABI of a function’s argument, or …\nArray/vector-like placement, with all fields of identical …\nGeneral language calling conventions.\nPass the argument after casting it.\nThe default address space, corresponding to data space.\nPass the argument directly.\nThe tag directly stores the discriminant, but possibly …\nDescribes how the fields of a type are shaped in memory.\nEnum representing the existing float lengths.\nA function ABI definition.\nIgnore the argument.\nPass the argument indirectly via a hidden pointer.\nThe <code>bool</code> is the signedness of the <code>Integer</code> type.\nEnum representing the existing integer lengths.\nThe layout of a type in memory.\nEnum-likes with more than one inhabited variant: each …\nNiche (values invalid for a type) encoding the …\nPass a pair’s elements directly in two arguments.\nHow a function argument should be passed in to the target …\nFundamental unit of memory access and layout.\nScalar primitives and <code>!</code>, which never have fields.\nInformation about one scalar component of a Rust type.\nSingle enum variants, structs/tuples, unions, and all …\nThe layout of a type, alongside the type itself.\nAll fields start at no offset. The <code>usize</code> is the field …\nDescribes how values of the type are passed by target ABIs,\nInclusive wrap-around range of valid values (bitwise …\nThe <code>abi</code> defines how this data is passed between functions.\nThe ABI mandated alignment in bytes.\nThe types of each argument.\nWhether this is a variadic C function,\nReturns <code>true</code> if <code>v</code> is contained in the range.\nThe ABI convention.\nThe fields location withing the layout\nThe count of non-variadic arguments.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the type is sized and a 1-ZST (meaning it …\nReturns <code>true</code> if <code>size</code> completely fills the range.\nReturns <code>true</code> if the layout corresponds to an unsized type.\nReturns <code>true</code> if the layout corresponds to an unsized type.\nThe expected return type.\nThe size of this layout in bytes.\nEncodes information about multi-variant layouts. Even with …\nReturns <code>true</code> if the range wraps around. I.e., the range …\nOffsets for the first byte of each field, ordered to match …\nThe range that represents valid values. The range must be …\nThe primitive type used to represent this value.\nUnions never have niches, so there is no <code>valid_range</code>. Even …\nIf true, the size is exact, otherwise it’s only a lower …\nThis trait defines the interface between stable_mir and …\nReturns if the ADT is a box.\nReturns whether this definition is a C string.\nReturns whether this ADT is simd.\nReturns the kind of a given algebraic data type\nThe number of variants in this ADT.\nRetrieve all items of the local crate that have a MIR …\nGet the resulting type of binary operation.\nRetrieve the closure signature for the given generic …\nReturns the name of given <code>DefId</code>\nReturns the type of given crate item.\nReturns the type of given definition instantiated with the …\nTry to evaluate an instance into a constant.\nEvaluate a static’s initializer.\nEvaluate constant as a target usize.\nRetrieve a list of all external crates.\nFind a crate with the given name.\nRetrieve the function signature for the given generic …\nReturns the kind of a given foreign item.\nReturn filename from given <code>Span</code>, for diagnostic purposes\nReturn lines corresponding to this <code>Span</code>\nRetrieve global allocation for the given allocation ID.\nCheck whether the body of a function is available.\nGet an instance ABI.\nGet the instantiation types.\nGet the body of an Instance which is already monomorphized.\nGet the instance.\nGet the instance mangled name.\nGet the instance type with generic instantiations applied …\nRetrieve the intrinsic definition if the item corresponds …\nRetrieve the plain function name of an intrinsic.\nCheck if this is an empty AsyncDropGlueCtor shim.\nCheck if this is an empty DropGlue shim.\nReturns whether this is a foreign item.\nReturns the <code>kind</code> of given <code>DefId</code>\nGet the layout shape.\nGet information about the local crate.\nRetrieve the body of a function. This function will panic …\nReturns literal value of a const as a string.\nConvert a non-generic crate item into an instance. This …\nCreate a new box type, <code>Box&lt;T&gt;</code>, for the given inner type <code>T</code>.\nCreate a new constant that represents the given boolean …\nCreate a new constant that represents the given string …\nCreate a new type from the given kind.\nGet a debug string representation of a place.\nItem requires monomorphization.\nResolve instance for a closure with the requested type.\nResolve an instance for drop_in_place for the given type.\nResolve instance for a function pointer.\nResolve an instance from the given function definition and …\n<code>Span</code> of an item\nReturns printable, human readable form of <code>Span</code>\nReturn information about the target machine.\nCreate a new constant that represents the given value.\nCreate a new zero-sized constant.\nObtain the representation of a type.\nGet the layout of a type.\nObtain the representation of a type.\nGet the resulting type of unary operation.\nThe name of a variant.\nRetrieve the id for the virtual table.\nExecute the given function with access the compiler Context…\nA trait for retrieving information about a particular …\nA trait that can be used to retrieve a definition’s type.\nA unique identification number for each item accessible …\nRetrieve the unique identifier for the current definition.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturn information about the crate where this definition …\nReturn the fully qualified name of the current definition.\nReturn the span of this definition.\nReturn a trimmed name of this definition.\nReturns the type of this crate item.\nRetrieve the type of this definition by instantiating and …\nAn error type used to represent an error that has already …\nA generic error to represent an API request that cannot be …\nCompilation failed, either due to normal errors or ICE.\nCompilation was interrupted.\nCompilation skipped. This happens when users invoke rustc …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a pointer with the indicated mutability to the …\nCreates an aggregate value, like a tuple or struct.\nReturns the minimum alignment of a type.\nGo from <code>*const [T; N]</code> to <code>*const T</code>\n<code>Offset</code> has the same semantics as <code>&lt;*const T&gt;::offset</code>, …\nThe SMIR representation of a single function.\nPerforms essentially all of the casts that can be …\nSame as <code>BinaryOp</code>, but yields <code>(T, bool)</code> with a <code>bool</code> …\nGo from a non-capturing closure to a fn pointer or an …\nIndex into a slice/array given by offsets.\nA CopyForDeref is equivalent to a read from a place. When …\nA shared (deep) borrow. Data must be immutable and is …\nDereference projections (e.g. <code>*_1</code>) project to the address …\nComputes the discriminant of the place, returning it as an …\n“Downcast” to a variant of an enum or a coroutine.\nAn immutable, aliasable borrow that is discarded after …\nThe FakeReadCause describes the type of pattern why a …\nA field projection (e.g., <code>f</code> in <code>_1.f</code>) project to a field in …\nThe source-order index of a field in a variant.\nIndex into a slice/array. The value of the index is …\nYields the length of the place, as a <code>usize</code>.\nData is mutable and not aliasable.\nGo from a mut raw pointer to a const raw pointer.\nComputes a value as described by the operation.\nReturns the offset of a field.\nLike an explicit cast from an opaque type to a concrete …\nCreates a reference to the place.\nGo from a fn-item type to a fn-pointer type.\nCreates an array where each element is the value of the …\nDescribes what kind of retag is to be performed\nThe immediately borrowed place must be immutable, but …\nTransmutes a <code>*mut u8</code> into shallow-initialized <code>Box&lt;T&gt;</code>.\nData must be immutable and is aliasable.\nReturns the size of a value of that type.\nProjects a slice from the base place.\nA <code>Subtype(T)</code> projection is applied to any …\nThe possible branch sites of a TerminatorKind::SwitchInt.\nCreates a pointer/reference to the given thread local.\ncfg!(ub_checks), but at codegen time\nExactly like <code>BinaryOp</code>, but less operands.\nGo from a safe fn pointer to an unsafe fn pointer.\nUnsize a pointer/reference value, e.g., <code>&amp;[T; n]</code> to <code>&amp;[T]</code>. …\nYields the operand unchanged\nDebug information pertaining to a user variable.\nThis module provides methods to retrieve allocation …\nThe number of arguments this function takes.\nWhen present, indicates what argument number this variable …\nThe conditional branches where the first element …\nThe user variable’s data is split across several …\nDeclarations of locals within the function.\nThe variable name.\nThe <code>otherwise</code> branch which will be taken in case none of …\nprojection out of a place (access a field, deref a …\nSource info of the user variable, including the scope …\nThe span that covers the entire function body.\nMark an argument (which must be a tuple) as getting passed …\nWhere the data for this user variable is to be found.\nDebug information pertaining to user variables, including …\nThe Stable MIR Visitor\n<code>true</code> if this borrow arose from method-call auto-ref\nCounting backwards from end? This is always false when …\nWhether <code>to</code> counts from the start or end of the array/slice.\nThe thing being indexed must be at least this long. For …\nindex or -index (in Python terms), depending on from_end\nA unique identification number for each provenance\nThe alloc ID is used as a function pointer.\nAn allocation in the SMIR global memory can be either a …\nThe alloc ID points to memory.\nThe alloc ID points to a “lazy” static variable that …\nThis alloc ID points to a symbolic (not-reified) vtable. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUtility function used to read an allocation data into an …\nUtility function used to read an allocation data into a …\nRetrieve the allocation id for a global allocation if it …\nCreates a pointer with the indicated mutability to the …\nCreates an aggregate value, like a tuple or struct.\nReturns the minimum alignment of a type.\nGo from <code>*const [T; N]</code> to <code>*const T</code>\n<code>Offset</code> has the same semantics as <code>&lt;*const T&gt;::offset</code>, …\nThe SMIR representation of a single function.\nPerforms essentially all of the casts that can be …\nSame as <code>BinaryOp</code>, but yields <code>(T, bool)</code> with a <code>bool</code> …\nGo from a non-capturing closure to a fn pointer or an …\nIndex into a slice/array given by offsets.\nA CopyForDeref is equivalent to a read from a place. When …\nThe rustc coverage data structures are heavily tied to …\nA shared (deep) borrow. Data must be immutable and is …\nDereference projections (e.g. <code>*_1</code>) project to the address …\nComputes the discriminant of the place, returning it as an …\n“Downcast” to a variant of an enum or a coroutine.\nAn immutable, aliasable borrow that is discarded after …\nThe FakeReadCause describes the type of pattern why a …\nA field projection (e.g., <code>f</code> in <code>_1.f</code>) project to a field in …\nThe source-order index of a field in a variant.\nIndex into a slice/array. The value of the index is …\nYields the length of the place, as a <code>usize</code>.\nData is mutable and not aliasable.\nGo from a mut raw pointer to a const raw pointer.\nComputes a value as described by the operation.\nReturns the offset of a field.\nLike an explicit cast from an opaque type to a concrete …\nCreates a reference to the place.\nGo from a fn-item type to a fn-pointer type.\nCreates an array where each element is the value of the …\nDescribes what kind of retag is to be performed\nThe immediately borrowed place must be immutable, but …\nTransmutes a <code>*mut u8</code> into shallow-initialized <code>Box&lt;T&gt;</code>.\nData must be immutable and is aliasable.\nReturns the size of a value of that type.\nProjects a slice from the base place.\nA <code>Subtype(T)</code> projection is applied to any …\nThe possible branch sites of a TerminatorKind::SwitchInt.\nCreates a pointer/reference to the given thread local.\ncfg!(ub_checks), but at codegen time\nExactly like <code>BinaryOp</code>, but less operands.\nGo from a safe fn pointer to an unsafe fn pointer.\nUnsize a pointer/reference value, e.g., <code>&amp;[T; n]</code> to <code>&amp;[T]</code>. …\nYields the operand unchanged\nDebug information pertaining to a user variable.\nAll possible targets including the <code>otherwise</code> target.\nThe number of arguments this function takes.\nLocals in <code>self</code> that correspond to this function’s …\nWhen present, indicates what argument number this variable …\nThe conditional targets which are only taken if the …\nThe conditional branches where the first element …\nThe user variable’s data is split across several …\nReturn a constant if this info is related to one.\nEmit the body using the provided name for the signature.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInner locals for this function. These are the locals that …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe number of targets including <code>otherwise</code>.\nReturn a local variable if this info is related to one.\nGet the local declaration for this local.\nGet an iterator for all local declarations.\nConvenience function to get all the locals in this …\nDeclarations of locals within the function.\nThe variable name.\nConstructs a <code>Body</code>.\nCreate a new SwitchTargets from the given branches and …\nThe <code>otherwise</code> branch target.\nThe <code>otherwise</code> branch which will be taken in case none of …\nprojection out of a place (access a field, deref a …\nReturn local that holds this function’s return value.\nSource info of the user variable, including the scope …\nThe span that covers the entire function body.\nMark an argument (which must be a tuple) as getting passed …\nReturn the type of this operation for the given input Ty. …\nReturn the type of this operation for the given input Ty. …\nGet the type of an operand relative to the local …\nResolve down the chain of projections to get the type …\nGet the expected type after applying this projection to a …\nWhere the data for this user variable is to be found.\nDebug information pertaining to user variables, including …\n<code>true</code> if this borrow arose from method-call auto-ref\nCounting backwards from end? This is always false when …\nWhether <code>to</code> counts from the start or end of the array/slice.\nThe thing being indexed must be at least this long. For …\nindex or -index (in Python terms), depending on from_end\nA compiler intrinsic function.\nA user defined item.\nA compiler generated shim.\nHolds information about a static variable definition.\nA virtual function definition stored in a VTable. The <code>idx</code> …\nGet the arguments this instance was instantiated with.\nGet the body of an Instance.\nAn ID used to get the instance definition from the …\nEmit the body of this instance if it has one.\nEvaluate a static’s initializer, returning the …\nRetrieve information about this instance binary interface.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCheck whether this instance has a body available.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRetrieve the plain intrinsic name of an instance if it’s …\nCheck whether this instance is an empty shim.\nThe type of instance.\nRetrieve the instance’s mangled name used for calling …\nRetrieve the instance name for diagnostic messages.\nResolve an instance starting from a function definition …\nResolve a closure with the expected kind.\nResolve the drop in place for a given type.\nResolve an instance for a given function pointer.\nReturn a trimmed name of the given instance including its …\nTry to constant evaluate the instance into a constant with …\nGet the instance type with generic instantiations applied …\nReturn the type of this static definition.\nThe location of a statement / terminator in the code and …\nInformation about a place’s usage.\nReference to a place used to represent a partial …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether the access is mutable or not. Keep this private so …\nGet the type of this place.\nThis function is a no-op that gets used to ensure this …\nThe properties of the target machine being compiled into.\nRepresent the size of a component.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA binder represents a possibly generic type and its bound …\nAn existential reference to a trait where <code>Self</code> is not …\nHold information about a function definition in a crate.\nHold information about a ForeignItem in a crate.\nA list of generic arguments.\nA trait impl definition.\nInformation you get from <code>Span</code> in a struct form. Line and …\nRepresents a constant in MIR\nRepresents a pattern in the type system\nStores the provenance information of pointers stored in …\nSize in bytes.\nA trait’s definition.\nA complete reference to a trait, i.e., one where <code>Self</code> is …\nRepresents a constant in the type system\nDefinition of a variant, which can be either a struct / …\nThe source-order index of a variant in a type.\nStore ZST constants. We have to special handle these …\nThe data type where this variant comes from. For now, we …\nThe generic arguments for this definition. The first …\nGet the information of the intrinsic if this function is a …\nCreate a new binder with the given bound vars.\nCreate a type representing <code>bool</code>.\nReturns the type and mutability of <code>*ty</code> for builtin types.\nReturns the type of <code>ty[i]</code> for builtin types.\nThe field definition.\nGet the discriminant type for this type.\nGet the discriminant type for this type.\nCreate a new binder with no bounded variable.\nTry to evaluate to a target <code>usize</code>.\nTry to evaluate to a target <code>usize</code>.\nPanic if this generic argument is not a const, otherwise …\nPanic if this generic argument is not a type, otherwise …\nRetrieve all the fields in this variant.\nDeconstruct a function type if this is one.\nReturns the plain name of the intrinsic. e.g., <code>transmute</code> …\nGet the function signature for function like types (Fn, …\nGet the function signature for this function definition.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nBuild a new constant that represents the given boolean …\nCreate a new type from a given kind.\nBuild a new constant that represents the given string.\nReturn filename for diagnostic purposes\nReturn lines that corespond to this <code>Span</code>\nUsed for internal tracking of the internal constant.\nThe variant index.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTests if this is any kind of primitive pointer type …\nCheck if the function is an intrinsic.\nRead this allocation as a pointer and return whether it …\nRetrieve the constant kind.\nRetrieve the constant kind.\nThe constant kind.\nGet a type layout.\nReturns whether the intrinsic has no meaningful body and …\nThe field name.\nBuild a constant. Note that this should only be used by …\nCreate a new array type from Const length.\nCreate a new box type that represents <code>Box&lt;T&gt;</code>, for the …\nCreate a new closure type.\nCreate a new coroutine type.\nCreate a new pointer type.\nCreate a new reference type.\nCreate a new pointer type.\nThe number of variants in this ADT.\nProvenance in this map applies from the given offset for …\nGet a vector of bytes for an Allocation that has been …\nRead this allocation and try to convert it to a boolean.\nRead this allocation and try to convert it to a signed …\nRead a uint value from the specified range.\nRead this allocation and try to convert it to an …\nCreate a type representing a signed integer.\nRetrieve information about this implementation.\nCreates an interned usize constant.\nBuild a new constant that represents the given unsigned …\nCreate a new array type.\nCreate a constant that represents a new zero-sized …\nGet the constant type.\nRetrieve the type of this Adt.\nRetrieve the type of this field.\nReturn the generic argument type if applicable, otherwise …\nThe constant type.\nRetrieve the type of this Adt by instantiating and …\nRetrieve the type of this field instantiating and …\nCreate a type representing an unsigned integer.\nCreate a type representing <code>usize</code>.\nRetrieve the variants in this ADT.\nIterate over the variants in this ADT.")