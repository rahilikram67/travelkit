import i18next from 'i18next';
import Experience from './Experience';
import CreateExperience from './CreateExperience';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const ExperienceConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        toolbar: {
          display:false
        }

      },
    },
  },
  routes: [
    {
      path: 'experience',
      element: <Experience />,
    },
    {
      path: '/createExp',
      element: <CreateExperience />,
    }
  ],
};

export default ExperienceConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';
const Example = React.lazy(() => import('./Example'));

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : 'example',
            element: <Example/>
        }
    ]
};

export default ExampleConfig;

*/
