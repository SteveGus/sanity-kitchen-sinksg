export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6259a2e52adf17006574f59e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sinksg-studio',
                  apiId: '15060c86-c406-42f4-9438-d0f1e807b934'
                },
                {
                  buildHookId: '6259a2e5ff4ab200bb58ab1b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sinksg',
                  apiId: '7f763d92-c3ad-492a-8159-c56bb7951ad2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SteveGus/sanity-kitchen-sinksg',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sinksg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
