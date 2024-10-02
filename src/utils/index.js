import { getCookie } from "../helpers/cookie";

const DOMAIN = "http://localhost:8000/api/"
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
export const get = async (path) => {
    const response = await fetch(DOMAIN + path);
    const result = await response.json();
    return result;
}
export const postLogin = async (path, option) => {
    const token = localStorage.getItem("token");
    const response = await fetch(DOMAIN + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrfToken,
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(option)
    });
    const result = await response.json();

    return result;
}
export const postEndTime = async (path = "end-time") => {
    const token = localStorage.getItem("token");
    if (token) {
        const option = {
            endTime: new Date(),
        }
        await fetch(DOMAIN + path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
                'Authorization': `Bearer ${token}`,
                body: JSON.stringify(option)
            },
        })
    }
}

export const postStartTime = async (path = "start-time") => {
    const token = localStorage.getItem("token");
    console.log("OK")
    if (token) {
        const option = {
            startTime: new Date(),
        }
        await fetch(DOMAIN + path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
                'Authorization': `Bearer ${token}`,
                body: JSON.stringify(option)
            },
        })
    }
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
        },
        body: JSON.stringify(option)
    });
    const result = await response.json();
    return result;
}