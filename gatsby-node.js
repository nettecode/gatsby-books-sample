const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const bookTemplate = path.resolve('src/templates/bookTemplate.js');

  return graphql(`
    {
        allBook {
          nodes {
            title
            author {
              name
            }
            id
            summary
          }
        }
      }
    `).then((res) => {
    if (res.errors) {

    }

    res.data.allBook.nodes.forEach(book => {
      createPage({
        path: `/book/${book.id}`,
        component: bookTemplate,
        context: book
      });
    });
  });
}