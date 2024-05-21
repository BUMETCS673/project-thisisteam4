//  person would get directed to this page if they can put in a param that we do not have
import "./NotFound.css"
const NotFound = () => {
    return(
        <main>
        <h1>404</h1>
        <h3>Not Found</h3>
        {/* link to homepage */}
        <a>Go Back to Home</a>
        </main>
    )
} 

export default NotFound;