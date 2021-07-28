import Header from "../../Components/header/Header";
import Sidebar from "../../Components/sidebar/Sidebar";
import Posts from "../../Components/posts/Posts"
import './home.css';
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async ()=> {
            axios.get("/")
        }
    },[])

    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
