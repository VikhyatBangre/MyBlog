import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";
// import { loadAllCategories } from "../Services/category-service";

import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
const AddPost = () => {
  // useEffect(
  //     ()=>{
  //         loadAllCategories().then((data)=>{
  //             console.log(data)
  //         }).catch(error=>{
  //             console.log(error);
  //         })
  //     },
  //     []
  // )

  const editor = useRef(null);
  const [content, setContent] = useState("");
  // const [categories, setCategories] = useState('')

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  // field change funtion
  const fieldChange = (event) => {
    // console.log(event);
    // console.log(event.target.name);
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const fieldChange2 = (data) => {
    setPost({ ...post, content: data });
  };

  // create post fuction
  const createPost = (event) => {
    event.preventDefault();
    console.log(post);

    if (post.title.trim() === "") {
      alert("Title is required");
      return;
    }
    if (post.content.trim() === "") {
      alert("Content is required");
      return;
    }
    if (post.categoryId.trim() === "") {
      alert("Select any Category");
      return;
    }
    alert("Post created");

    // submitting the on server
    // import {createPost as doCreatePost} from '../Services/post-services';
    // doCreatePost(post).then(data=>{
    //   alert("post created")
    // }).catch((error)=>{
    //   alert("error")
    //   console.log(error);
    // })
  };

  return (
    <Container>
      <div className="wrapper my-4">
        <Card className="shadow" color="dark" inverse>
          <CardBody>
            {JSON.stringify(post)}
            <Form onSubmit={createPost}>
              <div className="my-4">
                <Label for="title">Post title</Label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Enter here"
                  name="title"
                  onChange={fieldChange}
                />
              </div>
              <div className="my-4">
                <Label for="content">Post Content</Label>
                {/* <Input type="textarea" id="content" placeholder="Enter here" style={{minHeight:'100px'}}/> */}
                {/* <JoditEditor ref={editor} value={content} onChange={newContent=>setContent(newContent)} /> */}
                <JoditEditor ref={editor} value={content} onChange={fieldChange2} />
              </div>
              <div className="my-4">
                <Label for="category">Post Category</Label>
                <Input
                  type="select"
                  id="category"
                  placeholder="Select category"
                  name="categoryId"
                  onChange={fieldChange}
                  defaultValue={0}
                >
                  <option disabled selected value={0}>
                    --select category--
                  </option>
                  <option>Programming</option>
                  <option>Bollywood</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                </Input>
              </div>
              <Container className="text-center">
                <Button color="primary" type="submit">
                  Create Post
                </Button>
                <Button className="ms-3" color="danger" type="reset">
                  Reset Content
                </Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default AddPost;
