'use strict';

import React from 'react';

require('styles/my/namespaced/components/Name.css');

class NameComponent extends React.Component {
  render() {
    return (
      <div className="name-component">
        Please edit src/components/my/namespaced/components//NameComponent.js to update this component!
      </div>
    );
  }
}

NameComponent.displayName = 'MyNamespacedComponentsNameComponent';

// Uncomment properties you need
// NameComponent.propTypes = {};
// NameComponent.defaultProps = {};

export default NameComponent;
