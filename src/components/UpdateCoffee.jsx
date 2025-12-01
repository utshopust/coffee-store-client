import React from "react";
import { useLoaderData } from "react-router";

const UpdateCoffee = () => {
  const { name, price, quantity, photo, supplier, taste, details } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    // if the form is big use this
    // const formData = new FormData(form);
    // const UpdatedCoffee = Object.fromEntries(formData.entries());
    // console.log(UpdatedCoffee);

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      price,
      details,
      photo,
    };
    console.log(updatedCoffee);
  };

  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl ">Update Coffee</h1>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="Enter Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              className="input w-full"
              placeholder="Enter coffee Quantity "
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input w-full"
              placeholder="Enter Coffee Supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              className="input w-full"
              placeholder="Enter Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input w-full"
              placeholder="Enter Coffee Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input w-full"
              placeholder="Enter Coffee Details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border my-6 p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            className="input w-full"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        <input
          type="submit"
          value="Update Coffee"
          className="btn w-full bg-yellow-500"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
