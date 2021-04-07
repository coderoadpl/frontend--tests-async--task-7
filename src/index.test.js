import { fetchUsers } from './index'

it('fetches the users', async () => {
    expect.assertions(4)

    const result = await fetchUsers()

    const expectation = {
        email: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
    }

    expect(result.length).toBe(3)
    expect(result[0]).toEqual(expectation)
    expect(result[1]).toEqual(expectation)
    expect(result[2]).toEqual(expectation)
})