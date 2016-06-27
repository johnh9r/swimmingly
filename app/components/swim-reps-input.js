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
    ]
});
