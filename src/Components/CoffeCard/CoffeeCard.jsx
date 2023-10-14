
import { AiFillEye, AiFillDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';


// AiFillEye
// FiEdit2
// AiOutlineDelete
import PropTypes from 'prop-types'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const CoffeeCard = ({ coffee, setCoffee, allCoffee }) => {
    const { _id, coffeeName, quantity, supplier, taste, category, details, img } = coffee
    const navigate = useNavigate()
    // const [deleteItem, setDelete] = useState(false)
    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // setDelete(true)
                fetch(`http://localhost:5000/allcoffee/${_id}`, {
                    method: 'Delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                `${coffeeName} has been removed from database`,
                                'success'
                            )
                            const remainingCoffee = allCoffee.filter(thisCoffee => thisCoffee._id !== _id)
                            setCoffee(remainingCoffee)
                        }
                    })


            }

        })
    }
    // console.log(deleteItem);

    return (
        <div className='flex justify-between items-center p-5 gap-4 w-full md:w-96 lg:w-[500px] bg-amber-50 bg-opacity-70 shadow-md rounded-xl '>
            <div>
                <img src={img} className='w-full' alt="" />
            </div>
            <div className='flex gap-4 items-center'>
                <div>
                    <h2 className="text-xl font-semibold">Name: {coffeeName}</h2>
                    <h2 className="text-lg">Supplied By: {supplier}</h2>
                    <h2 className="text-lg">Taste: {taste}</h2>
                    <h2 className="text-lg">Availabe: {quantity} pc</h2>
                </div>
                <div className='flex flex-col gap-4 '>
                    <button onClick={() => { navigate(`/details/${_id}`) }} className='btn btn-square btn-sm rounded-md  bg-amber-700 hover:btn-warning text-white'><AiFillEye /></button>
                    <button onClick={() => { navigate(`/updatecoffee/${_id}`) }} className='btn btn-square btn-sm rounded-md bg-gray-900 hover:btn-ghost text-white'> <FiEdit2 /></button>
                    <button onClick={() => { handleDelete(_id) }} className='btn btn-square btn-sm bg-red-600 text-white hover:btn-error rounded-md '><AiFillDelete /></button>
                </div>
            </div>

        </div>
    );
};

export default CoffeeCard;
CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    allCoffee: PropTypes.array,
    setCoffee: PropTypes.func

}