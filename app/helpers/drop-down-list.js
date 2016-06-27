import Ember from 'ember';

export function dropDownList(params, hash) {
    // (one and only) _named_ parameter from use in template
    let markup = `<select name="${hash['name']}">`;
    // first (and only) _positional_ parameter
    for (let item of params[0]) {
        markup += `<option value="${item}">${item}</option>`;
    }
    markup += "</select>";
    return Ember.String.htmlSafe(markup);
}

export default Ember.Helper.helper(dropDownList);
