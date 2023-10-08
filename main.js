import './style.css'
import Globe from 'globe.gl'

const myGlobe = Globe();
myGlobe(document.getElementById('globeViz'))
  .globeImageUrl('/moon_night.jpg')
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png');

myGlobe.controls().autoRotate = true;
myGlobe.controls().autoRotateSpeed = 0.3;

document.getElementById("resume").addEventListener("click", function(){
  myGlobe.controls().autoRotate = true;
})
document.getElementById("pause").addEventListener("click", function(){
  myGlobe.controls().autoRotate = false;
});
slider.addEventListener("input", function(){
  myGlobe.controls().autoRotateSpeed = slider.value/10;
});


window.addEventListener('resize', function () {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  myGlobe.camera().aspect = newWidth / newHeight;
  myGlobe.camera().updateProjectionMatrix();

  myGlobe.renderer().setSize(newWidth, newHeight);
});
  