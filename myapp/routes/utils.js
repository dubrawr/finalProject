exports.authenticationRequired = function(request, response, next) {
  if (!request.isAuthenticated()) {
    return response.sendStatus(403);
  }
  next();
};