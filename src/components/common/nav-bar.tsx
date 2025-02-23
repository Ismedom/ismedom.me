
import React from "react";
import { Dock, DockIcon } from "../magicui/dock";
import { HomeIcon, InboxStackIcon, } from "@heroicons/react/24/outline";
import { Facebook, Github } from "lucide-react";
import { Link } from "react-router-dom";




export type IconProps = React.HTMLAttributes<SVGElement>;

function NavBar() {
    return (
        <div className="relative">
            <Dock direction="middle" className="hover:shadow-md border-none text-gray-400 hover:text-gray-300">
                <Link to="/">
                    <DockIcon>
                        <HomeIcon />
                    </DockIcon>
                </Link>
                <DockIcon>
                    <Github />
                </DockIcon>
                <Link to="/projects">
                    <DockIcon>
                        <InboxStackIcon />
                    </DockIcon>
                </Link>

                <DockIcon>
                    <Facebook />
                </DockIcon>
            </Dock>
        </div >
    );
}




export default NavBar;