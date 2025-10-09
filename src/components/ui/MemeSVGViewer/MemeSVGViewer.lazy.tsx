import React, { lazy, Suspense } from 'react';

const LazyMemeSVGViewer = lazy(() => import('./MemeSVGViewer'));
//@ts-ignore
const MemeSVGViewer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMemeSVGViewer {...props} />
  </Suspense>
);

export default MemeSVGViewer;
