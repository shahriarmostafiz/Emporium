import Swal from 'sweetalert2'
import Navbar from '../Navbar/Navbar';
const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault()
        console.log('adding coffee');
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
        fetch('http://localhost:5000/allcoffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'amazing!',
                        'Coffee added!',
                        'success'
                    )
                }
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full lg:w-2/3 mx-auto bg-amber-50 p-8">
                <div className="text-center py-6 space-y-4 max-w-3xl mx-auto">
                    <h1 className="  text-6xl font-rancho">
                        Add New Coffee
                    </h1>
                    <p>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <form onSubmit={handleAddCoffee}>
                    <div className="space-y-4">
                        {/* row 1 */}
                        <div className="w-full md:flex justify-between gap-4 ">
                            <div className="w-full space-y-3">
                                <div>
                                    <label className="text-amber-900 font-medium">Coffee Name</label>
                                </div>
                                <input type="text" name="name" placeholder="Coffee Name" className="w-full px-4 py-2 outline-amber-950 border rounded-lg  border-amber-900" required />
                            </div>
                            <div className="w-full space-y-3">
                                <div>
                                    <label className="text-amber-900 font-medium">Available Quantity</label>
                                </div>
                                <input type="text" placeholder="Quantity" name="quantity" className="w-full px-4 py-2 outline-amber-950 border rounded-lg  border-amber-900" required />
                            </div>
                        </div>
                        {/* row 2 */}
                        <div className="w-full md:flex justify-between gap-4 ">
                            <div className="w-full space-y-3">
                                <div>
                                    <label className="text-amber-900 font-medium">Supplier</label>
                                </div>
                                <input type="text" name="supplier" placeholder="Supplier" className="w-full px-4 py-2 outline-amber-950 border rounded-lg  border-amber-900" required />
                            </div>
                            <div className="w-full space-y-3">
                                <div>
                                    <label className="text-amber-900 font-medium">Taste</label>
                                </div>
                                <input type="text" name="taste" placeholder="Taste" className="w-full px-4 py-2  outline-amber-950 border rounded-lg  border-amber-900" required />
                            </div>
                        </div>
                        {/* row 3 */}
                        <div className="w-full md:flex justify-between gap-4 ">
                            <div className="w-full space-y-3">
                                <div>
                                    <label className="text-amber-900 font-medium">Category</label>
                                </div>
                                <input type="text" name="category" placeholder="Category" className="w-full px-4 py-2 outline-amber-950 border rounded-lg  border-amber-900" required />
                            </div>
                            <div className="w-full space-y-3">
                                <div>
                                    <label className="text-amber-900 font-medium">Details</label>
                                </div>
                                <input type="text" name="details" placeholder="Details" className="w-full px-4 py-2  outline-amber-950 border rounded-lg  border-amber-900" required />
                            </div>
                        </div>
                        {/* row 4 */}
                        <div className="w-full ">
                            <div className="w-full space-y-3">
                                <div>
                                    <label className="text-amber-900 font-medium">Photo URL </label>
                                </div>
                                <input type="text" name="img" placeholder="Category" className="w-full px-4 py-2 outline-amber-950 border rounded-lg  border-amber-900" required />
                            </div>

                        </div>
                        <button type="submit" className="btn w-full rounded-xl outline-amber-950 border-amber-950  hover:bg-amber-950 text-white bg-amber-950 bg-opacity-80 normal-case font-rancho text-xl">Add Coffee</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddCoffee;