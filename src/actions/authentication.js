export const authenClientSuccess = (status) => {
    return {
        type: "SUCCESS",
        status: status
    }
}
export const authenClientFailure = (status) => {
    return {
        type: "FAILURE",
        status: status
    }
}
export const authenAdminSuccess = (status) => {
    return {
        type: "SUCCESS",
        status: status
    }
}