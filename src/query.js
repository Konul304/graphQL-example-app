import { useQuery, gql } from '@apollo/client';

export const GET_BOOKS = gql`
query GetBooks {
  books{
  id
  name
  email
  address{
    city
  }
   posts {
      id
      title
      content
    }
  
}
}
`;

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <ul>
      {data.books.map(({ id, name, email, address, posts }) => (
        <li key={id}>
          <strong>{name}</strong> {email}
          {/* <li>{posts}</li> */}
          <li>{address.city}</li>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong> {post.content}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default BookList;