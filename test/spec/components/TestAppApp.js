'use strict';

describe('TestAppApp', () => {
  let React = require('react/addons');
  let TestAppApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TestAppApp = require('components/TestAppApp.js');
    component = React.createElement(TestAppApp);
  });

  it('should create a new instance of TestAppApp', () => {
    expect(component).toBeDefined();
  });
});
