import './style.min.css'

const Container = (props) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center flex-column flex-md-row">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Container;