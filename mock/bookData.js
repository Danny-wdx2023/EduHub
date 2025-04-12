export default {
    url: "/api/getBookData",
    method: "get",
    response: (request) => {
        return {
            code: 200,
            data: [
                {
                    name: "论中国",
                    author: "基辛格",
                    publisher: "-",
                    pubdate: "-",
                    searchId: "-",
                    isbn: "-"
                }
            ]
        }
    }
}