import {  render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "./Users";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

describe("Testing Users component",()=>{

beforeEach(() => {
  globalThis.fetch = vi.fn();
});

afterEach(() => {
  vi.clearAllMocks();
});

test("renders User Dashboard heading", () => {
  fetch.mockResolvedValueOnce({
    json: vi.fn().mockResolvedValueOnce([]),
  });

  render(<Users />);
  expect(screen.getByText("User Dashboard")).toBeInTheDocument();
});

test("shows initial count as 0", () => {
  fetch.mockResolvedValueOnce({
    json: vi.fn().mockResolvedValueOnce([]),
  });

  render(<Users />);

  expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
});

test("increments count when button is clicked", async () => {
  fetch.mockResolvedValueOnce({
    json: vi.fn().mockResolvedValueOnce([]),
  });

  render(<Users />);
  const user = userEvent.setup();

  const button = screen.getByRole("button", { name: /increment/i });
  await user.click(button);

  expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
});

test("calls users API on component mount", async () => {
  fetch.mockResolvedValueOnce({
    json: vi.fn().mockResolvedValueOnce([]),
  });

  render(<Users />);

  await waitFor(() => {
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });
});

test("renders users fetched from API", async () => {
  fetch.mockResolvedValueOnce({
    json: vi.fn().mockResolvedValueOnce([
      { id: 1, name: "Narendra" },
      { id: 2, name: "Amit" },
    ]),
  });

  render(<Users />);

  expect(await screen.findByText("Narendra")).toBeInTheDocument();
  expect(await screen.findByText("Amit")).toBeInTheDocument();
  })
});
