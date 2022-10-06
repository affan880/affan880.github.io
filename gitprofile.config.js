// gitprofile.config.js

const config = {
  github: {
    username: 'affan880', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Algo-Phantoms-Frontend', 'TrackPad', 'Funscape','star_book']
    },
  },
  social: {
    linkedin: 'syed-affan',
    // twitter: 'arif_szn',
    // facebook: '',
    // instagram: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    website: 'https://affan880.github.io',
    phone: '+919133297438',
    email: 'syedaffan880@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/u/0/uc?id=1JdcwNCgJg8T9X-Zi77KZF7Zq-DtLRLf4&export=download', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'React Native',
    'redux',
    'Node.js',
    'Nest.js',
    'Git',
    'CSS',
    'Tailwind',
    'Bootstrap'
  ],
  // experiences: [
  //   {
  //     company: 'Monstarlab Bangladesh',
  //     position: 'Backend Engineer II',
  //     from: 'September 2021',
  //     to: 'Present',
  //   },
  //   {
  //     company: 'My Offer 360 Degree',
  //     position: 'Web Application Developer',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //   },
  // ],
  education: [
    {
      institution: 'Nawab Shah Alam Khan College of Engineering and Technology',
      degree: 'Bachelor of Engineering - Information Technology',
      from: 'August 2019',
      to: 'June 2023',
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate MPC',
      from: 'June 2017',
      to: 'April 2019',
    },
    {
      institution: 'Vignan’s Prabodhananda Prashanti Niketan Ghatkesar',
      degree: 'Board CBSE',
      from: '2016',
      to: '2017',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 3, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  //   id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
  // },
  // hotjar: {
  //   id: '2617601', //  Please remove this and use your own id or keep it empty
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
