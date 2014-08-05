# react-unmount-listener-mixin

React mixin for listenable componentWillMount. Only 710 bytes uncompressed, 373 bytes compressed!

## How to use

```JS
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

## Download

#### Script [(minified)](//raw.githubusercontent.com/syranide/react-unmount-listener-mixin/v1.0.1/dist/react-unmount-listener-mixin.min.js) [(source)](//raw.githubusercontent.com/syranide/react-unmount-listener-mixin/v1.0.1/dist/react-unmount-listener-mixin.js)

```HTML
<script src="react-unmount-listener-mixin.js"></script>
```

#### AMD [(minified)](//raw.githubusercontent.com/syranide/react-unmount-listener-mixin/v1.0.1/dist/amd/react-unmount-listener-mixin.min.js) [(source)](//raw.githubusercontent.com/syranide/react-unmount-listener-mixin/v1.0.1/dist/amd/react-unmount-listener-mixin.js)

```JS
define(['react-unmount-listener-mixin'], function(ReactUnmountListenerMixin) {
});
```

#### CommonJS [(minified)](//raw.githubusercontent.com/syranide/react-unmount-listener-mixin/v1.0.1/dist/commonjs/react-unmount-listener-mixin.min.js) [(source)](//raw.githubusercontent.com/syranide/react-unmount-listener-mixin/v1.0.1/dist/commonjs/react-unmount-listener-mixin.js)

```JS
var ReactUnmountListenerMixin = require('react-unmount-listener-mixin');
```

#### CommonJS via package manager

```
npm install --save react-unmount-listener-mixin
bower install --save react-unmount-listener-mixin
```
