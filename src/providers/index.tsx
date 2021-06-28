import * as React from 'react';

import PaperProvider from './PaperProvider';

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = (props: ProvidersProps) => {
  const { children } = props;
  return (
    <PaperProvider>{children}</PaperProvider>
  );
};

export default Providers;
