const getcurrentUser = async() => {
    const requestUser = await fetch('http://localhost:8080/loginedUser');
    const responseUser = await requestUser.json();
    return responseUser[0];
}

export default getcurrentUser;