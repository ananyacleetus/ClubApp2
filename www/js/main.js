var myApp = angular.module('WebClubApp', []);

myApp.controller('MainCtrl', ['$scope',
    function($scope) {
        $scope.clubs = [
            "Action Team",
            "Anime / Manga Club",
            "Art Club",   
            "Archery Club",
            "Athletes Taking Action",
            "Badminton",
            "Biology Club",
            "Campus News Video Club",
            "Car Club",
            "Cause for PAWS",
            "Cheerleading",
            "Chinese Yo-Yo Club",
            "Choral Groups",
            "Classic Rock Club",
            "Color Guard",
            "Computer Programming Club",
            "Crew (Rowing)",
            "Dairies for Charity",
            "Darfuri Dream Team",
            "Dead Poet's Society",
            "Elias Fund",
            "Environmental Awareness & Recycling",
            "E.T.H.I.C.S. (Enthusiastic Teens Helping Involuntary Child Soldiers)",
            "Fall Play",
            "Film Appreciation Club",
            "Film Production Club",
            "Fishing Club",
            "Forensics (Speech & Debate)",
            "French Club",
            "FRIENDS (Finding Relationships In Every New Direction)",
            "Future Medicine Club",
            "German Club",
            "Girl Child Network",
            "ICE (Inter Community Excellence",
            "Interact",
            "Investment Club",
            "Invisible Children",
            "Italian Club",
            "Japanese Club",
            "Jewish Student Union",
            "Junior Classical League",
            "Kids Helping Kids",
            "Latin Club",
            "Law Club",
            "League of Free Filmers",
            "Library Media Assistants",
            "L.I.N.K. (Leisure Interaction Networking Kids)",
            "Majorettes (Marching Band)",
            "Magic Club",
            "Make A Wish",
            "Marching Band",
            "Martial Arts Club",
            "Mathematics League",
            "MENC Tri-M Music Honor Society",
            "Model U.N.",
            "Montage (Literary Publication)",
            "Multi-Cultural Club",
            "Music Appreciation Club",
            "Music Production Club",
            "National Honor Society",
            "Natural Helpers",
            "Outreach Club",
            "Paintball Club",
            "Pantherettes (Marching Band)",
            "Photography Club",
            "Ping Pong Club",
            "Pink Ribbon Club",
            "Pokemon Club",
            "Quidditch Club",
            "Random Acts of Kindness",
            "Robotics Club",
            "S.A.D.D. (Students Against Drunk Driving)",
            "Save The Music",
            "Science Club",
            "Ski Club",
            "Spanish Club",
            "St. Clarion (Newspaper)",
            "Stage Crew",
            "Stock Market Club",
            "Student Council",
            "Super Smash Brothers",
            "Teens for Casey's Clubhouse",
            "Tertulia Club",
            "Thai Club (Thai Exchange Program)",
            "Thespian Society",
            "Third",
            "USC Book Club",
            "USC Serves",
            "USC Swing Dance Club",
            "Ultimate Frisbee",
            "UNICEF Club",
            "World Affairs Club",
            "Write On",
            "Yearbook (Clairvoyant)",
            "Zoom"
        ];

        $scope.searchOnClick = function() {
            var hitCount = 0;
            $scope.results = [];
            if ($scope.query) {
                var magic = new RegExp(".*" + ($scope.query.toLowerCase()) + ".*");
                for (var key in $scope.clubs) {
                    var obj = $scope.clubs[key];
                    if (magic.test((obj.toLowerCase()))) {
                        ++hitCount;
                        $scope.results.push(obj);
                    }
                }
                if (hitCount > 0) {
                    $scope.name = "Found " + hitCount + " club with that name";
                } else {
                    $scope.name = "Found no clubs by that name";
                }
            } else {
                var magic = new RegExp(".*");
                for (var key in data) {
                    var obj = data[key];
                    if (magic.test((obj.name.toLowerCase()))) {
                        ++hitCount;
                        $scope.results.push(obj);
                    }
                }
                if (hitCount > 0) {
                    $scope.name = "Found " + hitCount + " club with that name";
                } else {
                    $scope.name = "Found no clubs by that name";
                }
            }
        };

    }
]);