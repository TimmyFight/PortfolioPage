import { render } from "@testing-library/react";
import { ReactElement } from "react";

import StoreProvider from "@/lib/services/StoreProvider";

export const renderWithRedux = (
  ui: ReactElement,
  { initialState = { activeLink: "/#about" }, ...renderOptions } = {}
) => {
  function Wrapper({ children }: { children: ReactElement }) {
    return <StoreProvider>{children}</StoreProvider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
