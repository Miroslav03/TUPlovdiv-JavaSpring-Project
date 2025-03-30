import React from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { industryCategories } from "../shared/constants/categories";

export default function Navbar() {
    const { isAuthenticated, name, title, logout, isClient, isFreelancer, id  } =
        useAuthContext();

    return (
        <div className="navbar bg-main-background-color hover:bg-[#eaeaea] transition-all">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost hidden sm:flex"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-main-text-color border-main-yellow-color border-[2px] rounded-sm z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        {(isClient || isClient) && (
                            <li>
                                <details>
                                    <summary>
                                        <Link to="/find/all/freelancer">Find Talent</Link>
                                    </summary>
                                    <ul className="p-2 rounded-sm bg-main-text-color text-white">
                                        {Object.values(industryCategories).map(
                                            (category, index) => (
                                                <option
                                                    key={index}
                                                    value={category}
                                                >
                                                    <Link
                                                        to={`/find/all/freelancer/${category}`}
                                                    >
                                                        <li className="hover:bg-main-text-color transition-all">
                                                            <a>{category}</a>
                                                        </li>
                                                    </Link>
                                                </option>
                                            )
                                        )}
                                    </ul>
                                </details>
                            </li>
                        )}
                        {(isFreelancer || isClient) && (
                            <li>
                                <details>
                                    <summary>
                                        <Link to="/find/all/client">Find Job</Link>
                                    </summary>
                                    <ul className="p-2 rounded-sm bg-main-text-color text-white">
                                        {Object.values(industryCategories).map(
                                            (category, index) => (
                                                <option
                                                    key={index}
                                                    value={category}
                                                >
                                                    <Link
                                                        to={`/find/all/client/${category}`}
                                                    >
                                                        <li className="hover:bg-main-text-color transition-all">
                                                            <a>{category}</a>
                                                        </li>
                                                    </Link>
                                                </option>
                                            )
                                        )}
                                    </ul>
                                </details>
                            </li>
                        )}
                        <li>
                            <details>
                                <summary>
                                    <Link to="/catalog">Catalog</Link>
                                </summary>
                                <ul className="p-2 rounded-sm bg-main-text-color text-white">
                                    {Object.values(industryCategories).map(
                                        (category, index) => (
                                            <option
                                                key={index}
                                                value={category}
                                            >
                                                <Link
                                                    to={`/catalog/all/${category}`}
                                                >
                                                    <li className="hover:bg-main-text-color transition-all">
                                                        <a>{category}</a>
                                                    </li>
                                                </Link>
                                            </option>
                                        )
                                    )}
                                </ul>
                            </details>
                        </li>
                        {isClient && (
                            <li>
                                <Link to={`/create/offer/client`}>
                                    New Job Listing
                                </Link>
                            </li>
                        )}
                        {isFreelancer && (
                            <li>
                                <Link to={`/create/offer/freelancer`}>
                                    New Offer
                                </Link>
                            </li>
                        )}
                        {isClient && (
                            <li>
                                <Link to={`/profile/client/${id}`}>
                                    Profile
                                </Link>
                            </li>
                        )}
                        {isFreelancer && (
                            <li>
                                <Link to={`/profile/freelancer/${id}`}>
                                    Profile
                                </Link>
                            </li>
                        )}
                        <li onClick={logout}>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
                <Link
                    to="/"
                    className="btn btn-ghost text-3xl text-main-text-color"
                >
                    SkillFind
                </Link>
            </div>
            <div className="navbar-center flex sm:hidden">
                <ul className="menu menu-horizontal px-1 text-main-text-color font-semibold">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {(isClient || isFreelancer) && (
                        <li>
                            <details>
                                <summary>
                                    <Link to="/find/all/freelancer">Find Talent</Link>
                                </summary>
                                <ul className="p-2 rounded-sm bg-main-yellow-color text-white">
                                    {Object.values(industryCategories).map(
                                        (category, index) => (
                                            <option
                                                key={index}
                                                value={category}
                                            >
                                                <Link
                                                    to={`/find/all/freelancer/${category}`}
                                                >
                                                    <li className="hover:bg-main-text-color transition-all">
                                                        <a>{category}</a>
                                                    </li>
                                                </Link>
                                            </option>
                                        )
                                    )}
                                </ul>
                            </details>
                        </li>
                    )}
                    {(isClient || isFreelancer) && (
                        <li>
                            <details>
                                <summary>
                                    <Link to="/find/all/client">Find Job</Link>
                                </summary>
                                <ul className="p-2 rounded-sm bg-main-yellow-color text-white">
                                    {Object.values(industryCategories).map(
                                        (category, index) => (
                                            <option
                                                key={index}
                                                value={category}
                                            >
                                                <Link
                                                    to={`/find/all/client/${category}`}
                                                >
                                                    <li className="hover:bg-main-text-color transition-all">
                                                        <a>{category}</a>
                                                    </li>
                                                </Link>
                                            </option>
                                        )
                                    )}
                                </ul>
                            </details>
                        </li>
                    )}
                    <li>
                        <details>
                            <summary>
                                <Link to="/catalog">Catalog</Link>
                            </summary>
                            <ul className="p-2 rounded-sm bg-main-yellow-color text-white">
                                {Object.values(industryCategories).map(
                                    (category, index) => (
                                        <option key={index} value={category}>
                                            <Link
                                                to={`/catalog/all/${category}`}
                                            >
                                                <li className="hover:bg-main-text-color transition-all">
                                                    <a>{category}</a>
                                                </li>
                                            </Link>
                                        </option>
                                    )
                                )}
                            </ul>
                        </details>
                    </li>
                    {isClient && (
                        <li>
                            <Link to={`/create/offer/client`}>
                                New Job Listing
                            </Link>
                        </li>
                    )}
                    {isFreelancer && (
                        <li>
                            <Link to={`/create/offer/freelancer`}>
                                New Offer
                            </Link>
                        </li>
                    )}
                    {isClient && (
                        <li>
                            <Link to={`/profile/client/${id}`}>Profile</Link>
                        </li>
                    )}
                    {isFreelancer && (
                        <li>
                            <Link to={`/profile/freelancer/${id}`}>
                                Profile
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="navbar-end flex gap-2 items-center">
                {!isAuthenticated && (
                    <>
                        <Link to="/auth/login">
                            <Button label={"Log In"} px="px-4" py="py-2" />
                        </Link>
                        <Link to="/choose/register">
                            <Button label={"Register"} px="px-4" py="py-2" />
                        </Link>
                    </>
                )}
                {isAuthenticated && (
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center sm:pr-6">
                            <h3 className="text-main-text-color text-md font-bold sm:text-sm">
                                {name}
                            </h3>
                            <p className="text-main-yellow-color text-sm font-semibold sm:text-sm">
                                {title}
                            </p>
                        </div>
                        <div onClick={logout} className="sm:hidden">
                            <Button label={"Log out"} px="px-4" py="py-2" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
