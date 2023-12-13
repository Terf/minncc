export default function SellerForm() {
  return (
    <div className="min-h-screen bg-base-200 py-24 justify-center flex">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          {[
            {
              label: "Farm Address (location)",
              type: "text",
              name: "address",
            },
            {
              label: "Business Name & Contact Person",
              type: "text",
              name: "business",
            },
            {
              label: "Phone Number",
              type: "tel",
              name: "phone",
            },
            {
              label: "Email",
              type: "email",
              name: "email",
            },
            {
              label: "Farm Size (acres)",
              type: "number",
              name: "size",
            },
            {
              label:
                "Please describe your current, if any, Land Management procedures",
              type: "textarea",
              name: "land-management",
            },
            {
              label: "What types of crops do you grow?",
              type: "checkbox",
              name: "crops",
              options: [
                "Corn",
                "Soybeans",
                "Wheat",
                "Barley",
                "Oats",
                "Rye",
                "Canola",
                "Sunflower",
                "Flax",
                "Sorghum",
                "Alfalfa",
                "Hay",
                "Other",
              ],
            },
            {
              label:
                "For each crop checked above, please state how many acres you dedicate per planting season.",
              type: "textarea",
              name: "acres",
            },
            {
              label: "What types of livestock do you rear?",
              type: "textarea",
              name: "livestock",
            },
            {
              label:
                "Do you use any of the following soil management techniques?",
              type: "textarea",
              name: "soil-management",
            },
            {
              label:
                "Are you open to using any of these soil management techniques?",
              type: "textarea",
              name: "soil-management",
            },
          ].map((input, index) =>
            input.type === "checkbox" ? (
              (input?.options || []).map((option, index) => (
                <div key={index} className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">{option}</span>
                    <input
                      type="checkbox"
                      name={input.name}
                      value={option}
                      className="checkbox checkbox-primary"
                    />
                  </label>
                </div>
              ))
            ) : input.type === "textarea" ? (
              <div className="form-control" key={index}>
                <label className="label">
                  <span className="label-text">{input.label}</span>
                </label>
                <textarea
                  name={input.name}
                  className="textarea h-24 textarea-bordered"
                  required
                ></textarea>
              </div>
            ) : (
              <div className="form-control" key={index}>
                <label className="label">
                  <span className="label-text">{input.label}</span>
                </label>
                <input
                  type={input.type}
                  name={input.name}
                  className="input input-bordered"
                  required
                />
              </div>
            )
          )}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
