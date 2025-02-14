(function() {
    var type_impls = Object.fromEntries([["libz_sys",[]],["openssl_sys",[]],["rusqlite",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[15,19,16]}