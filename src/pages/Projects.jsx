import MealMuseLogo from '../assets/images/MealMuseLogo.png';
import car from '../assets/images/car.png';
import employee from '../assets/images/employee.png';
import weather from '../assets/images/weather.png';
import placeholder from '../assets/images/placeholder.jpg';
import generator from '../assets/images/generator.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Project.css";

export default function Projects() {
    return (
        <div className="container py-5 text-neon-green bg-black">
            <h1 className="text-center display-4 glitch-text">Projects</h1>
            <div className="row g-4 mt-4">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                        <div className="card bg-dark border-neon shadow-lg">
                            <div className="card-body text-center">
                                <h2 className="card-title glitch-text">{project.title}</h2>
                                <a href={project.link} className="d-block overflow-hidden rounded">
                                    <img src={project.image} alt={`${project.title} Screenshot`} className="img-fluid project-img" />
                                </a>
                                <p className="card-text mt-3">{project.description}</p>
                                {project.repo && (
                                    <a href={project.repo} className="btn btn-secondary m-2">View Repo</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const projects = [
    {
        title: "Read Me Generator",
        link: "https://github.com/zomblic/PICKME-README-GENERATOR",
        image: generator,
        repo: "https://github.com/zomblic/PICKME-README-GENERATOR",
        description: "A read me generator that helps you create project documentation effortlessly."
    },
    {
        title: "VROOM-VROOM",
        link: "https://github.com/zomblic/MAKING-VROOM-VROOMS",
        image: car,
        repo: "https://github.com/zomblic/MAKING-VROOM-VROOMS",
        description: "A vehicle management system for tracking, adding, and updating vehicles."
    },
    {
        title: "GuessWho-EmployeeEdition",
        link: "https://github.com/zomblic/GuessWho-EmployeeEdition",
        image: employee,
        repo: "https://github.com/zomblic/GuessWho-EmployeeEdition/",
        description: "A basic employee tracker that helps create, manage and update employee records."
    },
    {
        title: "WeatherMeNow",
        link: "https://weatheringnow.onrender.com/",
        repo: "https://github.com/zomblic/WeatherMeNow",
        image: weather,
        description: "A weather app that provides real-time weather updates for any city."
    },
    {
        title: "MealMuse",
        link: "https://alexis-menendez.github.io/Project-1-Meal-Muse/",
        image: MealMuseLogo,
        repo: "https://alexis-menendez.github.io/Project-1-Meal-Muse/",
        description: "A meal planner that allows you to create recipes and organize meal plans."
    },
    {
        title: "Peoples",
        link: " https://peoples.onrender.com",
        image: placeholder,
        repo: "https://github.com/zomblic/Peoples",
        description: "A candidate search using Github."
    }
];
