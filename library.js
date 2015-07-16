    "use strict";

    var plugin = {};

    function renderCustomPage(req, res, next) {
        // charger la page
        res.render('angular-page');
    }

    plugin.init = function(params, callback) {
        // ajouter les routes
        var app = params.router,
            middleware = params.middleware;

        app.get('/angular', middleware.buildHeader, renderCustomPage);
        app.get('/templates/angular.tpl', renderCustomPage);
        app.get('/api/angular', renderCustomPage);

        callback();
    };

    plugin.addNavigation = function(header, callback) {
        // ajouter le lien dans le menu de navigation principal
        header.navigation.push({
            class: '',
            route: '/angular',
            iconClass: 'fa fa-google',
            title: 'angular',
            text: 'angular'
        });
        callback(null, header);
    };

    module.exports = plugin;
