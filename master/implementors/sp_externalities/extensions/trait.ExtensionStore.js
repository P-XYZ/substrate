(function() {var implementors = {
"sp_state_machine":[["impl <a class=\"trait\" href=\"sp_externalities/extensions/trait.ExtensionStore.html\" title=\"trait sp_externalities::extensions::ExtensionStore\">ExtensionStore</a> for <a class=\"struct\" href=\"sp_state_machine/struct.BasicExternalities.html\" title=\"struct sp_state_machine::BasicExternalities\">BasicExternalities</a>"],["impl&lt;'a, H, B&gt; <a class=\"trait\" href=\"sp_externalities/extensions/trait.ExtensionStore.html\" title=\"trait sp_externalities::extensions::ExtensionStore\">ExtensionStore</a> for <a class=\"struct\" href=\"sp_state_machine/struct.Ext.html\" title=\"struct sp_state_machine::Ext\">Ext</a>&lt;'a, H, B&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Hasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: 'a + <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">Backend</a>&lt;H&gt;,</span>"],["impl&lt;'a, H:&nbsp;Hasher, B:&nbsp;'a + <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">Backend</a>&lt;H&gt;&gt; <a class=\"trait\" href=\"sp_externalities/extensions/trait.ExtensionStore.html\" title=\"trait sp_externalities::extensions::ExtensionStore\">ExtensionStore</a> for <a class=\"struct\" href=\"sp_state_machine/struct.ReadOnlyExternalities.html\" title=\"struct sp_state_machine::ReadOnlyExternalities\">ReadOnlyExternalities</a>&lt;'a, H, B&gt;"],["impl&lt;H&gt; <a class=\"trait\" href=\"sp_externalities/extensions/trait.ExtensionStore.html\" title=\"trait sp_externalities::extensions::ExtensionStore\">ExtensionStore</a> for <a class=\"struct\" href=\"sp_state_machine/struct.TestExternalities.html\" title=\"struct sp_state_machine::TestExternalities\">TestExternalities</a>&lt;H&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Hasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;H::Out: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + Codec,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()