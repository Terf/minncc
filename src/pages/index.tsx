import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="w-full">
      <Image
        src="/dan-meyers-IQVFVH0ajag-unsplash.jpg"
        width={3992}
        height={2992}
        alt="Farm"
        style={{
          filter: "brightness(90%) hue-rotate(0deg)",
        }}
        className="w-full h-[25rem] md:h-[30rem] object-cover"
      />
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="MinnCC Logo"
        className="absolute top-4 md:left-48 left-1/2 transform -translate-x-1/2"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <h1
          style={{
            textShadow: "2px 2px 5px #333",
          }}
          className={`md:text-5xl text-4xl font-bold ${roboto.className}`}
        >
          MinnCC &mdash; Connecting Farmers and Businesses
        </h1>
        <a href="#" className="btn btn-primary mt-4">
          Buy offsets
        </a>
        <a href="seller-form" className="btn btn-secondary mt-4 ml-5">
          Sell offsets
        </a>
      </div>

      <div
        className={`bg-base-100 text-base-content grid grid-cols-12 px-4 py-6 md:px-48 md:py-16 gap-4 md:gap-16 ${roboto.className}`}
      >
        <div className="col-span-12 md:col-span-8">
          <div className="">
            <h4 className="text-2xl font-bold">Who Are We?</h4>
            <p className="py-2 mb-4">
              We exist to connect two constituencies &mdash; landowners and
              businesses. We help landowners unlock value from their existing
              properties. “Landowners” is a term that includes farmers who could
              monetize their carbon saving processes all the way to wilderness
              owners looking for alternative revenue streams. MinnCC exists to
              create and provide a market for any new carbon reduction plan that
              would generate credits used for offsets. Our market serves small
              and midsize businesses who, for any reason, want to offset their
              emissions.
            </p>
            <h4 className="text-2xl font-bold">What is Carbon Offsetting?</h4>
            <p className="py-2 mb-4">
              Carbon credits are a type of tradable permit that allow the holder
              to emit a certain amount of greenhouse gasses, typically carbon
              dioxide. One carbon credit represents 1 metric ton of carbon
              dioxide that has been reduced or removed from the atmosphere. The
              goal of carbon credits is to incentivize organizations to reduce
              their emissions of greenhouse gasses by imposing a cost on those
              emissions.
            </p>
            <p className="py-2 mb-4">
              Carbon offsetting is a rapidly growing market. The advent, and
              spread, of ESG investing coupled with the reality of climate
              change has led enterprises of all sizes to prioritize reducing
              their environmental impact. We believe that these initiatives are
              not limited to large enterprises and that by providing a platform
              for small and midsize companies to offset their emissions, we will
              make long term responsible capitalism accessible for companies of
              all sizes.
            </p>
            <h4 className="text-2xl font-bold">
              What Can A Farmer and/or Landowner Sell on MinnCC?
            </h4>
            <p className="py-2 mb-4">
              Farmers can get carbon credits from any of these sources:
            </p>
            <ul className="list-disc pl-8">
              <li>
                <span>
                  Agroforestry &mdash; the combination of agricultural and
                  forestry practices to improve environmental quality,
                  productivity and economic returns.
                </span>
              </li>
              <li>
                <span>
                  Peatland restoration and management - these are management
                  measures that aim to restore the original form and function of
                  peatland habitats to favorable conservation status.
                </span>
              </li>
              <li>
                <span>
                  Enhancing the amount of organic carbon content retained in
                  soils.
                </span>
              </li>
              <li>
                <span>
                  Managing the nutrient makeup of cropland and grasslands
                </span>
              </li>
              <li>
                <span>
                  Engaging in livestock and manure management practices.
                </span>
              </li>
            </ul>
            <h4 className="text-2xl font-bold mt-4">
              Farming And Carbon Credits: How to Get Started
            </h4>
            <p className="py-2 mb-4">
              First, click “Sell Offsets” and fill out the accompanying form.
              MinnCC has the expertise, tools, and support to maximize this new
              revenue stream.We will help you devise a plan to implement farming
              practices to improve soil health, enhancing its carbon
              sequestration and reducing carbon emissions.
            </p>
            <h4 className="text-2xl font-bold mt-4">
              What Does Carbon Farming Look Like?
            </h4>
            <p className="py-2 mb-4">
              Carbon farming is a science-based approach involving measuring
              initial data on the farm to know how changes can best be
              implemented and verified. This initial measurement allows us to
              verify all carbon credits you generate. We will contact you to
              gather baseline farm data including 3-5 years data on crops,
              yields, fertilizer rate application, farm practices, etc. This
              data will be used to both match you with the best possible carbon
              farming process and to account for all the generated carbon
              credits.
            </p>
            <p className="py-2 mb-4">
              After assessment, MinnCC will help you with a carbon farming plan
              that outlines the practices leading to the creation of your
              verified carbon credits. Some common examples of carbon farming
              methods that produce carbon credits include any of the following:
            </p>
            <ul className="list-disc pl-8">
              <li>Reduce tillage or no-fill farming</li>
              <li>Growing or increasing cover crops</li>
              <li>Reduced fertilizer application</li>
              <li>Efficient fuel use</li>
              <li>Improved residue management</li>
              <li>Prescribed (rotational) grazing</li>
              <li>Nitrogen management</li>
            </ul>
            <p className="py-2 mt-4">
              Click{" "}
              <a className="link" href="seller-form">
                here
              </a>{" "}
              to fill out the form and get started today.
            </p>

            <h4 className="text-2xl font-bold mt-4">
              What Can A Landowner Sell on MinCC?
            </h4>
            <p className="py-2 mb-4">
              This depends on the type of land that you own. If you: 1) Own 30
              or more acres of non-planted, naturally regenerating trees on your
              property; 2) Have the legal right to harvest on your land; and 3)
              Are able to commit to a 20-year agreement you are eligible for our
              Mature Forest Program.
            </p>
            <p className="py-2 mb-4">
              Our Mature Forest Program is designed to help you grow a more
              robust forest through sustainable management and harvesting over
              the next 20 years. This program generates credits by delaying
              timber harvesting until the trees have reached a minimum forest
              stand stocking of 130 sq. ft/acre.
              <small className="text-gray-400 block">
                **Salvage harvesting for personal use, like firewood, is
                permitted. Contact MinnCC for more details.
              </small>
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card w-full md:max-w-sm shadow-2xl bg-base-100 p-4">
            <h3 className="text-2xl font-bold">
              See how many credits you have and how much you can sell them for
            </h3>
            <a href="seller-form" className="btn btn-primary my-4">
              Click Here To Start Selling
            </a>
            <h4 className="text-2xl font-bold">About MinnCC</h4>
            <p>
              MinnCC is a platform that helps farmers earn money by selling
              carbon credits. We help farmers calculate the amount of carbon
              credits they have and provide them with a platform to sell them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
