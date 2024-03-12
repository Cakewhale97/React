import { useState } from "react";
import TicketBookingForm from "./TicketBookingForm";

export default function FormData() {
  const [submissions, setSubmissions] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    amountOfTickets: 0,
    termsAccepted: false,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value =
      target.name === "amountOfTickets"
        ? parseInt(target.value, 10)
        : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: isNaN(value) && name === "amountOfTickets" ? 0 : value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      termsAccepted: event.target.checked,
    });
  };

  return (
    <div>
      <TicketBookingForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        onSubmit={(formData) => {
          console.log(formData); // Log the form data to the console
          setSubmissions([...submissions, formData]);
        }}
      />
    </div>
  );
}
