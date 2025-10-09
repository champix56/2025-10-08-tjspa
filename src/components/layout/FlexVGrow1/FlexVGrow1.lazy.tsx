import React, { lazy, Suspense } from 'react';

const LazyFlexVGrow1 = lazy(() => import('./FlexVGrow1'));
//@ts-ignore
const FlexVGrow1 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexVGrow1 {...props} />
  </Suspense>
);

export default FlexVGrow1;
