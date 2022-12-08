import { Bookform, Container } from "../shared"
import { Box,Heading } from "rebass/styled-components"
import { useMutation } from "react-query"
import { createbook } from "../api"
import { useNavigate } from "react-router-dom"


export const CreateBook = () => {
    const navigate = useNavigate()
    const { mutateAsync, isLoading } = useMutation(createbook)
  
    const onFormSubmit = async (data) => {
      await mutateAsync({...data})
      navigate('/')
    }
    return (
      <Container>
        <Box
          sx={{
            py: 3,
          }}
        >
          <Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
          <Bookform onFormSubmit={onFormSubmit} isLoading={isLoading}/>
        </Box>
      </Container>
    );
  };