export const fetchUsers = () => {
    return fetch('https://randomuser.me/api?results=3&inc=email,name')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data.results
                .map((result) => {
                    return {
                        email: result.email,
                        firstName: result.name.first,
                        lastName: result.name.last,
                    }
                })
        })
}

if (process.env.NODE_ENV !== 'test') {
    fetchUsers().then((data) => {
        console.log(data)
    })
}