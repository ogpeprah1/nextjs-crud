function ChangePassword() {
  return (
    <form action="">
      <h2 className="text-3xl font-extrabold text-wrap w-full">
        Change Password
      </h2>
      <br />
      <div className="flex justify-between gap-[100px]">
        <div>
          <label htmlFor="" className="font-bold text-red-400">
            Old password
          </label>
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter your old password"
            className="border-b-2 pb-2 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="" className="font-bold text-green-400">
            New password
          </label>
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter your old password"
            className="border-b-2 pb-2 focus:outline-none"
          />
        </div>
      </div>
      <br />
      <button type="submit" className="bg-blue-500 text-white py-1 px-5 rounded-2xl">
        Submit
      </button>
    </form>
  );
}

export default ChangePassword;
