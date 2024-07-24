import './TrustPilot.css'
export default function TrustPilot() {
    return (
        <div className='trustpilot'>

            <div className='rectangul'>
                <h2>60K+</h2>
                <span>Live Courses</span>
            </div>

            <div className='rectangul'>
                <h2>35K+</h2>
                <span>Category</span>
            </div>

            <div className='rectangul'>
                <div className='top-side'>
                    <img src="/assets/img/star.svg" alt="" />
                    <h2>Trustpilot</h2>
                </div>
                <div className='bottom-side'>
                    <p>View our 1,602 reviews</p>
                    <div>
                        <span>4.9</span>
                        <div className='fa fa-star checked'></div>
                    </div>
                </div>
            </div>

            <div className='rectangul'>
                <h2>25K+</h2>
                <span>Professionals</span>
            </div>

            <div className='rectangul'>
                <h2>125K+</h2>
                <span>Students</span>
            </div>
        </div>
    )
}
