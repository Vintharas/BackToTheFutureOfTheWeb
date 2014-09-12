define(['knockout'], function (ko) {
    console.log('loaded main.js');
    console.log('setting up custom component loader');

    // Registering components in different ways!

    // #1. Register a component with a hardcoded template
    ko.components.register('everything-is-awesome', {
        template:
            ' <h2>#1. &lt;everything-is-awesome&gt;</h2>\
              <iframe width="560" height="315" src="//www.youtube.com/embed/StTqXEQ2l-Y" frameborder="0" allowfullscreen></iframe>\
            '
    });

    // #2. Register a component with template by id

    ko.components.register('thank-god-it-is-friday', {
        template: { element: 'thank-god-it-is-friday-template' } // by ID
    });

    // #3. Register a component with template by id and a view model

    ko.components.register('awesome-youtube-player', {
        template: { element: 'awesome-youtube-player-template' }, // by ID
        viewModel: function(params) {
            var rootUrl = "http://www.youtube.com/embed/",
                defaultHash = "W6DmHGYy_xk",
                hash = ko.observable(defaultHash);

            this.hash = hash;
            this.videoSrc = ko.computed(function() {
                var videoHash = hash() || defaultHash;
                return rootUrl + videoHash;
            });
        }
    });

    // #4. Register a component with template and view model via AMD
    ko.components.register('crazy-ass-game', {
        template: { require: 'text!app/views/crazy-game.html' }
    });



    /*

     In summary
     View model can be:
       - constructor function
       - singleton
       - factory
       - AMD module
    
     A view/template can be:
       - string inline template
       - an id
       - an element instance (DOM element)
       - an array of DOM nodes
       - a document fragment
       - AMD module

    */

    /*

    // configure knockout.js component provider with our own convention. Yuhu!
    // Taken from http://www.knockmeout.net/2014/06/knockout-3-2-preview-components.html
    // and modified a little bit
    // add a loader to the end of the list of loaders (one by default)


    //   This custom component establishes the following convention:
    //    - component: <my-component>
    //       - view model in apps/viewmodel/my-component.js
    //       - view in apps/views/my-component.html
    //
    //    Activating this custom loader will make the previous components stop working.
    //    That's because they don't follow the convention defined above.
    //

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

    */

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