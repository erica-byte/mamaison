import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Toggle from "./toggle";

let container = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  // `container` *doit* être attaché à `document` pour que les événements
  // fonctionnent correctement.
  document.body.appendChild(container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("change de valeur suite au clic", () => {
  const onChange = jest.fn();
  act(() => {
    render(<Toggle onChange={onChange} />, container);
  });

  // récupère l’élément bouton et déclenche quelques clics dessus
  const button = document.querySelector("[data-testid=toggle]");
  expect(button.innerHTML).toBe("Allumer");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(button.innerHTML).toBe("Éteindre");

  act(() => {
    for (let i = 0; i < 3; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(onChange).toHaveBeenCalledTimes(4);
  expect(button.innerHTML).toBe("Allumer");
});
