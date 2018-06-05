angular.module('app.services', [])


.service('LoginService', function($q) {
    return {
        loginUser: function(token) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            console.log(token);
     if (token != 'zero') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }


    }
})

.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }

})

.service('LogoutService', function(){
      this.logoutUser = function(token,id){
        localStorage.clear('id');
        localStorage.clear('myToken');
                                }

})


.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);
