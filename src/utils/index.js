const DOMAIN = "http://localhost:8080/"

export const get = async (path) => {
    const response = await fetch(DOMAIN + path);
    const result = await response.json();
    return result;
}
export const post = async (path, option) => {
    const response = await fetch(DOMAIN + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(option)
    });
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