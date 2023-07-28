# Testing ReactJS hooks

 ```js
import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

describe("", () => {
    it("should render the initial count", () => {
        const { result } = renderHook(useCounter)
        // result.current contains the return value of the hook
        expect(result.current.count).toBe(0)
    })

    it("should accept and render the same initial count",() => {
        const { result } = renderHook(useCounter, { 
            initialProps: { 
                initialCount: 10 
            } 
        })
        expect(result.current.count).toBe(10)
    })

    it("should increment the count", () => {
        const { result } = renderHook(useCounter)
        act(() => result.current.increment())
        expect(result.current.count).toBe(1)
    })

    it("should decrement the count", () => {
        const { result } = renderHook(useCounter)
        act(() => result.current.decrement())
        expect(result.current.count).toBe(-1)
    })
})
 ```

 **act()** is a function that ensures updates are processed before assertions.