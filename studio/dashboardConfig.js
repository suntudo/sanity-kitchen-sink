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
                  buildHookId: '60f504973d0afb7ef11a557f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-syjvbbou',
                  apiId: '844245ae-5e8f-43b9-bfa3-8c63ef57e211'
                },
                {
                  buildHookId: '60f50497dbe39887792bbf69',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3tdbxq3g',
                  apiId: 'fdef75a8-e428-4d8f-91fb-638dd367fd83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suntudo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3tdbxq3g.netlify.app', category: 'apps'}
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
