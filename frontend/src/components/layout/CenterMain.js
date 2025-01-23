import React from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
import { Breadcrumb } from "antd";

export const Home = () => { 
    return (
        <div>
            <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Fluxograma</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export const UserLinks = () => {

    return (
        <div>
            <Breadcrumb >
            <Breadcrumb.Item>Usuários</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export const LoginLinks = () => {
    return (
        <div>
            <h1>Create Authentication</h1>
        </div>
    );
}

export const PlanningLinks = () => {
    return (
        <div>
            <h1>Planning</h1>
        </div>
    );
}

export const About = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}