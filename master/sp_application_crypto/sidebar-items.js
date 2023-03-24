window.SIDEBAR_ITEMS = {"macro":[["app_crypto","Declares Public, Pair, Signature types which are functionally equivalent to `$pair`, but are new Application-specific types whose identifier is `$key_type`."],["app_crypto_pair","Declares Pair type which is functionally equivalent to `$pair`, but is new Application-specific type whose identifier is `$key_type`."],["with_pair","Generate the given code if the pair type is available."],["wrap","Implement bidirectional `From` and on-way `AsRef`/`AsMut` for two types, `$inner` and `$outer`."]],"mod":[["ecdsa","Ecdsa crypto types."],["ed25519","Ed25519 crypto types."],["key_types","Known key types; this also functions as a global registry of key types for projects wishing to avoid collisions with each other."],["sr25519","Sr25519 crypto types."]],"struct":[["CryptoTypeId","An identifier for a specific cryptographic algorithm used by a key pair"],["KeyTypeId","An identifier for a type of cryptographic key."]],"trait":[["AppCrypto","An application-specific key."],["AppPair","A application’s key pair."],["AppPublic","A application’s public key."],["AppSignature","A application’s signature."],["BoundToRuntimeAppPublic","Something that bound to a fixed [`RuntimeAppPublic`]."],["MaybeHash","Type which implements Hash in std, not when no-std (std variant)."],["RuntimeAppPublic","A runtime interface for an application’s public key."],["RuntimePublic","A runtime interface for a public key."]]};