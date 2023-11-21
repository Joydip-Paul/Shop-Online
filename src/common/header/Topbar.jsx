import React from 'react'
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";

export const Topbar = () => {
    return (
        <>
            <Navbar fluid={true}>
                <Navbar.Container className="flex items-center justify-between">
                    <Navbar.Container className="flex items-center">
                        <Navbar.Brand>
                            <h2>Jhakanaka</h2>
                        </Navbar.Brand>
                        <Navbar.Divider></Navbar.Divider>
                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden items-center justify-between gap-8"
                        >
                            <Navbar.Link linkName="Home" />
                            <Navbar.Link linkName="Projects" />
                            <Navbar.Link linkName="About" />
                        </Navbar.Container>
                        <Navbar.Collapse collapseType="sidebar">
                            <Navbar.Container tag="ul" className="flex flex-col gap-5">
                                <Navbar.Link linkName="Home" />
                                <Navbar.Link linkName="Projects" />
                                <Navbar.Link linkName="Blogs" />
                                <Navbar.Link linkName="News" />
                                <Navbar.Link linkName="Resources" />
                            </Navbar.Container>
                        </Navbar.Collapse>
                    </Navbar.Container>

                    <Navbar.Container className="flex gap-2">
                        <Button size="sm" type="link">
                            <span>
                                <MagnifyingGlass size={20} color="#444" />
                            </span>
                            <span className="ml-2 text-metal-600">Search</span>
                        </Button>
                        <Button size="sm" type="primary">
                            Login
                        </Button>
                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </>
    )
}
export default Topbar;