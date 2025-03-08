
import React from "react";
import { Dock, DockIcon } from "../magicui/dock";
import { Facebook, Github, Home } from "lucide-react";
import { Link } from "react-router-dom";




export type IconProps = React.HTMLAttributes<SVGElement>;

function NavBar() {
    return (
        <div className="relative">
            <Dock direction="middle" className="hover:shadow-md border-none text-gray-400 hover:text-gray-300">
                {/* <Link className="text-gray-400" to='https://github.com/Ismedom' >
                    <DockIcon>
                        <Home />
                    </DockIcon>
                </Link> */}
                <Link className="text-gray-400" to='https://github.com/Ismedom' target="_blank">
                    <DockIcon>
                        <Github />
                    </DockIcon>
                </Link>
                {/* <Link className="text-gray-400" to="/projects">
                    <DockIcon>
                        <InboxStackIcon />
                    </DockIcon>
                </Link> */}
                <Link className="text-gray-400" target="_blank" to="https://www.facebook.com/share/1ALj2MYe6q/?mibextid=wwXIfr">
                    <DockIcon>
                        <Facebook />
                    </DockIcon>
                </Link>

            </Dock>
        </div >
    );
}




export default NavBar;