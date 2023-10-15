import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";

const UpdateCoffee = () => {
    const thisCoffee = useLoaderData()
    console.log(thisCoffee);
    const { _id, coffeeName, quantity, supplier, taste, category, details, img } = thisCoffee
    const updateInfo = e => {
        e.preventDefault()
        const form = e.target
        const coffeeName = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const img = form.img.value
        const formData = { coffeeName, quantity, supplier, taste, category, details, img }
        console.log(formData);
        // /update/: id
        fetch(`http://localhost:5000/allcoffee/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire(
                        'Updated!',
                        'File Updated Succesfully!',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="max-w-7xl mx-auto p-4">
            <Navbar></Navbar>
            <h1 className="text-3xl text-center font-medium">
                Updating the data of {coffeeName} </h1>
            <form onSubmit={updateInfo}>

                <div className="space-y-4">
                    {/* row 1 */}
                    <div className="w-full md:flex justify-between gap-4 ">
                        <div className="w-full space-y-3">
                            <div>
                                <label className="text-amber-900 font-medium">Coffee Name</label>
                            </div>
                            <input type="text" name="name" defaultValue={coffeeName} placeholder="Coffee Name" className="w-full text-amber-950 font-medium  px-4 py-2 outline-amber-950 border rounded-lg  border-amber-900" required />
                        </div>
                        <div className="w-full space-y-3">
                            <div>
                                <label className="text-amber-900  font-medium">Available Quantity</label>
                            </div>
                            <input type="text" defaultValue={quantity} placeholder="Quantity" name="quantity" className="w-full px-4 py-2 text-amber-950 font-medium outline-amber-950 border rounded-lg  border-amber-900" required />
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className="w-full md:flex justify-between gap-4 ">
                        <div className="w-full space-y-3">
                            <div>
                                <label className="text-amber-900 font-medium">Supplier</label>
                            </div>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="w-full px-4 py-2 text-amber-950 font-medium outline-amber-950 border rounded-lg  border-amber-900" required />
                        </div>
                        <div className="w-full space-y-3">
                            <div>
                                <label className="text-amber-900 font-medium">Taste</label>
                            </div>
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="w-full px-4 py-2 text-amber-950 font-medium  outline-amber-950 border rounded-lg  border-amber-900" required />
                        </div>
                    </div>
                    {/* row 3 */}
                    <div className="w-full md:flex justify-between gap-4 ">
                        <div className="w-full space-y-3">
                            <div>
                                <label className="text-amber-900 font-medium">Category</label>
                            </div>
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="w-full px-4 py-2 text-amber-950 font-medium outline-amber-950 border rounded-lg  border-amber-900" required />
                        </div>
                        <div className="w-full space-y-3">
                            <div>
                                <label className="text-amber-900 font-medium">Details</label>
                            </div>
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="w-full px-4 py-2 text-amber-950 font-medium outline-amber-950 border rounded-lg  border-amber-900" required />
                        </div>
                    </div>
                    {/* row 4 */}
                    <div className="w-full ">
                        <div className="w-full space-y-3">
                            <div>
                                <label className="text-amber-900 font-medium">Photo URL </label>
                            </div>
                            <input type="text" name="img" defaultValue={img} placeholder="URL" className="w-full px-4 py-2 text-amber-950 font-medium outline-amber-950 border rounded-lg  border-amber-900" required />
                        </div>

                    </div>
                    <button type="submit" className="btn w-full rounded-xl outline-amber-950 border-amber-950  hover:bg-amber-950 text-white bg-amber-950 bg-opacity-80 normal-case font-rancho text-xl"> Update </button>
                </div>
            </form>


        </div>
    );
};

export default UpdateCoffee;