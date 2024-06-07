import useRole from "../../../hooks/useRole"
import AdminStatistics from "../Admin/AdminStatistics";

const Statistics = () => {
    const [role, isLoading] = useRole()
    return (
        <>
            {role === 'admin' && <AdminStatistics></AdminStatistics>}
        </>
    );
};

export default Statistics;