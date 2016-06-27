import Ember from 'ember';

export default Ember.Route.extend({
    // ES2015 shorthand for model:function() { ... }
    model() {
        return {
            warmupSet: [],
            mainSet: [],
            cooldownSet: []
        };
    },

    actions: {
        save() {
            let session = {
                venue: Ember.$('input#venue')[0].value,
                date: Ember.$('input#date')[0].value,
                lane: Ember.$('input#lane')[0].value,
                coach: Ember.$('input#coach')[0].value
            };
            console.log(JSON.stringify(session));
            console.log(JSON.stringify(this.controller.model.warmupSet));
            console.log(JSON.stringify(this.controller.model.mainSet));
            console.log(JSON.stringify(this.controller.model.cooldownSet));
            return false;  // do not bubble further
        }
    }
});
