import Ember from 'ember';

export default Ember.Route.extend({
    // ES2015 shorthand for model:function() { ... }
    model() {
        return {
            mainSet: [
                {
                    numReps: '2',
                    distance: '50m',
                    stroke: 'Paddles',
                    cycleMin: '1',
                    cycleSec: '30',
                    pace: 'fast'
                }
            ],
        };
    }
});
