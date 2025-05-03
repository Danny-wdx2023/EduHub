const yes = [
    {
        "name": "网购",
        "detail": "遇上1折大促"
    }, {
        "name": "看电影",
        "detail": "电影院送爆米花"
    }, {
        "name": "打游戏",
        "detail": "成为全区第一"
    }, {
        "name": "看书",
        "detail": "暴涨姿势"
    }, {
        "name": "写代码",
        "detail": "一行代码解决问题被膜拜"
    }, {
        "name": "发朋友圈",
        "detail": "点赞破百"
    }, {
        "name": "请教问题",
        "detail": "被大佬解决"
    }, {
        "name": "看视频网站",
        "detail": "愉悦身心"
    }, {
        "name": "洗澡",
        "detail": "缓解一天劳累"
    }, {
        "name": "洗衣服",
        "detail": "发现口袋里的100元"
    }, {
        "name": "做饭",
        "detail": "做出巨好吃的黑暗料理"
    }, {
        "name": "上MC",
        "detail": "挖到钻石一夜暴富"
    }, {
        "name": "刷题",
        "detail": "成为虐题狂魔"
    }, {
        "name": "摸鱼",
        "detail": "成为划水王"
    }
]
const no = [
    {
        "name": "网购",
        "detail": "刚好错过促销"
    }, {
        "name": "看电影",
        "detail": "电影院停电"
    }, {
        "name": "打游戏",
        "detail": "游戏闪退"
    }, {
        "name": "看书",
        "detail": "书本自燃烧了笔记"
    }, {
        "name": "写代码",
        "detail": "电脑死机代码未保存"
    }, {
        "name": "发朋友圈",
        "detail": "被当做卖面膜的"
    }, {
        "name": "请教问题",
        "detail": "被当作xxs"
     }, {
        "name": "看视频网站",
        "detail": "广告满天飞"
    }, {
        "name": "洗澡",
        "detail": "热水器坏了"
    }, {
        "name": "洗衣服",
        "detail": "白衣服被染色成撞色衫"
    }, {
        "name": "做饭",
        "detail": "煤气泄漏差点爆炸"
    }, {
        "name": "上MC",
        "detail": "被僵尸围攻"
    }, {
        "name": "刷题",
        "detail": "一分不得"
    }, {
        "name": "摸鱼",
        "detail": "被父母制裁"
    }
]

function pick(){
    let len = yes.length;
    let index = Math.floor(Math.random() * len);
    return {
        yes: [
            yes[index], 
            yes[(index+1)%len],
        ], 
        no: [
            no[(index+3)%len],
            no[(index+4)%len],
        ]
    };
}

export default {
    url: "/api/getOracle",
    method: "get",
    delay: 6000,
    response: (request) => ({
        code: 200,
        data: pick(),
    })
}