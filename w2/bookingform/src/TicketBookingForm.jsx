import "./styles/ticket-booking-form.css";

function TicketBookingForm({
  formData,
  handleInputChange,
  handleCheckboxChange,
    onSubmit,
}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);  // Pass the form data to the onSubmit function
      }

  return (
    <div className="ticket-booking-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="number"
            name="amountOfTickets"
            value={formData.amountOfTickets}
            onChange={handleInputChange}
            placeholder="Amount of tickets"
          />
          <select
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          >
            <option value="">Select title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </select>
        </div>

        <div className="row-two">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last name"
          />
        </div>

        <div className="row-three">
            <p>Godkänn vilkoren</p>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleCheckboxChange}
          />
          <button type="submit">Book ticket</button>
        </div>
      </form>
    </div>
  );
}

export default TicketBookingForm;
