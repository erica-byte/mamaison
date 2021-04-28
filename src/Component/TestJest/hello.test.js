import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./hello";

let container = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("s’affiche avec ou sans nom", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("Salut, étranger");

  act(() => {
    render(<Hello name="Ines" />, container);
  });
  expect(container.textContent).toBe("Bonjour, Ines !");

  act(() => {
    render(<Hello name="Marguerite" />, container);
  });
  expect(container.textContent).toBe("Bonjour, Marguerite !");
});