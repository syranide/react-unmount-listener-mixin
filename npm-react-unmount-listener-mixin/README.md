# react-unmount-listener-mixin

React mixin for listenable componentWillMount. 729 bytes uncompressed, 381 bytes compressed.

```JS
var ReactUnmountListenerMixin = require('react-unmount-listener-mixin');

React.createClass({
  mixins: [ReactUnmountListenerMixin],

  componentDidMount: function() {
    // perform request, abort on componentWillUnmount
    this.addUnmountListener(abortRequestFunction);
  },
  handleClickAbort: function() {
    // abort request, stop listening to componentWillUnmount
    this.removeUnmountListener(abortRequestFunction);
  },
  ...
});
```
