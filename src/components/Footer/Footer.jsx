import './Footer.css'

export default function Footer({ logoPartOne, logoPartTwo, navItems, legal }) {
    return (
        <div className='footer'>

            <div>
                <h2 className='logo'>{logoPartOne}<span>{logoPartTwo}</span></h2>
                <p className='desc'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...</p>
                <p className='marketing'><i class="fa-regular fa-copyright"></i> 2024 <span>edujar</span> - All Rights Reserved</p>
            </div>

            <div>
                <h2>Quick links</h2>
                <ul>
                    {navItems.map((element, index) => {
                        return (
                            <li key={index}><a href="#">{element}</a></li>
                        )
                    })}
                </ul>
            </div>

            <div>
                <h2>Legal</h2>
                <ul>
                    {legal.map((element, index) => {
                        return (
                            <li key={index}><a href="#">{element}</a></li>
                        )
                    })}
                </ul>
            </div>

            <div>
                <h2>Quick links</h2>
                <input type="email" placeholder='Enter Email' />
                <button>Subscribe</button>
            </div>

        </div>
    )
}
