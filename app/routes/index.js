import Ember from 'ember';

export default Ember.Route.extend({
    // ES2015 shorthand for model:function() { ... }
    model() {
        return {
            warmupSet: [],
            mainSet: [],
            cooldownSet: []
        };
    }
});
