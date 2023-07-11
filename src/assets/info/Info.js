import self from '../img/mine.jpg';
import resume from '../img/resume.pdf';

import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Chien',
  lastName: 'Nguyen',
  initials: 'JS', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇻🇳',
      text: 'Based in the Ho Chi Minh city, VietNam',
    },
    {
      emoji: '💻',
      text: 'Full Stack Developer',
    },
    {
      emoji: '📧',
      text: 'chien.170901@gmail.com',
    },
  ],
  socials: [
    {
      link: resume,
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://www.instagram.com/cotchi_en/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/Cotchi666',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://www.facebook.com/cot.toxicff/',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
  ],
  bio: "Hello! I'm Nguyen Ngoc Chien. I'm a Full Stack Developer. I studied CompSci at Gia Dinh Uni, I enjoy building web applications and learning new technologies. I'm currently working at home as a freelance Full Stack Developer. I love to draw and play video games . I'm currently based in Ho Chi Minh city, VietNam.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['JavaScript', 'Java', 'C#', 'Python', 'HTML/CSS'],
    frameworks: [
      'React',
      'Redux',
      'Material UI',
      'Express',
      'Bootstrap/jQuery',
      'Asp.Net MVC/ Core',
      'Spring Boot (basic)',
      'Django (basic)',
    ],
    databases: ['MySQl', 'MongoDB', 'PostgreSQL', 'SQL Server'],
    cloudServices: ['Mongo Alias cloud', 'Render', 'Google Analytics', 'Heroku'],
    tools: [
      'Git',
      'GitLab',
      'Postman',
      'Docker (basic)',
      'Swagger',
      'npm',
      'yarn',
    ],
  },
  hobbies: [
    {
      label: 'Drawing',
      emoji: '🎨',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Drum',
      emoji: '🥁',
    },
    {
      label: 'Anime',
      emoji: '🎞',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Music',
      emoji: '🎸',
    },
    {
      label: 'Basketball',
      emoji: '🏀',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Netflix-Clone - Online Watching Movies platform based off of Netflix',
      live: 'https://client-hoy3.onrender.com', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/Cotchi666/netflix-mern-app.git.', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/netflix-la-gi-1.png',
    },
    {
      title: 'Mini Game(in progress)',
      live: null,
      source: 'https://github.com/Cotchi666',
      image: 'https://www.freecodecamp.org/news/content/images/2021/08/giphy.gif',
    },
  ],
};
