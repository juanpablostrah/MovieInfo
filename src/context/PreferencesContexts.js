import React from 'react';

const PreferenceContext = React.createContext({
  theme: '',
  toogleTheme: () => {},
});

export default PreferenceContext;
