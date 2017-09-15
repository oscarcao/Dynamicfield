/*
 * the god damn mutations to change the stores state
 */
module.exports = {

    /**
     * INCREMENT()
     *
     * add to the count
     *
     * @param {Object} state
     *
     * @return {Null}
     */
    INCREMENT : function (state) {
        state.count++
    },

    /**
     * updateFieldsData()
     *
     * update fields data
     *
     * @param {Object} state
     * @param {Object} fields
     *
     * @return {Null}
     */
    updateFieldsData( state, fields ) {
        //console.log('fields mutation', fields);
        state.fields = fields;
    },

    /**
     * updateDeletedFields()
     *
     * update deleted fields data
     *
     * @param {Object} state
     * @param {Object} fields
     *
     * @return {Null}
     */
    updateDeletedFields( state, fields ){
        //console.log('updateDeletedFields ', fields);
        _.each(fields, function(field) {
            var result = _.findWhere(state.deletedFields, field);
            //console.log('result????',result, fields, field);
            if(undefined === result) {
                state.deletedFields.push(field);
            }
        });
    },

    /**
     * updateDeletedLayouts()
     *
     * update deleted fields data
     *
     * @param {Object} state
     * @param {Object} layouts
     *
     * @return {Null}
     */
    updateDeletedLayouts( state, layouts ){
        //console.log('updateDeletedLayouts ', layouts);
        _.each(layouts, function(layout) {
            var result = _.findWhere(state.deletedLayouts, layout);
            //console.log('result????',result);
            if(undefined === result) {
                state.deletedLayouts.push(layout);
            }
        });
    },

    /**
     * removeFromFields()
     *
     * remove a field from fields
     *
     * @param {Object} state
     * @param {Object} field
     *
     * @return {Null}
     */
    removeFromFields( state, field){
        state.fields.$remove(field);
    },

    /**
     * updateIsNew()
     *
     * update the isNew property
     *
     * @param {Object} state
     * @param {Object} value
     *
     * @return {Null}
     */
    updateIsNew(state, value){
        state.isNew = value;
    },

    /**
     * showFlexibleContentField()
     *
     * show flexible content field
     *
     * @param {Object} state
     * @param {Object} value
     *
     * @return {Null}
     */
    showFlexibleContentField(state, value){
        state.showFlexibleContentField = value;
    }
};