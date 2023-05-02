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
    <div>
      {data.books.map(({ id, name, email, address, posts }) => (
        <ul key={id}>
          <strong>{name}</strong> {email}
          {/* <li>{posts}</li> */}
          <li>{address.city}</li>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> {post.content}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default BookList;