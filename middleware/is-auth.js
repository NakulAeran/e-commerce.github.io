// module.exports = (req, res, next) => {
//     try{
//         if (!req.session.isLoggedIn) {
//             return res.redirect('/login');
//         }
//         next();
//     }
//     catch(e){
//         next();
//     }
// }


module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}