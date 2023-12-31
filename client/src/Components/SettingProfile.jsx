import { Button } from "@material-tailwind/react";
import { HiPhoto } from "react-icons/hi2";
import { useRef, useState } from "react";

export default function SettingProfile() {
  const photoProfile = useRef(null);
  const photoCover = useRef(null);
  const [photoProfilePreview, setPhotoProfilePreview] = useState(null);
  const [photoCoverPreview, setPhotoCoverPreview] = useState(null);

  const changePicture = (e, type) => {
    const foto = e.target.files[0];
    const url = URL.createObjectURL(foto);

    switch (type) {
      case "profile":
        setPhotoProfilePreview(url);
        break;
      case "cover":
        setPhotoCoverPreview(url);
        break;
      default:
        setPhotoCoverPreview(null);
        break;
    }
  };

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Profile</h1>
          <p className="text-slate-500 text-sm">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <div className="col-span-2 space-y-5 divide-y divide-slate-300 rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white">
          <div className="flex flex-col gap-4 p-5">
            <div className="space-y-2">
              <h1 className="text-sm font-semibold text-slate-800">Photo</h1>
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src={photoProfilePreview ?? "/img/user.png"}
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  color="blue"
                  size="sm"
                  variant="gradient"
                  className="h-min"
                  onClick={() => photoProfile.current.click()}
                >
                  Change
                </Button>
                <input
                  type="file"
                  ref={photoProfile}
                  onChange={(e) => changePicture(e, "profile")}
                  className="hidden"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-sm font-semibold text-slate-800">
                Cover Photo
              </h1>
              <div className="w-full border-2 border-dashed border-slate-300 rounded-lg overflow-hidden">
                {photoCoverPreview ? (
                  <img
                    src={photoCoverPreview}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full p-5 flex flex-col justify-center items-center text-xs">
                    <HiPhoto
                      className="w-20 h-20 text-slate-400"
                      onClick={() => photoCover.current.click()}
                    />
                    <div className="flex gap-1">
                      <h1
                        className="font-bold cursor-pointer"
                        onClick={() => photoCover.current.click()}
                      >
                        Upload a file
                      </h1>{" "}
                      <h1 className="text-slate-500">or drag and drop</h1>
                    </div>
                    <h1 className="text-slate-500">
                      Png, Jpg, Jpeg up to 10 mb.
                    </h1>
                    <input
                      type="file"
                      ref={photoCover}
                      onChange={(e) => changePicture(e, "cover")}
                      className="hidden"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-sm font-semibold text-slate-800">Username</h1>
              <input
                type="text"
                className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-sm font-semibold text-slate-800">Bio</h1>
              <textarea className="p-2 border border-slate-300 rounded-md bg-slate-100 w-full focus:outline-none text-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"></textarea>
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
