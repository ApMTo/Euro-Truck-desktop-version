const createUserAccount = async(fetchBody) => {
    await fetch('http://localhost:8080/usersData', {
        method: 'POST',
        body: JSON.stringify(fetchBody)
    })
}

export default createUserAccount;