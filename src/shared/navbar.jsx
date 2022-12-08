import { Flex,Box,Link as StyledLink, Image } from "rebass/styled-components";
import {  Link  } from 'react-router-dom'
import { Container  } from "./container";
import { useMutation, UseQueryClient } from "react-query";


export const Navbar = () => {


    return (
        <Flex bg="black" color='white' justifyContent='center'>
            <Container>
            <Flex px={2}  height='10vh' width='100%' alignItems='center'>
            <Link component={StyledLink} variant='nav' style={{color : 'white', textDecoration : 'none' }}  to='/' >
                React Query Crud
            </Link>
            <Box mx='auto'/>
            <Link  component={StyledLink} variant='nav' style={{color : 'white', textDecoration : 'none' }}  to='/create-book' >
                add new book
            </Link>
        
            </Flex>
            </Container>
        </Flex>

    )
}