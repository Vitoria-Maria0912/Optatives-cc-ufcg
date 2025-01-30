import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import { Breadcrumb } from "antd";
import "./style.css"
import Planning from "../Planning";

export const Home = () => { 
    return (
        <div>
            <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Fluxograma</Breadcrumb.Item>
            </Breadcrumb>
            <Planning/>
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