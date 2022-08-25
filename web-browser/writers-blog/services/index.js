import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_WRITERSBLOG_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                  cursor
                    node {
                      author {
                        bio
                        name
                        id
                        photo {
                         url
                        }
                      }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
      
    `;
  const result = await request(graphqlAPI, query);

  return result = result.postsConnection.edges;
};



export const getSimilarPosts = async (categories, slug) => {
  const query = gpl`
    query GetPostDetails($slug: String!, $categories:[String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some:{ slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result = result.posts;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderby: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
   }
  `;
  const result = await request(graphqlAPI, query);
  return result = result.posts;
  //return result = result.RecentPosts;
};