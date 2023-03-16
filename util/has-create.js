module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('crear_crepas') >= 0)) {
        return response.redirect('/crepas/lista');
    }
    next();
}