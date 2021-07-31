$('#errorMsg').hide();


$('.menu-toggle').click(function() {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
  $(".logo").toggleClass("dark");
});

$(document).on("click", ".nav-item a", function(e) {
  $('.menu-toggle').click();
  location.href = this.href;
});

function handleFormSubmit() {

  var subject = encodeURIComponent($('#subject').val()),
    body = encodeURIComponent($('#body').val());

  /* var mainUrl = ;
  console.log(mailUrl);
  alert(mailUrl); */

  if (subject != '' && body != '') {
    $('#errorMsg').hide();
    window.open('mailto:itsamaan.warsi@gmail.com?subject=' + subject + '&body=' + body, '_blank');
  } else {
    $('#errorMsg').show();
  }
}

const query = `
    {
      user(username: "amaanwarsi") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;


const fetchPosts = async () => {
  const response = await fetch('https://api.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
  const ApiResponse = await response.json();

  console.log(JSON.stringify(ApiResponse.data.user.publication.posts));
  let post = [];
  post = ApiResponse.data.user.publication.posts;
  ApiResponse.data.user.publication.posts.map(function(post, index){
    $('.row').append('<a href="https://aw-techy.hashnode.dev/'+post.slug+'" id="'+index+'"><div class="card"><div class="card-img"> <img src="'+post.coverImage+'" alt="'+post.title+'" loading="lazy" /> </div> <div class="cardText"> <h2>'+post.title+'</h2> <p>'+post.brief+'</p> </div></div></a>');
  });
}

fetchPosts();

var app = document.getElementById('typingarea');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .typeString("I'm a Web Developer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I'm a Freelancer")
  .pauseFor(1000)
  .start();



particlesJS("particles-js", { "particles": { "number": { "value": 160, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } }, "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });