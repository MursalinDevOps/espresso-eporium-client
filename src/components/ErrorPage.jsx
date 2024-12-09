import errorPage from '../assets/404/404.gif'
const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <img src={errorPage} alt="" />
        </div>
    );
};

export default ErrorPage;