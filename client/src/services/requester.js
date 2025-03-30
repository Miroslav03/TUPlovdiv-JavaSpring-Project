export async function requester(method, url, data) {
    const options = {};

    const token = localStorage.getItem("auth");
    if (token) {
        options.headers = {
            "Content-Type": "application/json",
            "x-authorization": token,
        };
    } else {
        options.headers = {
            "Content-Type": "application/json",
        };
    }

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");

export default {
    get,
    post,
    put,
    del,
};
