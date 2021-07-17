const reviews = [
    {
      id: 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F02%2Fmain%2Fblat-breakfast-bowls-1702w.jpg%3Fitok%3D1JGLPfPa&w=450&c=sc&poi=face&q=85",
      client:
        "Tommy Gatsby",
        date:"2022-12-1",
        share:"Facebook,Twitter,Prinerest",
    },
    {
        id: 2,
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1513281920%2Fsouthwestern-sweet-potato-and-egg-hash-1801-ck.jpg%3Fitok%3Dh0giOe7Y",
        client:
          "Carla Carlsen",
          date:"2005-01-8",
          share:"Facebook,Twitter,YouTube",
      },
      {
        id: 3,
        desc: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
        img: "https://previews.123rf.com/images/kabvisio/kabvisio1204/kabvisio120400114/13285692-light-breakfast.jpg",
        client: "Kacper Fischer",
          date:"2011-11-18",
          share:"Facebook,Twitch,YouTube",
      },
      {
        id: 4,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "https://www.thespruceeats.com/thmb/bwmxNSsI_WVnNfj0I0tMYwzwgus=/1500x844/smart/filters:no_upscale()/hasbrown-cups-5833ad753df78c6f6a23857f.jpg",
        client:"Michael Kasparov",
          date:"2016-04-9",
          share:"Facebook,Twitter,YouTube",
      },
  ];
  

const desc = document.querySelector("#desc")
const client = document.querySelector("#client")
const date = document.querySelector("#date")
const share = document.querySelector("#share")
const img = document.querySelector("#person-img")
const first = document.querySelector(".first")
const second = document.querySelector(".second")
const title = document.querySelector(".title")

  let currentItem =0



 window.addEventListener("DOMContentLoaded",function () {
    showPerson(currentItem)
 })
        



  function showPerson(currentItem) {
    const change = reviews[currentItem];
    img.src = change.img;
    desc.textContent= change.desc;
    client.textContent= change.client;
    date.textContent = change.date
      
  }


  second.addEventListener("click",start)
  first.addEventListener("click",prev)

  function prev() {
    currentItem--
    if(currentItem<0){
      currentItem = reviews.length-1
    }
    showPerson(currentItem)

      
  }
  

  function start() {
    currentItem++
  if(currentItem>reviews.length-1){
    currentItem=0
  }
  showPerson(currentItem)
      
  }