const getUserById = async (id) => {
   const request =  await fetch(`http://localhost:8080/usersData/${id}`);
    const response = await request.json();
    return response;
}

export default getUserById;