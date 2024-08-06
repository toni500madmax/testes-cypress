import { render } from "@testing-library/react";
import Post from "../index";

describe("Teste para o componente Post", () => {
  test("Deve renderizar corretamente", () => {
    render(
      <Post imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    );
  });
});
