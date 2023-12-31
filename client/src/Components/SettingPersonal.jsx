import { Button } from "@material-tailwind/react";

export default function SettingPersonal() {
  return (
    <>
      <div className="grid grid-cols-3 pt-10">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Personal Information</h1>
          <p className="text-slate-500 text-sm">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div className="col-span-2 space-y-5 divide-y divide-slate-300 rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white">
          <div className="grid grid-cols-6 gap-4 p-5">
            <div className="space-y-2 col-span-3">
              <h1 className="text-sm font-semibold text-slate-800">
                First Name
              </h1>
              <input
                type="text"
                className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 col-span-3">
              <h1 className="text-sm font-semibold text-slate-800">
                Last Name
              </h1>
              <input
                type="text"
                className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 col-span-4">
              <h1 className="text-sm font-semibold text-slate-800">Email</h1>
              <input
                type="text"
                className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 col-span-3">
              <h1 className="text-sm font-semibold text-slate-800">
                Telephone Number
              </h1>
              <input
                type="text"
                className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 col-span-3">
              <h1 className="text-sm font-semibold text-slate-800">Country</h1>
              <input
                type="text"
                className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 col-span-full">
              <h1 className="text-sm font-semibold text-slate-800">
                Street Address
              </h1>
              <textarea className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"></textarea>
            </div>
            <div className="space-y-2 col-span-2">
              <h1 className="text-sm font-semibold text-slate-800">City</h1>
              <input
                type="text"
                className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 col-span-2">
              <h1 className="text-sm font-semibold text-slate-800">
                State / Province
              </h1>
              <input
                type="text"
                className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 col-span-2">
              <h1 className="text-sm font-semibold text-slate-800">
                ZIP / Postal Code
              </h1>
              <input
                type="text"
                className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="w-full flex justify-end gap-3 px-5 py-3">
            <Button color="blue" variant="text" className="capitalize text-sm">
              Cancel
            </Button>
            <Button
              color="blue"
              variant="gradient"
              className="capitalize text-sm"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
