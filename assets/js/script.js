let email = "YOUR_EMAIL",
channel_id = "UCK8sQmJBp8GCxrOtXWBpyEA",
api_key = "AIzaSyA94fCqyLhw0y02gzprkpXWuvx_KknHWyQ",
videos_limit = 9;
const form = document.querySelector("form").addEventListener("submit", (e) => {
e.preventDefault();
var name = document.querySelector("#name").value,
  // mail = document.querySelector("#fc-generated-1-email").value,
  msg = document.querySelector("#message").value,
  subject = "Mail from " + name + " via Portfolio Website";

// alert(name+'\n '+email+'\n '+msg)

window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + msg;
});
var app = document.getElementById('typingarea');

var typewriter = new Typewriter(app, {
loop: true
});

typewriter
.pauseFor(1500)
.typeString("I'm a Web Developer")
.pauseFor(1000)
.deleteAll()
.typeString("I'm a Freelancer")
.pauseFor(1000)
.deleteAll()
.deleteAll()
.typeString("I'm a Learner")
.pauseFor(1000)
.deleteAll()
.typeString("I'm Unstopable!")
.pauseFor(1000)
.start();

function getJSONData(yourUrl) {
var Httpreq = new XMLHttpRequest();
try {
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
} catch (ex) {
  alert(ex.message);
}
return Httpreq.responseText;
}

function showVideoListChannel(channelid, writediv, maxnumbervideos, apikey) {
try {
  document.getElementById(writediv).innerHTML = "";
  var vid = getJSONData("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=" + channelid + "&maxResults=" + (maxnumbervideos + 1) + "&key=" + apikey);
  var videoinfo = JSON.parse(vid);
  var videos = videoinfo.items;
  var videocount = videoinfo.pageInfo.totalResults;
  var content = '<div class="row align-items-center justify-content-center g-5 px-3 py-5">';
  for (var i = 0; i < videos.length - 1; i++) {
    var videoid = videos[i].id.videoId;
    var videotitle = videos[i].snippet.title;
    var videodescription = videos[i].snippet.description;
    var videodate = videos[i].snippet.publishedAt; // date time published
    var newdate = new Date(Date.parse((videodate + " (ISO 8601)").replace(/ *\(.*\)/, "")));
    var min = newdate.getMinutes();
    if (min < 10) {
      min = "0" + min;
    }
    if (newdate.getHours() > 12) {
      newdate = newdate.getMonth() + 1 + "/" + newdate.getDate() + "/" + newdate.getFullYear() + " " + (newdate.getHours() - 12) + ":" + min + " PM";
    } else if (newdate.getHours() == 12) {
      newdate = newdate.getMonth() + 1 + "/" + newdate.getDate() + "/" + newdate.getFullYear() + " " + newdate.getHours() + ":" + min + " PM";
    } else {
      newdate = newdate.getMonth() + 1 + "/" + newdate.getDate() + "/" + newdate.getFullYear() + " " + newdate.getHours() + ":" + min + " AM";
    }
    var videothumbnail = videos[i].snippet.thumbnails.default.url; // default, medium or high
    content += '<div class=" col-12 col-md-6 col-lg-3 m-3">'
      + '<div class="card hvr-grow" style="width: 18rem;height: 32rem;">'
      + '<img src="' + videothumbnail + '" class="card-img-top" alt="' + videotitle + '">'
      + '<div class="card-body">'
      + '<h5 class="card-title">' + videotitle + '</h5>'
      + '<p class="card-text" > ' + videodescription + '</p>'
      + '<a href="https://www.youtube.com/watch?v=' + videoid + '" class="btn btn-primary">Watch Now</a>'
      + '</div> </div> </div>';
  }
  content += "</div>";
  document.getElementById(writediv).innerHTML = content;
} catch (ex) {
  alert(ex.message);
}
}

showVideoListChannel(channel_id, "videos", videos_limit, api_key);