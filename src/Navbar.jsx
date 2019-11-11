import React, { Component } from 'react'
function Navbar (props) {
        return (
            <ul className="navbar-list">
                {props.myList.map((el)=>
                <a href="#"><li className={"navbar-item "+el.title}>
                    {el.title}
                    {el.subServices &&
                    <ul className="dropdown-list">
                       { el.subServices.map((x)=>
                        <a href="#">
                            <li className="dropdown-item">
                                {x}
                            </li>
                        </a>
                        )}
                    </ul>}
                </li></a>
        )}
        </ul>
        )
}

export default Navbar
