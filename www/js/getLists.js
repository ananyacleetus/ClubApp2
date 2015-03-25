var getLists = function(subreddit, list) {
        var user_query = document.getElementById("search-input").value;

        var subredditURL = 'http://www.reddit.com/r/' + subreddit + '.json';
        $.ajax(subredditURL).done(function(data, status, xhr) {
                if (data && data.data.children.length === 0) {
                    $(list).append('<li><h2>No posts for now!</h2><p>Check back later!</p></li>')
                    return;
                }
                $.each(data.data.children, function(i, v) {
                        var title = v.data.title;
                        var text = v.data.selftext;
                        var id = text.substring(0, 4);
                        var name = clubarray[parseInt(id) - 1];
                        console.log(name);
                        console.log(user_query);

                        if (name.indexOf(user_query) > -1) {

                            $(list).append('<li><h2 style="font-size:20px;">' + v.data.title + '</h2><h4 style="font-size:18px;">' + name + '</h4><p style="font-size:17px;">' + v.data.selftext.substring(4) + '</p></li>');
                        }

                    });
                });
        };