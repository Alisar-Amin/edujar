import './Category.css'
export default function Category({ img, title }) {
    return (
        <div className='category'>
            <div className='circle'>
                <img src={img} alt="" />
            </div>
            <h2>{title}</h2>
        </div>
    )
}
