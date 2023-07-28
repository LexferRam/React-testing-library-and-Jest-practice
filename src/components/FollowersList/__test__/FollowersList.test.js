import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { rest } from 'msw';
import FollowersList from "../FollowersList";
import { server } from '../../../mocks/server';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {

    // beforeEach(() => {
    //     // console.log("RUNS BEFORE EACH TEST")
    //     jest.mock("../../../__mocks__/axios")
    // })

    // beforeAll(() => {
    //     console.log("RUNS ONCE BEFORE ALL TESTS")
    // })

    // afterEach(() => {
    //     console.log("RUNS AFTER EACH TEST")
    // })

    // afterAll(() => {
    //     console.log("RUNS ONCE AFTER ALL TESTS")
    // })

    it('should fetch and render input element', async () => {
        render(
            <MockFollowersList />
        );
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();
    });
    
    it('should fetch and render input element', async () => {
        render(
            <MockFollowersList />
        );
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();
    });

    it("should fetch and render 5 follower items", async () => {
        render(
            <MockFollowersList />
        );
    
        const followerItemElements = await screen.findAllByTestId(/follower-item-\d/)
        expect(followerItemElements.length).toEqual(1);
        expect(followerItemElements).toHaveLength(1);
    });

    test('render error message when fetch call fails', async () => {
        server.use(
            rest.get(
                'https://randomuser.me/api',
                (req,res, ctx) => {
                    return res(
                        ctx.status(500)
                    )
                }
            )
        )

        render(<MockFollowersList />)
        const error = await screen.findByText('Error fetching data')
        expect(error).toBeInTheDocument()
    })

    test('render loading message when fetch call is loading', async () => {
        render(<MockFollowersList />)
        const loadingMsg = await screen.findByText('Loading...')
        expect(loadingMsg).toBeInTheDocument()
    })
})