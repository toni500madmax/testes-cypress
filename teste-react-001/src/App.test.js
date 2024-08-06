/*

import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
 
describe("Teste para o componente App", () => {
    test("1.Deve renderizar corretamente", () => {
        render(<App />);

        expect(screen.getByText("add task")).toBeInTheDocument();
    })

    test("2. Deve renderizar corretamente", () => {
        const { debug } = render(<App />);
        debug();

        expect(screen.getByText("add task")).toBeInTheDocument();
    });

    test("Deve adicionar 'estudar react' na lista de tarefas", () => {
        render(<App />);
        fireEvent.change(screen.getByTestId("task-input"), {
            target: {
                value: "estudar react"
            }
        });
        fireEvent.click(screen.getByTestId("add-task-button"));

        expect(screen.getByText("add task")).toBeInTheDocument();
    });
}) */