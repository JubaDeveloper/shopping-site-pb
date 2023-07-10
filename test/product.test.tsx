import React from "react"
import { cleanup, screen, render, fireEvent, waitFor } from "@testing-library/react"
import { InitialPage } from "../src/templates/initial-page/initialpage"
import { ProductBox } from "../src/molecules/product/productbox"
import { products as productsApi } from "../src/api/fakeApi"
import { act } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'


afterEach(() => {
    cleanup()
})

const sleep = async (time: number) => {
    return await new Promise(resolve => { setTimeout(() => { resolve("") }, time * 1000) })
}

describe ("Product render", () => {
    describe ("What happen in initial render?", () => {
        test ("It should render all products in initial render", async () => {
            await waitFor(() => {
                render(<InitialPage/>, {
                    wrapper: BrowserRouter
                })
            }, {
                interval: 1200
            })

            // Got to wait the initial render - The product fetch (Simulation) takes 1 second

            await waitFor(async () => {
                await sleep(1.2)
            }, {
                timeout: 2000
            })
            
            const products = screen.getAllByTestId("product-box")

            // The api contains the count of items which must be rendered

            await waitFor(() => {
                expect(products.length).toBe(productsApi.length)
            })
        })
    })

    describe("What happen when user search for a product?", () => {
        test ("It should show one product after search", async () => {
            render(<InitialPage/>, {
                wrapper: BrowserRouter
            })

            // Got to wait the initial render - The product fetch (Simulation) takes 1 second

            await waitFor(async () => {
                await sleep(1.2)
            }, {
                timeout: 2000
            })
            
            const productSearch = screen.getByTestId("product-search-input")
            
            const productSearchBtn = screen.getByTestId("product-search-btn")

            expect(productSearch).not.toBe(null)

            expect(productSearchBtn).not.toBe(null)

            // Go to search for one product in the list

            const productToTest = productsApi[0]

            await userEvent.type(productSearch, productToTest.shortDesc)
            
            await userEvent.click(productSearchBtn)

            // Then go to count it

            const count = (await screen.findAllByTestId("product-box")).length

            expect(count).toBe(1)

            const locatedProduct = (await screen.findByTestId("product-box"))

            expect(locatedProduct).not.toBe(null)
        })
    })
})