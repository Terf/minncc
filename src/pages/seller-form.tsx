import { useState } from "react";
import { section1, section2 } from "../questions/seller-form";

type FormInput = {
  label: string;
  type: string;
  name: string;
  options?: string[];
};

function inputMarkup(input: FormInput, index: number) {
  return input.type === "checkbox" ? (
    <div>
      <p className="mt-2">{input.label}</p>

      {(input?.options || []).map((option, index) => (
        <div key={index} className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">{option}</span>
            <input
              type="checkbox"
              name={`${input.name}[]`}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
      ))}
    </div>
  ) : input.type === "radio" ? (
    <div>
      <p className="mt-2">{input.label}</p>
      {(input?.options || []).map((option, index) => (
        <div className="form-control" key={index}>
          <label className="label cursor-pointer">
            <span className="label-text">{option}</span>
            <input
              type="radio"
              name={input.name}
              value={option}
              className="radio radio-primary"
            />
          </label>
        </div>
      ))}
    </div>
  ) : input.type === "textarea" ? (
    <div className="form-control" key={index}>
      <label className="label">{input.label}</label>
      <textarea
        name={input.name}
        className="textarea h-24 textarea-bordered"
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
      />
    </div>
  );
}

export default function SellerForm() {
  const [showSecondForm, setShowSecondForm] = useState(false);

  return (
    <div className="min-h-screen bg-base-200 text-base-content py-24 justify-center flex">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form
          className="card-body"
          onSubmit={(e) => {
            // todo
            e.preventDefault();
          }}
        >
          <div className={showSecondForm ? "hidden" : ""}>
            {section1.map(inputMarkup)}
            <div className="form-control mt-6">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSecondForm(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Continue
              </button>
            </div>
          </div>
          {showSecondForm && (
            <>
              <p className="text-base-content mb-1">
                This section is optional. Please fill it out &mdash; any
                additional information increases your chances of being matched
                with a buyer.
              </p>
              <hr className="mb-4" />
              {section2.map(inputMarkup)}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
