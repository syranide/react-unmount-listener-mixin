# react-unmount-listener-mixin

React mixin for listenable componentWillMount. Only 710 bytes uncompressed, 373 bytes compressed!

## How to use

```JS
var ReactUnmountListenerMixin = require('react-unmount-listener-mixin');

React.createClass({
  mixins: [ReactUnmountListenerMixin],

  componentDidMount: function() {
    // perform request, abort on componentWillUnmount
    this.addUnmountListener(abortRequestFunction);
  },
  handleClickButton: function() {
    // abort request, stop listening to componentWillUnmount
    this.removeUnmountListener(abortRequestFunction);
  },
  ...
});
```
