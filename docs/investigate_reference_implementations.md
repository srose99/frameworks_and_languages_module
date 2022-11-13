Investigate Reference Implementations
=====================================

* `example_server`
    * Where is the routing handled?
        * Is this expandable?
    * Where are the CORS headers set?
        * Is this good/bad? why?
    * The socket/network handling is very weak - why?
    * What features are missing?
* `example_client`
    * Client frameworks typically have - state, actions, views
    * What is the client difficult to follow/read/understand?
        * Can you identify the state, actions and views?
        * What is bad about the the reference client?
    * What is `renderItemListFieldLookup` trying to do?
    * What is `.cloneNode(true)`?

In Pairs - permalink to something good - permalink to something bad