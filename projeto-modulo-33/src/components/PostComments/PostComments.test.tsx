import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test('Adicionar comentário "Comentário 1" ao componente.', () => {
    const { debug } = render(<PostComment />);
    for (let i = 0; i < 5; i++) {
      fireEvent.change(screen.getByTestId("inputText"), {
        target: {
          value: `Comentário ${i}`,
        },
      });
      fireEvent.click(screen.getByTestId("button"));
    }
    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();
    expect(screen.getByText("Comentário 1")).toBeInTheDocument();
  });
});
