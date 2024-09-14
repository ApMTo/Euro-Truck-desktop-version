const loginToAccount = async(user) => {
    await fetch('http://localhost:8080/loginedUser', {
        method: 'POST',
        body: JSON.stringify(user)
    })
}

export default loginToAccount;