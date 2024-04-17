import { ComponentType } from "react";

export const withoutAuth = <T extends object>(
  WrappedComponent: ComponentType<T>
) => {
  return (props: T) => {
    return <WrappedComponent {...props} />;
  };
};
