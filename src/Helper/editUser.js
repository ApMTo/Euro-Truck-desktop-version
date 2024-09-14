const editUser = async (id, editBody) => {
    await fetch(`http://localhost:8080/usersData/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(editBody)
    })
    await fetch(`http://localhost:8080/loginedUser/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(editBody)
    })
}


export default editUser;