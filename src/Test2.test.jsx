import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Test2 from "./Test2";

test('Check props recieved or not', ()=>{
    render(<Test2 user={'Guest'}/>)
    expect(screen.getByText('Guest')).toBeInTheDocument()
})