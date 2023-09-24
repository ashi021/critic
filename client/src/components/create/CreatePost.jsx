import { useState, useEffect, useContext } from 'react';


import { Box, styled, FormControl, InputBase, Button , TextareaAutosize} from '@mui/material';
import { AddCircle as Add }from '@mui/icons-material';

import { useLocation } from 'react-router-dom';

import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';


const Container = styled(Box)`
    margin: 50px 100px,

`

const Image = styled('img')({
    width:'100%',
    height: '50vh',
    objectFit: 'cover',
})

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;

`;

const TextArea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 18px;
    border: none;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()

}


const CreatePost = () => {

    const image = post.picture ? post.picture : 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');

    const { account } = useContext(DataContext);

    const location = useLocation();

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                //API CALL
                const response = await API.uploadFile(data);
                post.picture= response.data ; 
            }

        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])

    const handleChange =(e) => {
        setPost({ ...post, [e.target.name]: e.target.value});
    }
    
    return (
        <Container>
            <Image src={image} alt="moviePoster"/>

            <StyledFormControl>
            <label htmlFor="fileInput">
                <Add fontSize="large" color="action"/>
            </label>
            <input type="file"
            id="fileinput"
            style={{display: 'none'}}
            onChangeCapture={(e) => setFile(e.target.files[0])}
             />

             <InputTextField placeholder='Title' onChange={(e) => handleChange(e)} name="title"/>
             <Button varient="contained">Publish</Button>

            </StyledFormControl>

            <TextArea
                minRows={5}
                placeholder='Tell your story...'

            />
        </Container>
    )


}

export default CreatePost;