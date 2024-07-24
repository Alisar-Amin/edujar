import './Views.css'

export default function Views() {
    const parsonal = [
        {
            name: 'Adrian Smith',
            img: '/assets/img/Ellipse1.png'
        },
        {
            name: 'Adrian Smith',
            img: '/assets/img/Ellipse2.png'
        },
        {
            name: 'Adrian Smith',
            img: '/assets/img/Ellipse3.png'
        },
        {
            name: 'Adrian Smith',
            img: '/assets/img/Ellipse4.png'
        },
        {
            name: 'Adrian Smith',
            img: '/assets/img/Ellipse5.png'
        }
    ]
    return (
        <div className='views'>
            <img src="/assets/img/Frame.png" alt="" className='img-bg' />
            <div className='view-bg'>
                <h1>What our client’s say</h1>
                <img src="/assets/img/comma.svg" alt="" />
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                <span>Adrian Smith</span>
                <div className='parsonal-img'>
                    <i class="fa-solid fa-arrow-left"></i>
                    {
                        parsonal.map(element => {
                            return (
                                <img src={element.img} alt="" />
                            )
                        })
                    }
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}
