define(['knockout'], function (ko) {
    console.log('loaded main.js');
    console.log('setting up custom component loader');

    // configure knockout.js component provider with our own convention. Yuhu!
    // Taken from http://www.knockmeout.net/2014/06/knockout-3-2-preview-components.html
    // and modified al ittle bit
    // add a loader to the end of the list of loaders (one by default)
    var componentProvider = {
        getConfig: function (name, callback) {
            debugger;
            //provide configuration for how to load the template/widget
            callback({
                viewModel: {
                    //require the widget from the widget directory with just the name
                    require: "app/viewModels/" + name
                },
                template: {
                    //use the text plugin to load the template from the same directory
                    require: "text!app/views/" + name + ".html"
                }
            });
        },
        //use the default loaders functionality for loading
        loadComponent: ko.components.defaultLoader.loadComponent
    };
    ko.components.loaders.unshift(componentProvider);


    /* 
        You need to tell knockout.js which elements are going to be available.
        Although I think there's a way to automate this using the 
        ko.components.getComponentNameForNode function.
        
    */
    ko.components.register('hello-world', {});

    function MainViewModel() {
        
    };

    ko.applyBindings(new MainViewModel());
});