var app = angular.module("myApp", []);

app.controller("myController", function($scope) {
    $scope.primaryColors = [
        "#ff5040",
        "#fe9040",
        "#ffcf40",
        "#b0ff40",
        "#5fff40",
        "#3ffccd",
        "#40dfff",
        "#40b0ff",
        "#3f6efc",
        "#8f40ff",
        "#ef40ff",
        "#ff407f"
    ];

    $scope.darkColors = [
        "#bf3030",
        "#cc6633",
        "#d9a336",
        "#87d936",
        "#44d934",
        "#23CCAC",
        "#36bed9",
        "#3695d9",
        "#3651d9",
        "#6c36d9",
        "#be36d9",
        "#d9365f"
    ];

    $scope.lightColors = [
        "#ff7866",
        "#fcb165",
        "#ffe359",
        "#ccff66",
        "#96ff73",
        "#7efcd2",
        "#70efff",
        "#66c4ff",
        "#5585ff",
        "#ac59ff",
        "#f266ff",
        "#ff73ad"
    ];

    $scope.grayScale = [
        "#f5f9fa",
        "#e1e4e5",
        "#4b4c4d",
        "#323333"
    ];

    $scope.otherColors = [
        "#992626",
        "#A65329",
        "#B3862C",
        "#6FB32C",
        "#38B32B",
        "#16A585",
        "#2C9CB3",
        "#2C7BB3",
        "#2C43B3",
        "#592CB3",
        "#9C2CB3",
        "#B32C4E"

    ];

});
