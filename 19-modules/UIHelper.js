const UIHelper = {
    component: 'User Interface', 
    getURL: function() {
        return 'example URL';
    }, 
    navigateBack: function() {
        return 'BackURL';
    }, 
    navigateForward: function() {
        return 'ForwardURL'
    }, 
    refresh: function() {
        return 'ResfreshURL'
    }
};

// export this as an object ^
module.exports = UIHelper;

//export this as a property
//module.exports.UIHelper = UIHelper;