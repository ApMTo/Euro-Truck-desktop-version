const logOutAccount = async(id) => {
    await fetch(`http://localhost:8080/loginedUser/${id}`, {
        method: 'DELETE'
    })
}



export default logOutAccount;