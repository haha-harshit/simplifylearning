

// user's DASHBOARD
module.exports.dashboard = function(req, res){
    return res.end('<h1>This is your classroom!')
}


// user's profile
module.exports.profile = function(req, res){
    return res.end('<h1>Your Profile Page!</h1>')
};

