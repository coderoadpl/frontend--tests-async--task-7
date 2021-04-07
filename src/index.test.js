import { fetchUsers } from './index'

import MOCK_DATA from './mockData.json'

const mockFetch = () => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
}

window.fetch = mockFetch

it('fetches the users', async () => {
    expect.assertions(2)

    const result = await fetchUsers()

    expect(result.length).toBe(3)
    expect(result).toStrictEqual([
        {
            email: MOCK_DATA.results[0].email,
            firstName: MOCK_DATA.results[0].name.first,
            lastName: MOCK_DATA.results[0].name.last,
        },
        {
            email: MOCK_DATA.results[1].email,
            firstName: MOCK_DATA.results[1].name.first,
            lastName: MOCK_DATA.results[1].name.last,
        },
        {
            email: MOCK_DATA.results[2].email,
            firstName: MOCK_DATA.results[2].name.first,
            lastName: MOCK_DATA.results[2].name.last,
        }
    ])
})