import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API, graphqlOperation } from 'aws-amplify'

export default function App() {
  const [book, setBook] = React.useState<any>(null);

  const getBookByIdQuery = `
    query getBookById($id: ID!) {
      getBookById(bookId: $id) {
        author
        bookId
        createdAt
        description
        imageUrl
        price
        title
        updatedAt
      }
    }
  `;

  const handleGetBooks = async () => {
    const result = await API.graphql(graphqlOperation(getBookByIdQuery, {id: 'c2f24c86-5cc1-42cd-82c5-606c53d9b153'}));
    // @ts-ignore
    setBook(result?.data?.getBookById);
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={handleGetBooks}>Get Books</button>
          <button onClick={signOut}>Sign out</button>
          {book && <h1>{book.title}</h1>}
        </main>
      )}
    </Authenticator>
  );
}