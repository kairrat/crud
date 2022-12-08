import { Flex } from "rebass/styled-components";
import { Container } from "../shared/container";
import { useQuery } from "react-query";
import { getAllBooks } from "../api";
import { BookItem } from "./bookitem";

export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Container>
      <Flex margin='0 auto' flexDirection="column" alignItems="center">
        {data.map(({ author, title, id }) => (
    <BookItem author={author}  title={title} key={id} id={id}/>
  

        ))}
      </Flex>
    </Container>
  );
};