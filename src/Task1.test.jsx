import React from 'react'

import { expect, test } from 'vitest';
import { render,screen } from '@testing-library/react';
import Task1 from './Task1';
import { userEvent } from '@testing-library/user-event';

test('Renders the Counter', ()=>{
    render(<Task1 />)
    expect(screen.getByText("Welcome to counter")).toBeInTheDocument()
}) 

test('check button click', async ()=>{
    render(<Task1 />)
    expect(screen.getByText('0')).toBeInTheDocument()
    const user = userEvent.setup() //create virtual user
    const btn = screen.getByRole('button', {name:'+'}) // user finds and button by seeing +
    await user.click(btn) // here user clicks + button
    expect(screen.getByText('1')).toBeInTheDocument()
})

test('conditional rendering', async()=>{
    render(<Task1/>)
    expect(screen.getByText('visible')).toBeInTheDocument()   
    const user = userEvent.setup()
    const btn = screen.getByRole('button',{name:'hide'})
    await user.click(btn)
    expect(screen.getByText('invisible')).toBeInTheDocument()
})
 