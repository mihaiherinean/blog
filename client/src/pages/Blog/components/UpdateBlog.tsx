import { Button, Group, Text, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'
import { useUpdateBlogMutation } from '../../../hooks/useUpdateBlogMutation'

import { IBlog } from '../../../types/IBlog'


interface IUpdateBlogProp{
    blog: IBlog
}

function UpdateBlog({blog}:IUpdateBlogProp) {
    const {isLoading, mutate: updateBlog, data} = useUpdateBlogMutation()
    const form = useForm({
        validateInputOnBlur: true,
        initialValues: {
            title: `${blog.title}`,
            image: `${blog.image}`,
            content: `${blog.content}`,
            short_description: `${blog.short_description}`,
        },
        validate: {
            title: (value) => (value.length < 10 || value.length > 50 ? 'Titlu este prea scurt sau prea lung' : null),
            content: (value) => (value.length < 15) ? 'Continutul este prea scurt' : null,
            short_description: (value) => (value.length > 100) ? 'Descrierea este prea lunga': null 
        }
    }
    )
    const handleSubmit = async (values: typeof form.values) => {
            const {...rest} = values;
            updateBlog({
                ...rest,
                id: blog._id,
                category: blog.category,
               
            },   
            )
           
    }
  return (
    <>
    {data && <Text color="green.5">You succesfully update the product</Text>}
    <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
        <TextInput
          withAsterisk
          label="Title"
          {...form.getInputProps('title')}
        />
        <TextInput
          withAsterisk
          label="Image"
          {...form.getInputProps('image')}
        />
        <TextInput
          withAsterisk
          label="Scurta descriere"
          {...form.getInputProps('short_description')}
        />
        <Textarea
          withAsterisk
          label="Continut"
          {...form.getInputProps('content')}
          autosize
          maxRows={10}
          minRows={2}
        />

        <Group mt={10}>
          <Button type="submit" loading={isLoading}>Submit</Button>
          </Group>
      </form>
      </>
  )
}

export default UpdateBlog