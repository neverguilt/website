"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useUiContext } from "@/app/context/UiContext";
import { sendGTMEvent } from "@next/third-parties/google";

const url = process.env.NEXT_PUBLIC_API_URL || "https://ambicasteelworks.in";

interface IContactFormState {
  fullName: string;
  mobileNumber: string;
}

const ContactForm: React.FC = () => {
  const { dispatch } = useUiContext();
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");
  // State for form input fields
  const [formData, setFormData] = useState<IContactFormState>({
    fullName: "",
    mobileNumber: "",
  });
  // service types and budget estimates defined as arrays of objects
  const serviceTypes = [
    { value: "Dimensional Letters", label: "Dimensional Letters" },
    { value: "Illuminated Letters", label: "Illuminated Letters" },
    { value: "Etched and Engraved", label: "Etched and Engraved" },
    { value: "Logo Signs", label: "Logo Signs" },
    { value: "Monument Signs", label: "Monument Signs" },
    { value: "Other", label: "Other" },
  ];

  // Update state when project type or budget is selected
  const handleProjectTypeSelect = (type: string) =>
    setSelectedProjectType(type);

  // Function to determine button style
  const getButtonStyle = (value: string, selectedValue: string) => {
    return value === selectedValue
      ? "btn btn-form-select relative z-10 w-full overflow-hidden whitespace-nowrap border border-primary px-2 py-4 bg-primary text-white"
      : "btn btn-form-select relative z-10 w-full overflow-hidden whitespace-nowrap border border-primary px-2 py-4";
  };

  // Handle input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.mobileNumber.trim() !== "" &&
      selectedProjectType !== ""
    );
  };

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${url}/api/submitform`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          mobile: formData.mobileNumber,
          selectedProjectType,
        }),
      });
      // Handle Too Many Requests error here
      // For example, show an error message to the user
      if (response.status === 429) {
        console.error("Too Many Requests: Please try again later");
        dispatch({
          type: "SET_ALERT",
          payload: {
            type: "error",
            message: "Too Many Requests:try again in a min",
          },
        });
      } else if (response.status === 400) {
        dispatch({
          type: "SET_ALERT",
          payload: {
            type: "info",
            message: "Enter valid name and mobile number",
          },
        });
        setFormData({
          fullName: "",
          mobileNumber: "",
        });
        sendGTMEvent({
          event: "contactFormSubmittedFail",
          category: "lead",
          value: { errorMessage: "Validation error occurred" },
        });
        // Handle Bad Request error here
        // For example, show an error message to the user
      } else if (response.ok) {
        const responseData = await response.json();
        console.log("API Response:", responseData);
        setSelectedProjectType("");
        setFormData({
          fullName: "",
          mobileNumber: "",
        });
        // Handle successful API response here
        // For example, show a success message to the user
        dispatch({
          type: "SET_ALERT",
          payload: {
            type: "success",
            message: "Thanks, We'll reach out to you soon",
          },
        });
        //successful gtm event sent
        sendGTMEvent({
          event: "contactFormSubmittedSuccess",
          category: "lead",
          value: {
            name: formData.fullName,
            mobile: formData.mobileNumber,
            timestamp: new Date().toISOString(),
          },
          conversionValue: 300, // Assuming INR
          currency: "INR", // Configure in GTM
        });
      } else {
        // Handle errors
        console.error("Error:", response.statusText);
        // For example, show an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors
      // For example, show an error message to the user
      dispatch({
        type: "SET_ALERT",
        payload: {
          type: "error",
          message: "Server is busy, try again",
        },
      });
      sendGTMEvent({
        event: "contactFormSubmittedFail",
        category: "lead",
        value: { errorMessage: "Validation error occurred" },
      });
    }
  };
  return (
    <section className="section relative z-10 bg-gradient-to-b from-body to-secondary">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-10">
            {/* service Type Section */}
            <div className="row border-b border-primary pb-12">
              <div className="mb-6 md:mb-0 md:col-4 lg:col-3">
                <h3 className="  md:mt-4 ">Select Product Type</h3>
              </div>
              <div className=" md:col-8 lg:col-9 ">
                <div className="row gap-y-4">
                  {serviceTypes.map((type, index) => (
                    <div key={index} className="sm:col-6 lg:col-4">
                      <button
                        value={type.value}
                        onClick={() => handleProjectTypeSelect(type.value)}
                        className={getButtonStyle(
                          type.value,
                          selectedProjectType,
                        )}
                      >
                        <span
                          data-text={type.label}
                          className="pointer-events-none after:w-full"
                        >
                          <span>{type.label}</span>
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className=" row pt-12 ">
              <div className="mb-6 md:mb-0 md:col-4 lg:col-3">
                <h3 className=" has-bullet mt-2">Contact Info</h3>
              </div>
              <div className="md:col-8 lg:col-9">
                <form onSubmit={handleSubmit} className="row pt-1">
                  {/* Full Name Field */}
                  <div className="relative mb-10 md:col-6">
                    <input
                      className="form-input w-full"
                      type="text"
                      id="full_name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-label left-3" htmlFor="full_name">
                      Full Name *
                    </label>
                  </div>

                  {/* mobile Field */}
                  <div className="relative mb-10 md:col-6">
                    <input
                      className="form-input w-full"
                      type="tel"
                      id="mobile"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-label left-3" htmlFor="mobile">
                      Mobile *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 text-right">
                    <button
                      className="bg-primary  rounded-[70px] py-3 px-8  text-secondary"
                      type="submit"
                      disabled={!isFormValid()}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
