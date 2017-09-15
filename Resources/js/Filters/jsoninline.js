export default {
    // model -> view
    // formats the value when updating the input element.
    read: function(value){
        console.log('jsoninline read',value);
        return JSON.stringify(value);
    },
    // view -> model
    // formats the value when writing to the data.
    write: function(value, oldVal){
        console.log('jsoninline write',value, oldVal);
        return JSON.stringify(value);
    }
}