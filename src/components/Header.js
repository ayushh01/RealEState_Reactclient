import React , { Component } from 'react';
import { Navbar, NavbarBrand ,Nav , NavbarToggler , Collapse , NavItem ,  Jumbotron , Button , Modal , Row, Col, ModalHeader ,ModalBody , Form , FormGroup , Input ,Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';  


const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);


class Header extends Component {

    constructor(props){
        super(props);

        this.state={
            isNavOpen: false,
            isModalOpen:false,
            isModalOpenn:false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModall = this.toggleModall.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    toggleModall(){
        this.setState({
            isModalOpenn:!this.state.isModalOpenn
        });
    }

    handleLogin(event){
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();
    }

    handleSignup(values){
        this.toggleModall();
        this.props.SignupUser(values.firstname , values.lastname , values.username , values.password);
    }

    handleLogout() {
        this.props.logoutUser();
    }

    render() {
        return(
            <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">Real E State</NavbarBrand>
                    <Collapse  isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span>Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span>About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/properties">
                                <span className="fa fa-list fa-lg"></span> Buy
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card fa-lg"></span>Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                    <div>
                                        <Button outline onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        <Button outline onClick={this.toggleModall}>
                                        <span className="fa fa-sign-up fa-lg"></span> Signup
                                        {this.props.auth.isFetching ?
                                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                            : null
                                        }
                                    </Button>
                                    </div>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                    }

                                </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Real E State</h1>
                            <p>We work for you to bring your dream house to you</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isModalOpenn} toggle={this.toggleModall}>
                    <ModalHeader toggle={this.toggleModall}>Signup</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSignup(values)}>
                                <Row  className="form-group">
                                    <Label for="firstname" md={6}>Firstname</Label>
                                    <Control.text model=".firstname" id="firstname" name="firstname" className="form-control"  validators={{ required }}/>
                                    <Errors className="text-danger" model=".firstname" show="touched" messages={{ required: 'Required' }} />
                                </Row>
                                <Row  className="form-group">
                                    <Label for="lastname" md={10}>Lastname</Label>
                                    <Control.text model=".lastname" id="lastname" name="lastname" className="form-control" validators={{ required }}/>
                                    <Errors className="text-danger" model=".lastname" show="touched" messages={{ required: 'Required' }} />
                                </Row>
                                <Row  className="form-group">
                                    <Label for="username" md={10}>Username</Label>
                                    <Control.text model=".username" id="username" name="username" className="form-control" validators={{ required }}/>
                                    <Errors className="text-danger" model=".username" show="touched" messages={{ required: 'Required' }} />
                                </Row>
                                <Row  className="form-group">
                                    <Label for="password" md={10}>Password</Label>
                                    <Control.password model=".password" id="password" name="password" className="form-control" validators={{ required }}/>
                                    <Errors className="text-danger" model=".password" show="touched" messages={{ required: 'Required' }} />
                                </Row>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Header;