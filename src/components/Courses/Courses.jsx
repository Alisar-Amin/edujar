import Course from '../Course/Course'
import './Courses.css'
export default function Courses() {
    const course = [
        {
            lesson: '25x Lesson',
            type: 'Design',
            title: 'Supervised Machine Learning: Regression and Classification',
            info: 'For athletes, high altitude produces two contradi effects on performance.',
            img: '/assets/img/vector3.svg',
            color: '#24D198'
        },
        {
            lesson: '16x Lesson',
            type: 'Marketing',
            title: 'Programming for Everybody (Getting Started with Python)',
            info: 'For athletes, high altitude produces two contradi effects on performance.',
            img: '/assets/img/vector.svg',
            color: '#00C1FF'
        },
        {
            lesson: '38x Lesson',
            type: 'Programming',
            title: 'Leading Teams: Developing as a Leader',
            info: 'For athletes, high altitude produces two contradi effects on performance.',
            img: '/assets/img/vector2.svg',
            color: '#F15568'
        },
        {
            lesson: '25x Lesson',
            type: 'Design',
            title: 'Powerful mental tools to help you master tough subjects',
            info: 'For athletes, high altitude produces two contradi effects on performance.',
            img: '/assets/img/vector1.svg',
            color: '#7F56D9'
        },
        {
            lesson: '16x Lesson',
            type: 'Marketing',
            title: 'Programming for Everybody (Getting Started with Python)',
            info: 'For athletes, high altitude produces two contradi effects on performance.',
            img: '/assets/img/vector4.svg',
            color: '#FF6905'
        },
        {
            lesson: '38x Lesson',
            type: 'Programming',
            title: 'Leading Teams: Developing as a Leader',
            info: 'For athletes, high altitude produces two contradi effects on performance.',
            img: '/assets/img/vector2.svg',
            color: '#FAB437'
        }
    ];
    return (
        <div className='courses'>
            <h1>Popular Courses</h1>
            <div className='container'>
                <p>Let’s join our best classes with our famous instructor and institutes</p>
                <div className='controll'>
                    <button><i class="fa-solid fa-chevron-left"></i></button>
                    <button><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <div className='course-content'>
                {
                    course.map(element => {
                        return (
                            <Course lesson={element.lesson} type={element.type} title={element.title} info={element.info} img={element.img} color={element.color}/>
                        )
                    })
                }
            </div>
            <button className='btn-courses'>Explore Courses</button>
        </div>
    )
}
