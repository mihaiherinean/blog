import { Button, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form'
import React from 'react'
import { useCreateBlogMutation } from '../../../hooks/useCreateBlogMutation'
import { ICreateBlog } from '../../../types/ICreateBlog';

interface ICreateBlogProp {
    category: string | undefined,
}
function CreateBlog({category}:ICreateBlogProp) {
    const {isLoading, mutate: createBlog, data} = useCreateBlogMutation();
    const form = useForm({
        validateInputOnBlur: true,
        initialValues: {
            title: '',
            image: '',
            content:'',
            category: `${category}`,
            short_description: '',
        },
        validate:{
            title: (value) => (value.length < 10 || value.length > 50 ? 'Titlu trebuie sa aiba intre 10-50 caractere' : null),
            content: (value) => (value.length < 15) ? 'Continutul trebuie sa fie mai mare de 15 caractere' : null,
            short_description: (value) => (value.length < 10 || value.length > 100) ? 'Descrierea trebuie sa aiba intre 10-100 de caractere': null,
            image: (value) => (value.length < 1) ? 'Introdu un URL pentru imagine' : null,
        }
    })

    const handleSubmit = async (values:ICreateBlog) => {
        const { title, image, content, category, short_description } = values;
        console.log(category);
        console.log(values);
        createBlog(
          {
            title, image, content, short_description, category
          },
        );

      };

  return (
    <>
    {data ? <Text color='green'>You create with success a new blog</Text> : ''}
    <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
        <TextInput
          withAsterisk
          label="Titlul"
          placeholder="Titlul blogului"
          {...form.getInputProps('title')}
        />
        <TextInput
          withAsterisk
          label="URL Imagine"
          placeholder="URL Imagine"
          {...form.getInputProps('image')}
        />
        <TextInput
          withAsterisk
          label="Scurta descriere"
          placeholder="Scurta descriere"
          {...form.getInputProps('short_description')}
        />
        <Textarea
          withAsterisk
          label="Continutul blogului"
          placeholder="Continutul blogului"
          {...form.getInputProps('content')}
          autosize
          minRows={2}
          maxRows={10}
        />
        <TextInput
          withAsterisk
          label="Categoria blogului"
          {...form.getInputProps('category')}
          readOnly
        />
          <Button type="submit" style={{marginTop:'10px'}} loading={isLoading}>Submit</Button>
        
      </form>
    
    </>
  )
}

export default CreateBlog