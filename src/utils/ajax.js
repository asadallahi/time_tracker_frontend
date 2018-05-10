const api_host = 'http://192.168.33.241/api';
export default {
    async postData(data) {
        //todo: validate
        try {
            const response = await
                fetch(api_host + '/post_data', {
                    method: 'POST',
                    headers: {},
                    credentials: 'same-origin',

                    body: JSON.stringify(data),
                });
            return await response.json();
        } catch (error) {
            console.warn(error);
        }
    },
    async getList(search_str = null) {
        let search_term = (search_str === null) ? '' : '?q=' + search_str;
        try {
            const response = await
                fetch(
                    api_host + '/get_list' + search_term
                );
            return await response.json();
        } catch (error) {
            console.warn(error);
        }
    },
}
