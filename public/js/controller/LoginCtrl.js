app.controller('LoginController', function($scope,$http)
{
$scope.username = 'ameen new!';
console.log('ameen')
    $scope.signUpUser = function(user)
    {

        alert('dd')
        var userObj = {
        firstname : user.firstname,
        lastname : user.lastname,
        email : user.email,
        password : user.password,
        Role : 'user'
        };

            $http({
            method: 'POST',
            url: 'http://localhost:3000/users/register',
            headers: {'Content-Type': 'application/json'},
            data: userObj
        })
            .then(function(response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");

                refresh();
            });
    };


});
