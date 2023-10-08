import './style.css'
import Globe from 'globe.gl'

var artificalquakes = [{"Apollo":'red',"Lat":-3.94,"Long":-21.2,"Year":69,"Day":324,"Hour":22,"Min":17,"Sec":17.7,"link":"https://www.nasa.gov/mission/apollo-12/"},
{"Apollo":"blue","Lat":-2.75,"Long":-27.86,"Year":70,"Day":105,"Hour":1,"Min":9,"Sec":41.0,"link":"https://svs.gsfc.nasa.gov/4803"},
{"Apollo":"blue","Lat":-8.09,"Long":-26.02,"Year":71,"Day":35,"Hour":7,"Min":40,"Sec":55.4,"link":"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-008B"},
{"Apollo":'red',"Lat":-3.42,"Long":-19.67,"Year":71,"Day":38,"Hour":0,"Min":45,"Sec":26.7,"link":"https://www.nasa.gov/mission/apollo-14/"},
{"Apollo":"blue","Lat":-1.51,"Long":-11.81,"Year":71,"Day":210,"Hour":20,"Min":58,"Sec":42.9,"link":"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063B"},
{"Apollo":'red',"Lat":26.36,"Long":0.25,"Year":71,"Day":215,"Hour":3,"Min":3,"Sec":37.0,"link":"https://www.nasa.gov/mission/apollo-15/"},
{"Apollo":"blue","Lat":1.3,"Long":-23.8,"Year":72,"Day":110,"Hour":21,"Min":2,"Sec":3,"link":"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-031A"},
{"Apollo":'red',"Lat":-9,"Long":15.5,"Year":72,"Day":111,"Hour":21,"Min":24,"Sec":0,"link":"https://www.nasa.gov/mission/apollo-16/"},
{"Apollo":"blue","Lat":-4.21,"Long":-12.31,"Year":72,"Day":345,"Hour":20,"Min":32,"Sec":42.3,"link":"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096B"},
{"Apollo":'red',"Lat":19.99,"Long":30.51,"Year":72,"Day":350,"Hour":6,"Min":50,"Sec":20.8,"link":"https://www.nasa.gov/mission/apollo-17/"}]

var shallowquakes = [{"Year":1971,"Day":107,"Hour":7,"Min":0,"Sec":55,"Lat":48.0,"Long":35.0,"Magnitude":2.8,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1971_107_mh_plot.jpg"},
{"Year":1971,"Day":140,"Hour":17,"Min":25,"Sec":10,"Lat":42.0,"Long":-24.0,"Magnitude":2.0,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1971_140_mh_plot.jpg"},
{"Year":1971,"Day":192,"Hour":13,"Min":24,"Sec":45,"Lat":43.0,"Long":-47.0,"Magnitude":1.9,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1971_192_mh_plot.jpg"},
{"Year":1972,"Day":2,"Hour":22,"Min":29,"Sec":40,"Lat":54.0,"Long":101.0,"Magnitude":1.9,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1972_2_mh_plot.jpg"},
{"Year":1972,"Day":261,"Hour":14,"Min":35,"Sec":55,"Lat":12.0,"Long":46.0,"Magnitude":1.0,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1972_261_mh_plot.jpg"},
{"Year":1972,"Day":341,"Hour":23,"Min":8,"Sec":20,"Lat":51.0,"Long":45.0,"Magnitude":1.4,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1972_341_mh_plot.jpg"},
{"Year":1972,"Day":344,"Hour":3,"Min":50,"Sec":15,"Lat":-20.0,"Long":-80.0,"Magnitude":1.2,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1972_344_mh_plot.jpg"},
{"Year":1973,"Day":39,"Hour":22,"Min":52,"Sec":10,"Lat":33.0,"Long":35.0,"Magnitude":0.8,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1973_39_mh_plot.jpg"},
{"Year":1973,"Day":72,"Hour":7,"Min":56,"Sec":30,"Lat":-84.0,"Long":-134.0,"Magnitude":3.2,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1973_72_mh_plot.jpg"},
{"Year":1973,"Day":171,"Hour":20,"Min":22,"Sec":0,"Lat":-1.0,"Long":-71.0,"Magnitude":2.2,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1973_171_mh_plot.jpg"},
{"Year":1973,"Day":274,"Hour":3,"Min":58,"Sec":0,"Lat":-37.0,"Long":-29.0,"Magnitude":1.1,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1971_274_mh_plot.jpg"},
{"Year":1974,"Day":54,"Hour":21,"Min":16,"Sec":50,"Lat":36.0,"Long":-16.0,"Magnitude":0.7,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1974_54_mh_plot.jpg"},
{"Year":1974,"Day":86,"Hour":9,"Min":11,"Sec":0,"Lat":-48.0,"Long":-106.0,"Magnitude":1.6,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1974_86_mh_plot.jpg"},
{"Year":1974,"Day":109,"Hour":13,"Min":35,"Sec":15,"Lat":-37.0,"Long":42.0,"Magnitude":0.9, "Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1974_109_mh_plot.jpg"},
{"Year":1974,"Day":149,"Hour":20,"Min":42,"Sec":15,"Lat":null,"Long":null,"Magnitude":0.6,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1974_149_mh_plot.jpg"},
{"Year":1974,"Day":192,"Hour":0,"Min":46,"Sec":30,"Lat":21.0,"Long":88.0,"Magnitude":2.7, "Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1974_192_mh_plot.jpg"},
{"Year":1975,"Day":3,"Hour":1,"Min":42,"Sec":0,"Lat":29.0,"Long":-98.0,"Magnitude":3.2, "Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1975_3_mh_plot.jpg"},
{"Year":1975,"Day":12,"Hour":3,"Min":14,"Sec":10,"Lat":75.0,"Long":40.0,"Magnitude":1.7,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1975_12_mh_plot.jpg"},
{"Year":1975,"Day":13,"Hour":0,"Min":26,"Sec":20,"Lat":-2.0,"Long":-51.0,"Magnitude":1.1, "Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1975_13_mh_plot.jpg"},
{"Year":1975,"Day":44,"Hour":22,"Min":3,"Sec":50,"Lat":-19.0,"Long":-26.0,"Magnitude":1.4,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1975_44_mh_plot.jpg"},
{"Year":1975,"Day":127,"Hour":6,"Min":37,"Sec":5,"Lat":-49.0,"Long":-45.0,"Magnitude":1.3,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1975_127_mh_plot.jpg"},
{"Year":1975,"Day":147,"Hour":23,"Min":29,"Sec":0,"Lat":3.0,"Long":-58.0,"Magnitude":1.4, "Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1975_147_mh_plot.jpg"},
{"Year":1975,"Day":314,"Hour":7,"Min":52,"Sec":55,"Lat":-8.0,"Long":64.0,"Magnitude":1.8,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1975_314_mh_plot.jpg"},
{"Year":1976,"Day":4,"Hour":11,"Min":18,"Sec":55,"Lat":50.0,"Long":30.0,"Magnitude":1.8, "Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1976_4_mh_plot.jpg"},
{"Year":1976,"Day":12,"Hour":8,"Min":18,"Sec":5,"Lat":38.0,"Long":44.0,"Magnitude":1.1,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1976_12_mh_plot.jpg"},
{"Year":1976,"Day":66,"Hour":10,"Min":12,"Sec":40,"Lat":50.0,"Long":-20.0,"Magnitude":2.3,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1976_66_mh_plot.jpg"},
{"Year":1976,"Day":68,"Hour":14,"Min":42,"Sec":10,"Lat":-19.0,"Long":-12.0,"Magnitude":1.8,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1976_68_mh_plot.jpg"},
{"Year":1976,"Day":137,"Hour":12,"Min":32,"Sec":40,"Lat":77.0,"Long":-10.0,"Magnitude":1.5,"Link": "https://github.com/SaAliyev/hackathon_images/raw/main/1971_137_mh_plot.jpg"}]

let myGlobe = Globe();
myGlobe(document.getElementById('globeViz'))
  .globeImageUrl('moon.jpg')
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png');

myGlobe.controls().autoRotate = true;
myGlobe.controls().autoRotateSpeed = 0.3;



const N = 10;
const gData = [...Array(N).keys()].map(() => ({
  lat: (Math.random() - 0.5) * 180,
  lng: (Math.random() - 0.5) * 360,
  size: 30,
  color: 'red',
  href: ''
}));

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

gData.forEach((element, index, array) => {
    element['lat']=artificalquakes[index]['Lat'];
    element['lng']=artificalquakes[index]['Long']
    element['color']=artificalquakes[index]['Apollo']
    element['href']=artificalquakes[index]['link']
});

myGlobe.htmlElementsData(gData)
       .htmlElement(d => {
        const el = document.createElement('div');
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;
  
        el.style['pointer-events'] = 'auto';
        el.style.cursor = 'pointer';
        el.onclick = () => window.open(d.href);
        return el;
      });



document.getElementById("resume").addEventListener("click", function(){
  myGlobe.controls().autoRotate = true;
  myGlobe.resumeAnimation;
})
document.getElementById("pause").addEventListener("click", function(){
  myGlobe.controls().autoRotate = false;
});
slider.addEventListener("input", function(event){
  myGlobe.controls().autoRotateSpeed = slider.value/10;
  event.preventDefault;
});


window.addEventListener('resize', function () {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  myGlobe.camera().aspect = newWidth / newHeight;
  myGlobe.camera().updateProjectionMatrix();

  myGlobe.renderer().setSize(newWidth, newHeight);
});

const myCheckbox = document.getElementById('checkbox1');

myCheckbox.addEventListener('change', function() {
  // Your code to respond to checkbox changes goes here
  if (myCheckbox.checked) {
    myGlobe = myGlobe.htmlElementsData(gData)
    .htmlElement(d => {
     const el = document.createElement('div');
     el.innerHTML = markerSvg;
     el.style.color = d.color;
     el.style.width = `${d.size}px`;

     el.style['pointer-events'] = 'auto';
     el.style.cursor = 'pointer';
     el.onclick = () => window.open(d.href);
     return el;
   });
  } else {
    myGlobe = Globe();
    myGlobe(document.getElementById('globeViz'))
    .globeImageUrl('/moon_night.jpg')
    .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png');
  }
});

const settingsIcon = document.getElementById('settings');
const listItems = document.querySelector('.list1');
// Add a click event listener to the settings icon
settingsIcon.addEventListener('click', () => {
  // Toggle the 'hidden' class on the list items to show/hide them
  listItems.classList.toggle('hidden');
});

function generateListviewItems(year, day, index){
  const listContainer = document.getElementById("scrollbar");
  const listItem = document.createElement('div');
  listItem.innerHTML += `${year}/${day}`;
  listItem.className = 'item';
  listContainer.appendChild(listItem);
  listItem.addEventListener('click', () => scrolleventlistener(index));
}

shallowquakes.forEach((element, index, array) => {
  generateListviewItems(element['Year'], element['Day'], index);
});

let showGraphs = false;
var checkbox2 = document.getElementById('checkbox2');

checkbox2.addEventListener('change', function() {
  // Your code to respond to checkbox changes goes here
  if (checkbox2.checked) {
    showGraphs = true;    
   }else{
    showGraphs = false;
  }
});

function scrolleventlistener(index){

  parent = document.getElementById('globeViz');
  if (document.getElementsByClassName('graphicdata')[0] != null){
    parent.removeChild(document.getElementsByClassName('graphicdata')[0]);
  }
  if (document.getElementsByClassName('textdata')[0] != null){
    parent.removeChild(document.getElementsByClassName('textdata')[0]);
  }

  myGlobe.controls().autoRotate = false;
  myGlobe.pointOfView({lat: shallowquakes[index]['Lat'], lng: shallowquakes[index]['Long']}, 2000);

  myGlobe.ringsData([shallowquakes[index]])
         .ringLat(d => d['Lat'])
         .ringLng(d => d['Long'])
         .ringMaxRadius(d => d['Magnitude'] * 5)
         .ringPropagationSpeed(d => d['Magnitude'] * 2)
         .ringRepeatPeriod(500)

  const graphicdata = document.createElement('div');
  graphicdata.className = 'graphicdata';
  const img = new Image();
  img.className = 'graphicdatadiv'; // Assign the class name to the image element
  img.src = shallowquakes[index]["Link"]; // Replace with your image URL
  //Append the image element to the body or another suitable parent element
  graphicdata.appendChild(img); // Example: Append to the body  

  const text = document.createElement('div');
  text.className = 'textdata';
  text.innerHTML = `<h1>Year: ${shallowquakes[index]['Year']}</h1>
  <h2>Day: ${shallowquakes[index]['Day']}</h2>
  <h2>Hour: ${shallowquakes[index]['Hour']}</h2>
  <h2>Min: ${shallowquakes[index]['Min']}</h2>
  <h2>Sec: ${shallowquakes[index]['Sec']}</h2>
  <h2>Lat: ${shallowquakes[index]['Lat']}</h2>
  <h2>Long: ${shallowquakes[index]['Long']}</h2>
  <h2>Magnitude: ${shallowquakes[index]['Magnitude']}</h2>
  <a href="https://toghrul.itch.io/moonquake"><h2>SIMULATE</h2></a>`;
  if (shallowquakes[index]['Comments'] != null){
    text.innerHTML += `<text>Comments: ${shallowquakes[index]['Comments']}</h2>`;
  }

  
  if(showGraphs){
  document.getElementById('globeViz').appendChild(graphicdata);}
  document.getElementById('globeViz').appendChild(text);
}

