import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import './style.min.css';

class Footer extends Component{
    render(){
        return(
                <footer>
                    <div className="text-center text-white footer">
                        <section className="mb-4">
                            <div className=" d-flex justify-content-center">
                                <div className="pt-2 col-lg-8">
                                    <Logo />
                                    <p className="mt-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                        distinctio earum repellat quaerat voluptatibus placeat nam,
                                        commodi optio pariatur est quia magnam eum harum corrupti
                                        dicta, aliquam sequi voluptate quas.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="text-center mb-5">
                            <Link to="" className="text-white m-2">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="" className="text-white m-2">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                            <Link to="" className="text-white m-2">
                                <i className="fab fa-github"></i>
                            </Link>
                        </section>
                        <div className="text-center pb-3 copyright">
                            © 2020 Copyright: André Luciano
                        </div>
                    </div>
                </footer>
        );
    }
}

export default Footer;