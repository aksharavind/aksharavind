import './App.css';
import Course from './course';
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';

function App() {
    return (
        <>
            <Course name="Akshaya" designation="Software Developer" pic={img1} exp={3} show={true}/>
            <Course name="Aswin" designation="Data Analyst" pic={img2} show={true}/>
            <Course name="Vetri" designation="Software Architect" pic={img3} show={true} />
        </>
    );
}

export default App;
