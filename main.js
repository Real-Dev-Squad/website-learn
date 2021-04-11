const VideoList = {
  data() {
    return {
      videoList: [
        { 
          id: 0, 
          title: 'Getting started with VueJS', 
          source: 'https://www.youtube.com/embed/gdZH7Anh_6w',
          author: 'Someone'  
        },
        { 
          id: 1, 
          title: 'What even is components?',
          source: 'https://www.youtube.com/embed/FMl8vXPGqCI',
          author: 'Buddy' 
        },
        { 
          id: 2, 
          title: 'Was that an appropriate \'React\'ion?', 
          source:'https://www.youtube.com/embed/MhkGQAoc7bc',
          author: 'Someone\'s Buddy'  
        },
        { 
          id: 3, 
          title: 'What even is components?',
          source: 'https://www.youtube.com/embed/FMl8vXPGqCI',
          author: 'Buddy' 
        },
        { 
          id: 4, 
          title: 'Was that an appropriate \'React\'ion?', 
          source:'https://www.youtube.com/embed/MhkGQAoc7bc',
          author: 'Someone\'s Buddy'  
        },
        { 
          id: 5, 
          title: 'What even is components?',
          source: 'https://www.youtube.com/embed/FMl8vXPGqCI',
          author: 'Buddy' 
        },
        { 
          id: 6, 
          title: 'Was that an appropriate \'React\'ion?', 
          source:'https://www.youtube.com/embed/MhkGQAoc7bc',
          author: 'Someone\'s Buddy'  
        },
        { 
          id: 7, 
          title: 'What even is components?',
          source: 'https://www.youtube.com/embed/FMl8vXPGqCI',
          author: 'Buddy' 
        },
        { 
          id: 8, 
          title: 'Was that an appropriate \'React\'ion?', 
          source:'https://www.youtube.com/embed/MhkGQAoc7bc',
          author: 'Someone\'s Buddy'  
        }
      ],
      navbarItems: [
        {
          name: 'Home',
          src: 'https://www.realdevsquad.com',
        },
        {
          name: 'Welcome',
          src: 'https://welcome.realdevsquad.com',
        },
        {
          name: 'Events',
          src: 'https://www.realdevsquad.com/events.html',
        },
        {
          name: 'Members',
          src: 'https://members.realdevsquad.com',
        },
        {
          name: 'Crypto',
          src: 'https://crypto.realdevsquad.com',
        },
        {
          name: 'Status',
          src: 'https://status.realdevsquad.com',
        },
        {
          name: 'Learn',
          src: '#',
          active: true,
        },
      ],
    }
  }
}

const app = Vue.createApp(VideoList)

app.component('learning-video', {
  props: ['video'],
  template: `
  <div class="video-grid-item">
    <div>
      <iframe class="youtube-video" :src="video.source"></iframe>
    </div>
    {{ video.title }}
    <br>
    <i> <label> Author: </label> <b> {{ video.author }} </b> </i>
  </div>
  `
})      

app.component('navbar', {
  props: ['sites'],
  template: `
  <nav class="navbar">
    <ul class="navbar__unordered-list">
      <li class="navbar__list">
        <a href="/" class="navbar__hyper navbar__hyper--logo">
          <img class="navbar__logo" src="./assets/images/Real-Dev-Squad@1x.png" alt="Real Dev Squad">
        </a>
      </li>
      <navbar-item
        v-for="site in sites"
        :site="site"
      >
      </navbar-item>
    </ul>
  </nav>
  `
});

app.component('navbar-item', {
  props: ['site'],
  template: `
    <li class="navbar__list">
      <a class="navbar__hyper" 
         :href="site.src"
         :class="{ 'navbar__hyper--active': site.active }"
      >
         {{ site.name }}
      </a>
    </li>`,
});

app.mount('#learning-site-videos')          
