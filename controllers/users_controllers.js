

// user's DASHBOARD
module.exports.dashboard = function(req, res){
    return res.render('dashboard', {
        title: 'SimplifyLearning | Dashboard'
    });
};


// user's profile
module.exports.profile = function(req, res){
    return res.render('profile', {
        title: 'SimplifyLearning | Your Profile'
    });
};

