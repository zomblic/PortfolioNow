import 'bootstrap/dist/css/bootstrap.min.css';
import "./Resume.css";
import React from 'react';


export default function Resume() {
    return (
        <section>
            <h2> Attempted Proficiencies </h2>
            <ul>
                <li> HTML </li>
                <li> CSS </li>
                <li> Javascript </li>
                <li> React </li>
                <li> PostgresSQL </li>
                <li> Github </li>
                <li> Git Bash </li>
                <li>Prompt Engineering</li>
            </ul>
            <h2> Skills </h2>
            <ul>
            <li> VS Code </li>
            </ul>
            <a href="./src/resume.pdf" download="resume.pdf"> Download Resume </a>
        </section>
    );
};