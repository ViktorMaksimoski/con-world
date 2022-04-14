export const validateRegister = (data) => {
    if(data.userName.length > 5 && data.email.length > 10 && data.email.includes('@') && data.password.length > 7 &&
    data.dateOfBirth.length > 7 && data.country.length > 3 && data.gender.length > 3) return true

    return false;
}

export const validateLogin = (data) => {
    if(data.email.length > 10 && data.email.includes('@') && data.password.length > 7) return true

    return false
}