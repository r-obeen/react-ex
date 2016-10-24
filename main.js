// FeedItem component
function FeedItem(props) {
  return (
    <article className="feed">
      <div className="left">
        <div className="img-logo">
          <div className="img-logo-wrap">
            <img src={props.picture} />

            <div className="logo">
              <i className="fa fa-twitter"></i>
            </div>
          </div>

          <div className="read-wrap">
            <span className="read"></span>
          </div>
        </div>

      </div>

      <div className="right">
        <div>
          <h2>@{props.user}</h2>
          <span className="since">{timeSince(props.since)}</span>
        </div>
        <a href={props.url}>{(props.user_real_name != " " ? props.user_real_name : "Unknown")}</a>
        <p>{props.title}</p>
      </div>
    </article>
  )
}

// Feed component
var Feed = React.createClass({
  getInitialState: function() {
    return {
      feeds: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    $.getJSON('https://web.mention.net/api/accounts/661072_53ca2jsh01c88c4wwkc0wockckk0w4440o4o0w8wkkgco4o888/alerts/1214654/mentions?access_token=ZDdmNDVmYzU1NWZkMDkwMDc4YjBjMzYyZDk2MDI3NGVlNmFmNTJkZDU5MzBhYWRiZGZmNzAxOGM1NDkzNDYxYQ')
    .then(function(data){
      console.log(data);
      _this.setState({
        feeds: data.mentions
      });
    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <section id="feed">
        {this.state.feeds.map(function(feed) {
          return (
            <FeedItem key={feed.id} title={feed.title} user={feed.source_name} user_real_name={feed.twitter_real_name} read={feed.read} picture={feed.picture_url} since={feed.created_at} url={feed.original_url} />
          );
        })}
      </section>
    )
  }
});

ReactDOM.render(
  <Feed />,
  document.getElementById('container')
);

// Get Time since feed as been created
function timeSince(date) {
    var seconds = Math.floor((new Date() - Date.parse(date)) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + "y";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + "m";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + "d";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + "h";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + "m";
    }
    return Math.floor(seconds) + " seconds";
}