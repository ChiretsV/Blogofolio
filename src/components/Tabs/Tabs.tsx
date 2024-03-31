import './Tabs.css'

function Tabs() {
    return ( 
        <div className='tabs-wrapper'>
            <div className="tabs-btn active">
                <p className="tabs-btn-text">All</p>
            </div>
            <div className="tabs-btn">
                <p className="tabs-btn-text">My favorites</p>
            </div>
            <div className="tabs-btn">
                <p className="tabs-btn-text">Popular</p>
            </div>
        </div>
     );
}

export default Tabs
