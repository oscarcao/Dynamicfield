export function increment (store) {
    store.dispatch('INCREMENT')
}

// an action with additional arguments
// with ES2015 argument destructuring
export function incrementBy ({ dispatch }, amount) {
    dispatch('INCREMENT', amount)
}

/**
 * updateFieldsData()
 *
 * save the object data from the server to the store
 *
 * @param {Object} data
 *
 * @return {Null}
 */
export function updateFieldsData(store, data) {
    //console.log('data ', data);
    store.dispatch('updateFieldsData', data);
}


/**
 * removeFromFields()
 *
 * save the object data from the server to the store
 *
 * @param {Object} data
 *
 * @return {Null}
 */
export function removeFromFields(store, data) {
    //console.log('data ', data);
    store.dispatch('removeFromFields', data);
}

/**
 * updateDeletedFields()
 *
 * delete these fields
 *
 * @param {Object} data
 *
 * @return {Null}
 */
export function updateDeletedFields(store, data) {
    //console.log('updateDeletedFields ', data);
    store.dispatch('updateDeletedFields', data);
}


/**
 * updateDeletedLayouts()
 *
 * delete these layouts
 *
 * @param {Object} data
 *
 * @return {Null}
 */
export function updateDeletedLayouts(store, data) {
    //console.log('updateDeletedLayouts ', data);
    store.dispatch('updateDeletedLayouts', data);
}

/**
 * updateIsNew()
 *
 * udpate is new property
 *
 * @param {Object} data
 *
 * @return {Null}
 */
export function updateIsNew(store, data) {
    store.dispatch('updateIsNew', data);
}

/**
 * showFlexibleContentField()
 *
 * @param {Object} data
 *
 * @return {Null}
 */
export function showFlexibleContentField(store, data) {
    store.dispatch('showFlexibleContentField', data);
}


