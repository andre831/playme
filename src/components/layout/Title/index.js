import './style.min.css';

export default function Title(props){
    return(
        <div className='d-flex justify-content-center text-start title'>
            <h2>
                {props.children}
            </h2>
        </div>
    );
}