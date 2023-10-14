import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            {data.coffeeName}

        </div>
    );
};

export default Details;