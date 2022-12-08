import { Flex, Text, Button, Link as StyledLink } from "rebass/styled-components"
import { Link } from "react-router-dom"
import { useMutation, useQueryClient } from "react-query"
import { removeBook } from "../api"


export const BookItem = ({author,title,id}) => {

    const  {mutateAsync,Isloadin} = useMutation(removeBook)
    const queryClient = useQueryClient();


    const remove = async () => {
        await mutateAsync(id);
        queryClient.invalidateQueries('books');
        
    }
    return (
        <Flex p={3} width='100%' alignItems="center">
            <Link component={StyledLink}  to={`/update-book/${id}`} style={{marginRight : 'auto' }}> {title}</Link>
          <Text>{author}</Text>
        <Button  style={{cursor : 'pointer'}} onClick={remove} ml={5}>
       remove

        </Button>

        </Flex>
    )

}