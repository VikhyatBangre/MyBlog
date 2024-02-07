import MyNavbar from "./MyNavbar";

const Base = ({ title =" Welcome ",children})=>{
    return (
        <div className="container-fluid m-0 p-0">

            <MyNavbar />

            { children }
            <footer></footer>
            
        </div>
    );
};

export default Base; 