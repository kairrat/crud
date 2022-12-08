import { useQuery,useMutation } from "react-query";
import { useParams,useNavigate} from "react-router-dom"
import { Box, Heading,Flex} from "rebass/styled-components";
import {  getBook ,updatebook} from '../api'
import { Bookform } from "../shared/bookform";
import { Container } from "../shared/container";

export const UpdateBook = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data, error, isLoading, isError } = useQuery(["book", { id }], getBook);
    const { mutateAsync, isLoading: isMutating } = useMutation(updatebook)
  
    const onFormSubmit = async (formData) => {
      await mutateAsync({...formData, id})
      navigate("/")
    }
  
    if (isLoading) {
      return (
        <Container>
          <Flex py="5" justifyContent="center">
          </Flex>
        </Container>
      );
    }
  
    if (isError) {
      return (
        <Container>
          <Flex py="5" justifyContent="center">
            Error: {error.message}
          </Flex>
        </Container>
      );
    }
  
    return (
      <Container>
        <Box
          sx={{
            py: 3,
          }}
        >
          <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
          <Bookform defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating}/>
        </Box>
      </Container>
    );
  };