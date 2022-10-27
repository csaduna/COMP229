exports.home = function(req, res, next) {
    res.render('index', { title: 'CAd X | Home' });
};

exports.about = function(req, res, next) {
    res.render('index', { title: 'CAd X | About Me' });
};

exports.projects = function(req, res, next) {
    res.render('projectsservices', { title: 'CAd X | Projects' });
};

exports.services = function(req, res, next) {
    res.render('projectsservices', { title: 'CAd X | Services' });
};

exports.contact = function(req, res, next) {
    res.render('contact', { title: 'CAd X | Contact Me' });
};