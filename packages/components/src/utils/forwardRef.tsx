import React from 'react';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from './polymorphic';

// Helper type for components with displayName
export interface ForwardRefComponent<DefaultElement extends React.ElementType> {
  <Element extends React.ElementType = DefaultElement>(
    props: PolymorphicComponentPropWithRef<Element> & {
      ref?: PolymorphicRef<Element>;
    }
  ): React.ReactElement | null;
  displayName?: string;
}

// Custom forwardRef that preserves generic types
export function polymorphicForwardRef<
  Component extends React.ElementType,
  Props extends Record<string, unknown> = Record<string, unknown>
>(
  render: <Element extends React.ElementType = Component>(
    props: PolymorphicComponentPropWithRef<Element, Props>,
    ref: PolymorphicRef<Element>
  ) => React.ReactElement | null
): ForwardRefComponent<Component> {
  const Component = React.forwardRef(render as React.ForwardRefRenderFunction<unknown, unknown>) as unknown as ForwardRefComponent<Component>;
  return Component;
}