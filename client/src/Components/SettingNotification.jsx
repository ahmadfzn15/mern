import { Button, Checkbox } from "@material-tailwind/react";

export default function SettingNotification() {
  return (
    <>
      <div className="grid grid-cols-3 pt-10">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Notifications</h1>
          <p className="text-slate-500 text-sm">
            We&apos;ll always let you know about important changes,but you pick
            what else you want to hear about.
          </p>
        </div>
        <div className="col-span-2 space-y-5 divide-y divide-slate-300 rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white">
          <div className="flex flex-col gap-4 p-5">
            <div className="space-y-3">
              <h1 className="text-sm font-semibold text-slate-800">By Email</h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  <Checkbox id="comments" color="blue" />
                  <div className="mt-4">
                    <label
                      htmlFor="comments"
                      className="text-sm font-semibold text-slate-800 cursor-pointer"
                    >
                      Comments
                    </label>
                    <p className="text-xs text-slate-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Checkbox id="candidates" color="blue" />
                  <div className="mt-4">
                    <label
                      htmlFor="candidates"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Candidates
                    </label>
                    <p className="text-xs text-slate-500">
                      Get notified when a candidate accepts for a job.
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Checkbox id="offers" color="blue" />
                  <div className="mt-4">
                    <label
                      htmlFor="offers"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Offers
                    </label>
                    <p className="text-xs text-slate-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
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
