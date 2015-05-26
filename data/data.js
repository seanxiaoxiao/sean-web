/**
 * Created by xiaoxiao on 3/4/15.
 */

var projects = [
    {
        id: 'vocabulary-school',
        name: '词汇私塾',
        desc: '词汇私塾GRE版 可能是最好的GRE背单词软件 地铁上，宿舍中，教室里。天涯海角，打开应用，想背就背。 顺序，乱序，分类。不同的词库帮助你谈笑间征服考试。 *革命性用户体验，花更少的时间，记更多的单词 *精挑细选GRE词库，直击最新GRE考试  *记录背诵进度，为你提供最科学的学习复习计划  *购买正版软件，作者感谢你的支持，祝愿你实现梦想，进入你理想的学校。',
        link: 'https://itunes.apple.com/app/id558382812'
    },
    {
        id: 'canary-radio',
        name: 'Canary Radio',
        desc: 'Canary Radio. Your twitter Radio. This amazing app will read your tweet feeds and help you catch up the latest news when you are driving your car, washing up, cooking your food or even coding. Canary Radio allows you to subscribe your friends, celebrity, local trend, hot event. You can catch up the latest and hottest news in different aspects.',
        link: 'https://itunes.apple.com/app/id857121884'
    },
    {
        id: 'fortune-cookie',
        name: 'Fortune Cookie',
        desc: 'The Fortune Cookie works with Apple Watch to give you a quote full of wisdom. You can also select different categories from the category menu.',
        link: ''
    }
];

module.exports = {

    allProjects: function() {
        return projects;
    },

    findProject: function(id) {
        for (var i in projects) {
            if (id === projects[i]["id"]) {
                return projects[i];
            }
        }
        return null;
    }

};