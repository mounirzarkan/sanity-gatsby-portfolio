export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d2bdcec713bf2aac22ae4d5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-p62mt7xf',
                  apiId: '7ff819aa-bb63-402e-bc9f-5fec3f4d9c02'
                },
                {
                  buildHookId: '5d2bdcec335fd9e450bdb238',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2ymvomjb',
                  apiId: '4d043681-13e4-43db-819f-037d135badc6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mounirzarkan/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2ymvomjb.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
