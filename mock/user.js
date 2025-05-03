export default {
    url: "/api/getUserData",
    method: "get",
    response: (request) => ({
        code: 200,
        data: {
            name: "邹致勋",
            id: "bricteria",
            email: "bricteria@u235.eduhub.com",
            phonenumber: null,
            role: "user",
            avatar: "Bricteria",
            signature: "我爱板砖！",
        }
    })
}