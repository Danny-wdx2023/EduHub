export default {
    url: "/api/getUserData",
    method: "get",
    response: (request) => {
        return {
            code: 200,
            data: {
                name: "Richard Zou",
                id: "bricteria",
                email: "bricteria@u235.eduhub.com",
                phonenumber: null,
                role: "user",
                avatar: "Bricteria",
                signature: "我爱板砖！",
            },
        }
    }
}