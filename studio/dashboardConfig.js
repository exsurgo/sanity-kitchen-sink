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
                  buildHookId: '633a6aaef001e37cce931572',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rge2n1az',
                  apiId: '41bebfdb-19b6-4c89-b610-e60da11687b9'
                },
                {
                  buildHookId: '633a6aaf0f3c387cad5afaf1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ye9qhxjt',
                  apiId: 'bb1fcb66-1855-4d3d-b19b-f3fcafb095b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/exsurgo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ye9qhxjt.netlify.app', category: 'apps'}
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
