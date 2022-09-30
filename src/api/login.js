import { BASE_API } from "../utils/constants";

export async function loginApi(formData) {
    console.log(formData.email + formData.password);
    let formBody = [];
    for (var property in formData) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(formData[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    var reqbody = `email=${formData.email}&password=${formData.password}`

    console.log(BASE_API);
    try {
        //const cors = 'https://cors-anywhere.herokuapp.com/'
        const url = `${BASE_API}/auth/login`
        //const url = 'https://cors-anywhere.herokuapp.com/virpos.online/virpos/auth/login'
        const params = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: new URLSearchParams({
                'email': formData.email,
                'password': formData.password
            })
        }

        const response = await fetch(url, params);
        /*if (response.status !== 200) {
            throw new Error("Usuario o contraseña incorrectos");
        }*/
        //const result = await response;
        console.log(url);
        return response.status
    } catch (error) {
        throw error
    }
}