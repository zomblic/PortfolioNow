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
        description: "A read me generator that helps you create project documentation effortlessly."
    },
    {
        title: "VROOM-VROOM",
        link: "https://github.com/zomblic/MAKING-VROOM-VROOMS",
        image: car,
        description: "A vehicle management system for tracking, adding, and updating vehicles."
    },
    {
        title: "GuessWho-EmployeeEdition",
        link: "https://github.com/zomblic/GuessWho-EmployeeEdition",
        image: employee,
        description: "An employee tracker that helps manage and update employee records."
    },
    {
        title: "WeatherMeNow",
        link: "https://github.com/zomblic/WeatherMeNow",
        image: weather,
        description: "A weather app that provides real-time weather updates for any city."
    },
    {
        title: "MealMuse",
        link: "https://alexis-menendez.github.io/Project-1-Meal-Muse/",
        image: MealMuseLogo,
        description: "A meal planner that allows you to search for recipes and organize meal plans."
    },
    {
        title: "Placeholder",
        link: "#",
        image: placeholder,
        description: "This is a placeholder project description."
    }
];
