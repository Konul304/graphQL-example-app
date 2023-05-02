import { useQuery, gql } from '@apollo/client';

export const GET_BOOKS = gql`
query GetBooks {
  books {
    id
    firstName
    lastName
  }
}
`;

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <ul>
    {data.books.map(({ id, firstName, lastName }) => (
      <li key={id}>
        <strong>{firstName}</strong> {lastName}
      </li>
    ))}
  </ul>
  );
}

export default BookList;