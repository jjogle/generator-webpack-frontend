'use strict'

var React = require('react');

require('../stylesheets/<%= name %>.scss');

class <%= name %> extends React.Component {
  render() {
    return (
      <div>
      	<%= name %>
      </div>
    );
  }
}

module.exports = <%= name %>;
