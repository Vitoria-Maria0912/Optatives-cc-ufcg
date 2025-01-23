import React from "react";
// import { Route, Routes } from "react-router-dom";
import { Breadcrumb } from "antd";
import "./style.css"

export const Home = () => { 
    return (
        <div>
            <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Fluxograma</Breadcrumb.Item>
            </Breadcrumb>
            <div className="planning">
                <div className="period">
                    <div className="card">
                        <h3 className="title">P1</h3>
                    </div>
                    <div className="card">
                        <h3 className="title">LP1</h3>
                    </div>
                </div>
                <div className="period">
                    <div className="card">
                        <h3 className="title">P1</h3>
                    </div>
                    <div className="card">
                        <h3 className="title">LP1</h3>
                    </div>
                </div>
                <div className="period">
                    <div className="card">
                        <h3 className="title">P1</h3>
                    </div>
                    <div className="card">
                        <h3 className="title">LP1</h3>
                    </div>
                </div>
                <div className="period">
                    <div className="card">
                        <h3 className="title">P1</h3>
                    </div>
                    <div className="card">
                        <h3 className="title">LP1</h3>
                    </div>
                </div>
                <div className="period">
                    <div className="card">
                        <h3 className="title">P1</h3>
                    </div>
                    <div className="card">
                        <h3 className="title">LP1</h3>
                    </div>
                </div>
                <div className="period">
                    <div className="card">
                        <h3 className="title">P1</h3>
                    </div>
                    <div className="card">
                        <h3 className="title">LP1</h3>
                    </div>
                </div>
            </div>
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