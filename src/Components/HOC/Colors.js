import React from 'react';

const Colors = WrappedComponent => {
  const colours = ['red', 'pink', 'orange', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * colours.length)];
  const className = randomColour + '-text';

  return () => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default Colors;
