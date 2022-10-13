import { Button, Center, Grid, Loader, Modal, Text } from "@mantine/core";
import React, { useState } from "react";
import BlogCard from "./components/BlogCard";
import { createStyles } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useBlogsQuery } from "../../hooks/useBlogsQuery";
import CreateBlog from "./components/CreateBlog";

const useStyles = createStyles((theme) => ({
  card: {
    "&:hover": {
      opacity: "0.5",
    },
  },
}));
function Blogs() {
  const { classes } = useStyles();
  const { category } = useParams();
  const [opened, setOpened] = useState(false);
  const { data: blogs, isError, isLoading } = useBlogsQuery(category || "");

  if (isLoading || !blogs) {
    return <Center><Loader /></Center>
  }
  if (isError) {
    return <Center><Text color="red">An error has occured</Text></Center>;
  }
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Posteaza blog"
        
      >
        <CreateBlog category={category} />
      </Modal>

      <Button onClick={() => setOpened(true)} style={{ marginBottom: "15px" }}>
        Blog nou
      </Button>

      <Grid>
        {blogs.map((blog) => (
          <Grid.Col span={12} className={classes.card} key={blog._id}>
            <BlogCard blog={blog} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}

export default Blogs;
