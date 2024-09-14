const getUsersData = async() => {
    const request = await fetch('http://localhost:8080/usersData');
    const response = await request.json();
    return response
}


export default getUsersData