// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ExampleTestComponent from "../src/ExampleTestComponent";

describe("Example Tests", () => {
  it("Always start on the right foot :) Expect true to be true", () => {
    expect(true).toBe(true);
  });
  it("Expect false to be false", () => {
    expect(false).toBe(false);
  });
  test("Vite to be in document", () => {
    render(<ExampleTestComponent />);
    expect(screen.getByText("Vite")).toBeInTheDocument();
  });
});
