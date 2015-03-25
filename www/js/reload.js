    function reloadUpdates() {
        $("#updlist").empty();
        getPosts('uscclubapp', '.posts.updates');
    }

        function reloadCalendar() {
        $("#callist").empty();
        getPosts('uscclubappcal', '.posts.calendar');
    }