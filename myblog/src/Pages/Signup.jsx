import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  // const [error, setError] = useState({
  //   errors: {},
  //   isError: false,
  // });

  useEffect(() => {
    return () => {
      console.log(data);
    };
  }, [data]);

  const handleChange = (event, property) => {
    // console.log("name changed");
    // console.log(event.target.value);

    setData({ ...data, [property]: event.target.value });
  };

  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  //Submit the form
  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);

    //data validation

    //call api for sending the data
    
  };

  return (
    <div>
      <Container>
        <Row className="mt-4">
        {/* { JSON.stringify(data) } */}
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader style={{ backgroundColor: "black", color: "yellow" }}>
                Fill information to register !!
              </CardHeader>

              <CardBody>
                <Form onClick={submitForm}>
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Enter email</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="about">About Yourself</Label>
                    <Input
                      type="text-area"
                      placeholder="Enter here"
                      id="about"
                      style={{ minHeight: "200px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.value}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="danger" outline>
                      Register
                    </Button>
                    <Button
                      color="secondary"
                      className="ms-2"
                      type="reset"
                      outline
                      onClick={resetData}
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
