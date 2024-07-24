import Category from '../Category/Category'
import './Categories.css'
export default function Categories() {
    const category = [
        {
            img: '/assets/img/pen.svg',
            title: 'Art & Design'
        },
        {
            img: '/assets/img/messege.svg',
            title: 'Communication'
        },
        {
            img: '/assets/img/bank.svg',
            title: 'Finance & Bank'
        },
        {
            img: '/assets/img/market.svg',
            title: 'Marketing'
        },
        {
            img: '/assets/img/camera.svg',
            title: 'Photography'
        }
    ];
    return (
        <div className='categories'>
            <h1>Explore Top Categories</h1>
            <p>Click on the categories and explore all courses</p>
            <div className='category-content'>
                <button><i class="fa-solid fa-chevron-left"></i></button>
                {
                    category.map(element => {
                        return (
                            <Category img={element.img} title={element.title} />
                        )
                    })
                }
                <button><i class="fa-solid fa-chevron-right"></i></button>
            </div>

        </div>
    )
}
