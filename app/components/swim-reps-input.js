import Ember from 'ember';

export default Ember.Component.extend({
    // input type="number" required min=1 max=50  (e.g. 50x50m)
    kNumReps: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
    ],

    // input type="number" required min=25 max=400 step=25
    kDistance: [
        '25m',
        '50m',
        '100m',
        '150m',
        '200m'
    ],

    kStroke: [
        'Swim',
        'Kick',
        'Paddles',
        'Pull',
        'Paddles and Pull',
        'Any Other Stroke'
    ],

    // input type="number" required min=0 max=5
    kCycleMin: [
        '0',
        '1',
        '2',
        '3'
    ],

    // input type="number" required min=0 max=55 step=5
    kCycleSec: [
        '00',
        '05',
        '10',
        '15',
        '20',
        '25',
        '30',
        '35',
        '40',
        '45',
        '50',
        '55'
    ],

    kPace: [
        'slow',
        'TT+2s',
        'TT',
        'TT-2s',
        'fast',
        'max'
    ],

    // XXX not yet
    kTrend: [
        'descending',
        'ascending',
        'building',
        'best possible technique',
        'with fewest breaths possible',
        'no breathing for first 10m',
        'no push-off',
        '3 x effort + 1 x recovery',
        // et al.
    ],

    // component lifecycle guarantees to run init() prior to didInsertElement()
    init() {
        this._super(...arguments);  // indirectly extends Ember.Object
        this.classNames = ['swim-set', 'swim-set-' + Ember.String.dasherize(this.get('setName'))];
        // must not initialise ref type property statically or else shared by all instances (sic!)
        this.widgetMap = new Map();
    },

    didInsertElement() {
            // searching DOM subtree for this component instance only
            for (let widget of this.$('select')) {  // !== null by template design
                this.widgetMap.set(widget.attributes['name'].value, widget);
            }
    },

    actions: {
        addReps() {
            // this.widgetMap.forEach(console.log, console);
            // XXX (unlikely) race condition of button click preceding didInsertElement() event?
            let item = {};
            this.widgetMap.forEach(
                function(v, k) {
                    item[k] = v.value;  // capture currently selected value from each drop-down menu
                }
            );
            // implicitly notify view of change and re-render list
            this.get('totalSet').pushObject(item);
            return false;  // do not bubble further
        }
    }
});
