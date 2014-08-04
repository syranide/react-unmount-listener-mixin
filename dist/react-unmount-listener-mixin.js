/*! react-unmount-listener-mixin 1.0.0 | @syranide | MIT license */

window.ReactUnmountListenerMixin = (function() {
  var propertyName = '_mixin_unmountListeners';

  var ReactUnmountListenerMixin = {
    addUnmountListener: function(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Invalid argument');
      }

      var unmountListeners = this[propertyName];

      if (!unmountListeners) {
        this[propertyName] = callback;
      } else if (typeof unmountListeners === 'function') {
        if (unmountListeners !== callback) {
          this[propertyName] = [unmountListeners, callback];
        }
      } else if (unmountListeners.indexOf(callback) === -1) {
        unmountListeners.push(callback);
      }
    },

    removeUnmountListener: function(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Invalid argument');
      }

      var unmountListeners = this[propertyName];

      if (unmountListeners) {
        if (typeof unmountListeners === 'function') {
          if (unmountListeners === callback) {
            delete this[propertyName];
          }
        } else {
          var index = unmountListeners.indexOf(callback);

          if (index !== -1) {
            if (unmountListeners.length === 2) {
              this[propertyName] = unmountListeners[index ? 0 : 1];
            } else {
              unmountListeners.splice(index, 1);
            }
          }
        }
      }
    },

    componentWillUnmount: function() {
      var unmountListeners = this[propertyName];

      if (unmountListeners) {
        if (typeof unmountListeners === 'function') {
          unmountListeners();
        } else {
          for (var i = 0; i < unmountListeners.length; i++) {
            unmountListeners[i]();
          }
        }
      }
    }
  };

  return ReactUnmountListenerMixin;
})();
