/**
 * Created by xiaoxiao on 3/4/15.
 */

var projects = [
    {
        id: 'vocabulary-school',
        name: '词汇私塾'
    },
    {
        id: 'canary-radio',
        name: 'Canary Radio'
    },
    {
        id: 'fortune-cookie',
        name: 'Fortune Cookie'
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