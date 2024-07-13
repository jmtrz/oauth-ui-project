import { useRouteError } from 'react-router-dom'

const NotFound = () => {
    const error = useRouteError();

    console.log(error);

    return (
        <div>
        <h1>Oop!</h1>
        <p>Sorry, Unexpected Error Occured</p>
        {/* <p>
            <i>{ error.statusText || error.message }</i>
        </p> */}
        </div>
    )
}

export default NotFound
