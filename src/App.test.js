import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('positive_add_test', () => {
    render(<App/>)

    const one = screen.getByText("1")
    const plus = screen.getByText("+")
    const seven = screen.getByText("7")
    const equals = screen.getByText("=")

    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(seven);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("8");
});
test('negative_add_test', () => {
    render(<App/>)

    const two = screen.getByText("2")
    const plus = screen.getByText("+")
    const five = screen.getByText("5")
    const equals = screen.getByText("=")

    fireEvent.click(two);
    fireEvent.click(plus);
    fireEvent.click(five);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).not.toBe("4");
});

test('positive_sub_test', () => {
    render(<App/>)

    const three = screen.getByText("3")
    const minus = screen.getByText("-")
    const four = screen.getByText("4")
    const equals = screen.getByText("=")

    fireEvent.click(three);
    fireEvent.click(minus);
    fireEvent.click(four);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("-1");
});
test('negative_sub_test', () => {
    render(<App/>)

    const five = screen.getByText("5")
    const minus = screen.getByText("-")
    const one = screen.getByText("1")
    const equals = screen.getByText("=")

    fireEvent.click(five);
    fireEvent.click(minus);
    fireEvent.click(one);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).not.toBe("3");
});

test('positive_mul_test', () => {
    render(<App/>)

    const eight = screen.getByText("8")
    const times = screen.getByText("x")
    const four = screen.getByText("4")
    const equals = screen.getByText("=")

    fireEvent.click(eight);
    fireEvent.click(times);
    fireEvent.click(four);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("32");
});
test('negative_mul_test', () => {
    render(<App/>)

    const nine = screen.getByText("9")
    const times = screen.getByText("x")
    const five = screen.getByText("5")
    const equals = screen.getByText("=")

    fireEvent.click(nine);
    fireEvent.click(times);
    fireEvent.click(five);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).not.toBe("40");
});

test('positive_div_test', () => {
    render(<App/>)

    const nine = screen.getByText("9")
    const dividedBy = screen.getByText("/")
    const five = screen.getByText("5")
    const equals = screen.getByText("=")

    fireEvent.click(nine);
    fireEvent.click(dividedBy);
    fireEvent.click(five);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("1.8");
});
test('negative_div_test', () => {
    render(<App/>)

    const three = screen.getByText("3")
    const dividedBy = screen.getByText("/")
    const two = screen.getByText("2")
    const equals = screen.getByText("=")

    fireEvent.click(three);
    fireEvent.click(dividedBy);
    fireEvent.click(two);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).not.toBe("1");
});
