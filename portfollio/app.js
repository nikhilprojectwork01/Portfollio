const vedio1 = document.getElementById('projectvideo1')
const vedio2 = document.getElementById('projectvideo2')
const vedio3 = document.getElementById('projectvideo3')
const hoversign = document.querySelector('.hover-sign')

const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector(".menu-icon");
const crossionn = document.querySelector('.close-icon')

const videolist = [vedio1, vedio2, vedio3];

videolist.forEach(function (vedio) {
  vedio.addEventListener('mouseover', function () {
    vedio.play();
    hoversign.classList.add('active')
  })
  vedio.addEventListener('mouseout', function () {
    vedio.pause();
    hoversign.classList.remove('active')
  })
})





menu.addEventListener("click", function () {
  sidebar.classList.remove('close-icone')
  sidebar.classList.add('open-sidebar');
})

crossionn.addEventListener("click", function () {
  sidebar.classList.remove('open-sidebar');
  sidebar.classList.add('close-icone')
})