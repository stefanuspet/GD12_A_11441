import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import DaftarMenu from "../components/DaftarMenu";
import InputMenu from "../components/InputMenu";


const DashboardPage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) navigate("/login");
    }, [navigate]);

    return (
        <>
            <Welcome user={user}></Welcome>
            <InputMenu setData={setData} data={data}></InputMenu>
            <DaftarMenu data={data} setData={setData} />
        </>
    )
}
export default DashboardPage;