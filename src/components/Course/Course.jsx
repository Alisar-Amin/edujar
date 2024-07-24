import './Course.css'
export default function Course({ lesson, type, title, info, img, color }) {
    return (
        <div className='course'>
            <div className='top-content'>
                <div className='left-side'>
                    <div className='circle' style={{'backgroundColor': color}}>
                        <i class="fa-solid fa-caret-right"></i>
                    </div>
                    <span>{lesson}</span>
                </div>
                <button>{type}</button>
            </div>
            <h2>{title}</h2>
            <p className='info'>{info}</p>
            <div className='bottom-content'>
                <button>join</button>
                <div className='circle'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}
