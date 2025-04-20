const history = {
    "bricteria": {
        "brick": [
            { name: "brick", msg: "我通过了你的朋友验证请求，现在我们可以开始聊天了" },
            { name: "bricteria", msg: "在吗，求下今天语文作业" },
            { name: "brick", msg: "唐诗三百首往后抄两首，巩固的话读读写写抄8遍"}
        ],
        "hcl": [
            { name: "hcl", msg: "我通过了你的朋友验证请求，现在我们可以开始聊天了" },
            { name: "bricteria", msg: "欢迎新同学~" },
            { name: "hcl", msg: "初来乍到，请多指教~"}
        ],
        "sean": [
            { name: "bricteria", msg: "我通过了你的朋友验证请求，现在我们可以开始聊天了" },
            { name: "bricteria", msg: "第二十五题第二小问都做不出来，那你不是废了吗" },
            { name: "bricteria", msg: "菜菜菜菜菜" },
            { name: "sean", msg: "一模都考不到140，那你不是废了吗" },
            { name: "sean", msg: "菜菜菜菜菜" }
        ],
        "richard-li": [
            { name: "richard-li", msg: "我通过了你的朋友验证请求，现在我们可以开始聊天了" }
        ]
    }
};

export default {
    url: "/api/getConversationHistory",
    method: "get",
    response: (req) => {
        let me = req.query['me'], other = req.query['other'];
        return {
            code: 200,
            data: history[me]?.[other]
        }
    }
}