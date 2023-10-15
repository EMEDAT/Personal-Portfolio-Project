document.addEventListener('DOMContentLoaded', function() {
  const bounceKeyframes = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-30px)' },
    { transform: 'translateY(0)' },
  ];

  const bounceOptions = {
    duration: 1000,
    iterations: 1,
  };

  const socials = document.querySelectorAll('.socials');
  socials.forEach(social => {
    social.addEventListener('mouseover', () => {
      social.animate(bounceKeyframes, bounceOptions);
    });
  });
});
