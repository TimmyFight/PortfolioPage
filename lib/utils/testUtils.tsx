import { render } from "@testing-library/react";
import StoreProvider from "@/lib/services/StoreProvider";
import { ReactElement } from "react";

export const renderWithRedux = (
  ui: ReactElement,
  { ...renderOptions } = {}
) => {
  function Wrapper({ children }: { children: ReactElement }) {
    return <StoreProvider>{children}</StoreProvider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
