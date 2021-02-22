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
      ]
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

app.mount('#learning-site-videos')          
