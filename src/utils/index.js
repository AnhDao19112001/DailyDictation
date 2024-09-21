const DOMAIN = "http://localhost:8000/api/"
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
export const get = async (path) => {
    const response = await fetch(DOMAIN + path);
    const result = await response.json();
    return result;
}
export const post = async (path, option) => {  
    const token = localStorage.getItem("token");
    const response = await fetch(DOMAIN + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            "X-CSRF-TOKEN": csrfToken,
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(option)
    });
    const result = await response.json();
    return result;
}
export const postRegister = async (path, option) => {
    const response = await fetch(DOMAIN + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrfToken,
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(option)
    });
    console.log(response);
    
    const result = await response.json();
    return result;
}
export const del = async (path) => {
    const response = await fetch(DOMAIN + path, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const result = await response.json();
    return result;
}
export const patch = async (path, option) => {
    const response = await fetch(DOMAIN + path, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(option)
    });
    const result = await response.json();
    return result;
}