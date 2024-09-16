export const checkAuthenClient = (status) => {
    return {
        type: "CHECK_AUTHEN_CLIENT",
        status: status
    }
}
export const checkAuthenAdmin = (status) => {
    return {
        type: "CHECK_AUTHEN_ADMIN",
        status: status
    }
}