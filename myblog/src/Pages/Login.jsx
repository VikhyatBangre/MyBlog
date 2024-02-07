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

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
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

  //resetting the data
  const resetData = () => {
    setData({
      email: "",
      password: "",
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
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader style={{ backgroundColor: "black", color: "yellow" }}>
                Login here !!
              </CardHeader>

              <CardBody>
                <Form onSubmit={submitForm}>
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
                  <Container className="text-center">
                    <Button color="danger">Login</Button>
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

export default Login;
